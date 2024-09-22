import { loginSchema } from "@/schema/login";
import { registerSchema } from "@/schema/register";
import { z } from "zod";

// register schema
export type TRegisterSchema = z.infer<typeof registerSchema>;

// login schema
export type TLoginSchema = z.infer<typeof loginSchema>;
