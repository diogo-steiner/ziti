import * as yup from "yup";
import { IFormAddPost } from ".";

export const schemaAddPost: yup.ObjectSchema<IFormAddPost> = yup
  .object()
  .shape({
    text: yup.string().max(20000).trim().required(),
  });
