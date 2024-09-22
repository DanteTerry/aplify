function LoginForm() {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-5 rounded-xl bg-white p-5 shadow-sm dark:bg-gray-800">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="rounded-[7px] border border-gray-300 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-400"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="rounded-[7px] border border-gray-300 p-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>

      <button className="rounded-[7px] bg-blue-600 p-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
        Log in
      </button>
    </div>
  );
}
export default LoginForm;
