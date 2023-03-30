import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../../components/Input";
import { FormStyled } from "../../../../styles/components/Form";
import { formRegisterSchema } from "./schema";
import { ButtonStyled } from "../../../../styles/components/Button";
import { api } from "../../../../services/api";
import { IUser, useUserStore } from "../../../../stores/user";

export interface IFormRegister {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

interface IResponseRegister {
  token: string;
  user: IUser;
}

type TMsgErrorRequest = {
  [key in "email" | "username"]?: {
    message: string;
  };
};

export const FormRegister = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormRegister>({
    resolver: yupResolver(formRegisterSchema),
  });
  const { setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [msgErrorRequest, setMsgErrorRequest] = useState<TMsgErrorRequest>(
    {} as TMsgErrorRequest
  );

  const handleRegister = async (dataRegister: IFormRegister) => {
    setIsLoading(true);
    try {
      const response = await api.post("/users", dataRegister);
      const { token, user }: IResponseRegister = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("@ziti:token", token);
      setUser(user);
      navigate("/feed", { replace: true });
    } catch (error) {
      if (isAxiosError(error)) {
        const msgApi = error.response?.data.message;

        switch (msgApi) {
          case "Email already registered":
            setMsgErrorRequest({ email: { message: "Email já cadastrado" } });
            break;
          case "Username already resgistered":
            setMsgErrorRequest({
              username: { message: "Nome de usuário já em uso" },
            });
            break;
        }
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit(handleRegister)}>
      <h2>Informe seus dados para se cadastrar</h2>
      <Input
        label="Nome"
        register={register("firstName")}
        msgError={errors.firstName?.message}
      />
      <Input
        label="Sobrenome"
        register={register("lastName")}
        msgError={errors.lastName?.message}
      />
      <Input
        label="Nome de usuário"
        register={register("username")}
        msgError={errors.username?.message || msgErrorRequest.username?.message}
      />
      <Input
        label="Email"
        register={register("email")}
        msgError={errors.email?.message || msgErrorRequest.email?.message}
      />
      <Input
        label="Senha"
        register={register("password")}
        msgError={errors.password?.message}
        type="password"
      />

      <ButtonStyled type="submit" isLoading={isLoading}>
        {!isLoading ? "Cadastrar" : "Cadastrando"}
      </ButtonStyled>
    </FormStyled>
  );
};
