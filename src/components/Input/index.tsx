import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { InputContainer, InputMessageError } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

interface IInputHTMLAttributes extends InputHTMLAttributes<HTMLInputElement> {}

interface IInputProps extends IInputHTMLAttributes {
  label?: string;
  register?: UseFormRegisterReturn;
  msgError?: string;
  rest?: IInputHTMLAttributes;
}

export const Input = ({ label, register, msgError, ...rest }: IInputProps) => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [hasValueInput, setHasValueInput] = useState(false);
  const [isViewPassoword, setIsViewPassword] = useState(false);

  const handleHasValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value) {
      setHasValueInput(true);
    } else {
      setHasValueInput(false);
    }
  };

  const handleViewPassword = () => {
    setIsViewPassword(!isViewPassoword);
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setIsInputFocus(!isInputFocus);
    register?.onBlur(e);
    handleHasValueInput(e);
  };

  const onFocus = () => {
    setIsInputFocus(!isInputFocus);
  };

  const { type } = rest;
  return (
    <InputContainer isInputFocus={isInputFocus} hasValueInput={hasValueInput}>
      <label htmlFor={register?.name}>{label}</label>
      <input
        id={register?.name}
        {...register}
        onFocus={onFocus}
        onBlur={onBlur}
        {...rest}
        type={isViewPassoword ? "text" : type}
      />

      {type == "password" && (
        <div className="icon-eye__input" onClick={handleViewPassword}>
          {isViewPassoword ? <VscEye /> : <VscEyeClosed />}
        </div>
      )}

      {msgError && <InputMessageError>{msgError}</InputMessageError>}
    </InputContainer>
  );
};
