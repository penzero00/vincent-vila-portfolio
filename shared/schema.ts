import { z } from "zod";

export const projectFileSchema = z.object({
  name: z.string(),
  path: z.string(),
  type: z.string(),
  size: z.number().optional(),
  lastModified: z.date().optional(),
});

export const projectCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  files: z.array(projectFileSchema),
});

export type ProjectFile = z.infer<typeof projectFileSchema>;
export type ProjectCategory = z.infer<typeof projectCategorySchema>;

export type ProjectData = Record<string, ProjectFile[]>;
