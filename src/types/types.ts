import { loginSchema, registerSchema } from "@/schema/schema";
import { z } from "zod";

// register schema
export type TRegisterSchema = z.infer<typeof registerSchema>;

// login schema
export type TLoginSchema = z.infer<typeof loginSchema>;
