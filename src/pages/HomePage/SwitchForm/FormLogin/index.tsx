import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { useState } from "react";
import { Input } from "../../../../components/Input";
import { ButtonStyled } from "../../../../styles/components/Button";
import { FormStyled } from "../../../../styles/components/Form";
import { schemaLogin } from "./schema";
import { api } from "../../../../services/api";
import { IUser, useUserStore } from "../../../../stores/user";
import { MsgErrorLogin } from "./styles";

export interface IFormLogin {
  username: string;
  password: string;
}

interface IResponseLogin {
  token: string;
  user: IUser;
}

export const FormLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schemaLogin),
  });

  const setUser = useUserStore((state) => state.setUser);
  const [isLoginIncorrect, setIsLoginIncorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (dataFormLogin: IFormLogin) => {
    setIsLoading(true);
    try {
      const response = await api.post("/sessions", dataFormLogin);
      const { token, user }: IResponseLogin = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("@ziti:token", token);
      setUser(user);
      navigate("/feed", { replace: true });
    } catch (error) {
      if (isAxiosError(error)) {
        const msgApi = error.response?.data.message;
        if (msgApi == "Username or password invalid") {
          setIsLoginIncorrect(true);
        }
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit(handleLogin)}>
      <h2>Informe seu dados para entrar</h2>
      <Input
        label="Nome de usuário"
        register={register("username")}
        msgError={errors.username?.message}
        type="text"
      />
      <Input
        label="Senha"
        register={register("password")}
        msgError={errors.password?.message}
        type="password"
      />

      {isLoginIncorrect && (
        <MsgErrorLogin>Email ou usuário inválido</MsgErrorLogin>
      )}
      <ButtonStyled type="submit" isLoading={isLoading} disabled={isLoading}>
        {!isLoading ? "Entrar" : "Entrando..."}
      </ButtonStyled>
    </FormStyled>
  );
};
