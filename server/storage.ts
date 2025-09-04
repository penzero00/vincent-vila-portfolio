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
    "digital-art",
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
            '.webm': 'video/webm',
            '.mkv': 'video/x-matroska',
            '.flv': 'video/x-flv',
            '.wmv': 'video/x-ms-wmv',
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
        // Natural sort function for numerical ordering
        const naturalSort = (str1: string, str2: string): number => {
          // Split strings into chunks of numbers and letters
          const chunks1 = str1.match(/(\d+|\D+)/g) || [];
          const chunks2 = str2.match(/(\d+|\D+)/g) || [];
          
          const maxLength = Math.max(chunks1.length, chunks2.length);
          
          for (let i = 0; i < maxLength; i++) {
            const chunk1 = chunks1[i] || '';
            const chunk2 = chunks2[i] || '';
            
            // If both chunks are numbers, compare numerically
            if (/^\d+$/.test(chunk1) && /^\d+$/.test(chunk2)) {
              const num1 = parseInt(chunk1, 10);
              const num2 = parseInt(chunk2, 10);
              if (num1 !== num2) {
                return num1 - num2;
              }
            } else {
              // Compare as strings
              if (chunk1 !== chunk2) {
                return chunk1.localeCompare(chunk2);
              }
            }
          }
          
          return 0;
        };

        // Sort by filename using natural sort for numerical ordering
        return naturalSort(a.name, b.name);
      });
      
    } catch (error) {
      // If directory doesn't exist or is empty, return empty array
      console.warn(`Category directory ${category} not accessible:`, error);
      return [];
    }
  }
}

export const storage = new FileSystemStorage();
