import { type ProjectFile, type ProjectData } from "@shared/schema";
import path from "path";
import fs from "fs/promises";

export interface IStorage {
  getProjectFiles(): Promise<ProjectData>;
  getProjectFilesByCategory(category: string): Promise<ProjectFile[]>;
}

export class FileSystemStorage implements IStorage {
  private assetsPath = path.join(process.cwd(), "public", "assets");
  
  private categories = [
    "web-applications",
    "digital-designs", 
    "portraits",
    "murals",
    "3d-models"
  ];

  async getProjectFiles(): Promise<ProjectData> {
    const projectData: ProjectData = {};

    for (const category of this.categories) {
      try {
        projectData[category] = await this.getProjectFilesByCategory(category);
      } catch (error) {
        console.error(`Error reading category ${category}:`, error);
        projectData[category] = [];
      }
    }

    return projectData;
  }

  async getProjectFilesByCategory(category: string): Promise<ProjectFile[]> {
    const categoryPath = path.join(this.assetsPath, category);
    
    try {
      // Ensure directory exists
      await fs.access(categoryPath);
      
      const files = await fs.readdir(categoryPath);
      const projectFiles: ProjectFile[] = [];

      for (const file of files) {
        // Skip hidden files and .gitkeep
        if (file.startsWith('.')) continue;
        
        const filePath = path.join(categoryPath, file);
        const stats = await fs.stat(filePath);
        
        if (stats.isFile()) {
          // Get file extension to determine type
          const ext = path.extname(file).toLowerCase();
          let type = 'application/octet-stream';
          
          // Map common extensions to MIME types
          const mimeTypes: Record<string, string> = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
            '.webp': 'image/webp',
            '.svg': 'image/svg+xml',
            '.pdf': 'application/pdf',
            '.mp4': 'video/mp4',
            '.mov': 'video/quicktime',
            '.avi': 'video/x-msvideo',
            '.zip': 'application/zip',
            '.blend': 'application/x-blender',
            '.psd': 'image/vnd.adobe.photoshop',
            '.ai': 'application/illustrator',
          };
          
          if (mimeTypes[ext]) {
            type = mimeTypes[ext];
          }

          projectFiles.push({
            name: path.parse(file).name,
            path: `/assets/${category}/${file}`,
            type,
            size: stats.size,
            lastModified: stats.mtime,
          });
        }
      }

      return projectFiles.sort((a, b) => {
        // Sort by last modified date, newest first
        if (a.lastModified && b.lastModified) {
          return b.lastModified.getTime() - a.lastModified.getTime();
        }
        return a.name.localeCompare(b.name);
      });
      
    } catch (error) {
      // If directory doesn't exist or is empty, return empty array
      console.warn(`Category directory ${category} not accessible:`, error);
      return [];
    }
  }
}

export const storage = new FileSystemStorage();
