import { date, z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "Titulo es requerido",
  }),
  description: z.string({
    required_error: "La descropcion debe ser una cadena de texto",
  }),
  date: z.string().datetime().optional(),
  orden: z.number({ required_error: "El orden es requerido" }).optional(),
  numeronota: z
    .number({ required_error: "El numero de nota es requerido" })
    .optional(),
});
