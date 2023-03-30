import { Link } from "react-router-dom";
import { useUserStore } from "../../../../../stores/user";
import { AvatarStyled } from "../../../../../styles/components/Avatar";
import { OptionProfileContainer } from "./styles";

export const OptionProfile = () => {
  const { user } = useUserStore();
  const { avatarUrl, firstName, lastName, username } = user;

  return (
    <OptionProfileContainer>
      <Link to={`/profile/${username}`}>
        <AvatarStyled src={avatarUrl || ""} />
        <div>
          <strong>
            {firstName} {lastName}
          </strong>
          <p>@{username}</p>
        </div>
      </Link>
    </OptionProfileContainer>
  );
};
