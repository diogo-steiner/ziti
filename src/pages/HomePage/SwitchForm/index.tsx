import { useState } from "react";
import { FormLogin } from "./FormLogin";
import { FormRegister } from "./FormRegister";
import { SwitchContainer, SwitchFormContainer } from "./styles";

export const SwitchForm = () => {
  const [isRenderFormLogin, setIsRenderFormLogin] = useState(true);

  return (
    <SwitchFormContainer>
      <SwitchContainer>
        <button
          type="button"
          className={isRenderFormLogin ? "switch__button--active" : ""}
          onClick={() => setIsRenderFormLogin(true)}
        >
          Entrar
        </button>
        <span>ou</span>
        <button
          type="button"
          className={!isRenderFormLogin ? "switch__button--active" : ""}
          onClick={() => setIsRenderFormLogin(false)}
        >
          Cadastrar
        </button>
      </SwitchContainer>
      {isRenderFormLogin && <FormLogin />}

      {!isRenderFormLogin && <FormRegister />}
    </SwitchFormContainer>
  );
};
