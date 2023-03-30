import { useUserStore } from "../../stores/user";
import { HeaderContainer, LogoContainer } from "./styles";
import { UserMenuHeader } from "./UserMenuHeader";

export const Header = () => {
  const { user } = useUserStore();

  return (
    <HeaderContainer>
      <LogoContainer aria-label="Ziti" />
      {user.id && <UserMenuHeader />}
    </HeaderContainer>
  );
};
