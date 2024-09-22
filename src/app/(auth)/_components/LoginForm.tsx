"use client";

import { loginSchema } from "@/schema/login";
import { TLoginSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";

function LoginForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<TLoginSchema>({ resolver: zodResolver(loginSchema) });

  const onLogin = (data: TLoginSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onLogin)}
      className="mx-auto flex w-full max-w-md flex-col gap-5 rounded-xl border bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-800"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>
        <div className="flex w-full flex-col">
          <input
            id="email"
            type="email"
            className="rounded-[7px] border border-gray-300 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-400"
            placeholder="Enter your email"
            aria-label="Email"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="mt-2 text-xs text-red-700 dark:text-red-300">
              {errors.email?.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Password
        </label>
        <div className="flex w-full flex-col">
          <input
            type="password"
            id="password"
            className="rounded-[7px] border border-gray-300 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-400"
            placeholder="Enter your password"
            aria-label="Password"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="mt-2 text-xs text-red-700 dark:text-red-300">
              {errors.password?.message}
            </p>
          )}
        </div>
      </div>
      <FormError message="Login failed" />
      <FormSuccess message="Email sent" />
      <button
        disabled={isSubmitting}
        type="submit"
        className="flex items-center justify-center rounded-[7px] bg-blue-600 p-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
      >
        {isSubmitting ? (
          <Loader className="animate-spin" size={25} />
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
}
export default LoginForm;
