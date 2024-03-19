import { Project } from "@prisma/client";
import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  duration_start: z.date(),
  duration_end: z.date(),
  total_hours: z.number(),
}) satisfies z.ZodType<Project>;