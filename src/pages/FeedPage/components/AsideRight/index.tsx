import { AiOutlineMail } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import {
  MdOutlineGroupAdd,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { AsideRightContainer } from "./styles";

export const AsideRight = () => {
  return (
    <AsideRightContainer>
      <Link to={"/messages"}>
        <AiOutlineMail />
        <p>Mensagens</p>
      </Link>
      <Link to={"/notifications"}>
        <MdOutlineNotificationsActive />
        <p>Notificações</p>
      </Link>
      <Link to={"/people"}>
        <MdOutlineGroupAdd />
        <p>Pessoas</p>
      </Link>
      <Link to={"/posts/favorites"}>
        <BsBookmark />
        <p>Favoritos</p>
      </Link>
    </AsideRightContainer>
  );
};
