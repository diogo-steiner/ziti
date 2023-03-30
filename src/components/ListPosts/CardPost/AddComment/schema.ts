import * as yup from "yup";
import { IFormAddComment } from ".";

export const schemaAddComment: yup.ObjectSchema<IFormAddComment> = yup
  .object()
  .shape({
    text: yup.string().max(20000).trim().required(),
  });
