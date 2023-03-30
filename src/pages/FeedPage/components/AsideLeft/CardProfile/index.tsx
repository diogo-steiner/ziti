import { useUserStore } from "../../../../../stores/user";
import { AvatarStyled } from "../../../../../styles/components/Avatar";
import { AvatarNamesContainer, CardProfileContainer } from "./styles";
import coverDefault from "./../../../../../assets/cover-default.jpg";

export const CardProfile = () => {
  const user = useUserStore((state) => state.user);
  const { firstName, lastName, username, avatarUrl, coverUrl } = user;
  const FullName = `${firstName} ${lastName}`;

  return (
    <CardProfileContainer>
      <div className="cover__container">
        <img src={coverUrl || coverDefault} />
      </div>

      <div className="content__container">
        <AvatarNamesContainer>
          <AvatarStyled src={avatarUrl || " "} alt={FullName} size="xl" />
          <div>
            <strong>{FullName}</strong>
            <p>@{username}</p>
          </div>
        </AvatarNamesContainer>

        <div className="view-profile__container">
          <button type="button">Ver Perfil</button>
        </div>
      </div>
    </CardProfileContainer>
  );
};
