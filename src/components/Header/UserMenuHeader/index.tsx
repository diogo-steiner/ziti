import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useUserStore } from "../../../stores/user";
import { AvatarStyled } from "../../../styles/components/Avatar";
import { ListMenuHeader } from "./ListMenuHeader";
import { UserMenuHeaderContainer } from "./styles";

export const UserMenuHeader = () => {
  const [isOpenMenu, setIsOpeMenu] = useState(false);
  const { user } = useUserStore();
  return (
    <UserMenuHeaderContainer>
      <AvatarStyled src={user.avatarUrl || ""} size="m" />

      <button
        type="button"
        className="button__arrow"
        onClick={() => setIsOpeMenu(!isOpenMenu)}
      >
        {!isOpenMenu ? (
          <MdOutlineKeyboardArrowDown />
        ) : (
          <MdOutlineKeyboardArrowUp />
        )}
      </button>
      {isOpenMenu && <ListMenuHeader />}
    </UserMenuHeaderContainer>
  );
};
