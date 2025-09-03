import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs/promises";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to get projects from assets folders
  app.get("/api/projects", async (req, res) => {
    try {
      const projectData = await storage.getProjectFiles();
      res.json(projectData);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ error: "Failed to fetch project files" });
    }
  });

  // API route to get files from a specific category
  app.get("/api/projects/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const files = await storage.getProjectFilesByCategory(category);
      res.json(files);
    } catch (error) {
      console.error(`Error fetching projects for category ${req.params.category}:`, error);
      res.status(500).json({ error: "Failed to fetch category files" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
