"use server";

import { registerSchema } from "@/schema/schema";
import { TRegisterSchema } from "@/types/types";

export const registerAction = async (values: TRegisterSchema) => {
  const validateFields = registerSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Email sent !" };
};
