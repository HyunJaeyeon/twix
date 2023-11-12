import { NextPage } from "next";
import { useForm } from "react-hook-form";

type LoginForm = {
  email: string;
  password: string;
};

const LogIn: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onValid = () => {
    console.log("hi");
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center m-8">
      <header>
        <h1 className="text-2xl">로그인</h1>
      </header>
      <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-2">
        <div className="p-3 bg-gray-500">
          <label>
            아이디
            <input
              type="email"
              placeholder="이메일을 입력해주세요"
              {...register("email", { required: "이메일을 입력해주세요" })}
            />
          </label>
          <span>{errors?.email?.message}</span>
        </div>
        <div className="p-3 bg-gray-500">
          <label>
            비밀번호
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...register("password", { required: "비밀번호를 입력해주세요" })}
            />
          </label>
          <span>{errors?.password?.message}</span>
        </div>
        <input type="submit" value="login" className="p-3 bg-gray-500" />
      </form>
    </div>
  );
};

export default LogIn;
