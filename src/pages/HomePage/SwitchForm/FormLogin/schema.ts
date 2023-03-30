import * as yup from "yup";
import { IFormLogin } from ".";

export const schemaLogin: yup.ObjectSchema<IFormLogin> = yup.object({
  username: yup
    .string()
    .min(3, "O nome de usuário deve ter no mínimo 3 caracteres")
    .max(16, "O nome de usuário deve ter no máximo 16 caracteres")
    .trim()
    .required("Informe seu nome de usuário"),
  password: yup
    .string()
    .min(6, "A senha deve ter no nínimo 6 caracteres")
    .max(72, "A senha deve ter no máximo 72 caracteres")
    .trim()
    .required("Informe sua senha"),
});
