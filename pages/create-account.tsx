import { NextPage } from "next";
import { useForm } from "react-hook-form";
import useUser from "../lib/client/useUser";

type CreateAccountForm = {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
};

const CreateAccount: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAccountForm>();

  const { onValid } = useUser();

  return (
    <div className="flex flex-col gap-3 justify-center items-center m-8">
      <header>
        <h1 className="text-2xl">회원가입</h1>
      </header>
      <form onSubmit={handleSubmit(onValid)} className="flex flex-col gap-2">
        <div className="p-3 bg-gray-300">
          <label>
            이름
            <input
              type="text"
              placeholder="이름을 입력해주세요"
              {...register("name", { required: "이름을 입력해주세요" })}
            />
          </label>
          <span>{errors?.email?.message}</span>
        </div>
        <div className="p-3 bg-gray-300">
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
        <input type="submit" value="회원가입" className="p-3 bg-gray-300" />
      </form>
    </div>
  );
};

export default CreateAccount;
