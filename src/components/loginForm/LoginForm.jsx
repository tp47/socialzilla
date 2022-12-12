import { useForm } from "react-hook-form";

import LoginInput from "../loginInput/LoginInput";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    return;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
      <LoginInput
        type="text"
        placeholder="Enter a username"
        register={register("username")}
      />
      <LoginInput
        type="password"
        placeholder="Enter a password"
        register={register("password")}
      />
      <button className="w-1/2 p-3 text-white bg-purple-600 border-none cursor-pointer">
        Авторизоваться
      </button>
    </form>
  );
};

export default LoginForm;
