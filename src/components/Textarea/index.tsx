import { KeyboardEvent, ReactNode, TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";
import { TextareaContainer } from "./styles";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  children?: ReactNode;
  register?: UseFormRegisterReturn;
}

export const Textarea = ({ children, register, ...rest }: ITextareaProps) => {
  const handleAddRowTextarea = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    const { currentTarget } = e;
    const scrollHeight = currentTarget.scrollHeight;
    const offsetHeight = currentTarget.offsetHeight;

    if (scrollHeight > offsetHeight) {
      currentTarget.rows += 1;
    } else if (currentTarget.rows > 2) {
      const words = currentTarget.value.split("\n");

      if (words.length > 2) {
        currentTarget.rows = words.length;
      } else {
        currentTarget.rows = 2;
      }
    }
  };

  return (
    <TextareaContainer
      {...register}
      {...rest}
      onKeyUp={handleAddRowTextarea}
      rows={2}
    >
      {children}
    </TextareaContainer>
  );
};
