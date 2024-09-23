"use server";

import { TLoginSchema } from "@/types/types";
import { loginSchema } from "@/schema/schema";

export const loginAction = async (values: TLoginSchema) => {
  const validateFields = loginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Email sent !" };
};
