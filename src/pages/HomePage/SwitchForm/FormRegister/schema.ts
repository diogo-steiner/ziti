import * as yup from "yup";
import { IFormRegister } from ".";

export const formRegisterSchema: yup.ObjectSchema<IFormRegister> = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .min(3, "Seu nome deve ter no mínimo 3 caracteres")
      .max(32, "Seu nome deve ter no máximo 32 caracteres")
      .trim()
      .required("Informe seu nome"),
    lastName: yup
      .string()
      .min(3, "Seu sobrenome deve ter no mínimo 3 caracteres")
      .max(32, "Seu sobrenome deve ter no máximo 32 caracteres")
      .trim()
      .required("Informe seu sobrenome"),
    username: yup
      .string()
      .min(3, "Seu nome de usuário deve ter no mínimo 3 caracteres")
      .max(16, "Seu nome de usuário deve ter no máximo 16 caracteres")
      .trim()
      .required("Informe um nome de usuário"),
    email: yup
      .string()
      .email("Informe um email válido")
      .min(6, "Seu email deve ter no mínimo 6 caracteres")
      .max(72, "Seu email deve ter no máximo 72 caracteres")
      .trim()
      .required("Informe um email"),
    password: yup
      .string()
      .min(6, "Sua senha deve ter no mínimo 3 caracteres")
      .max(72, "Sua senha deeve ter no máximo 72 caracteres")
      .trim()
      .required("Informe sua senha"),
  });
