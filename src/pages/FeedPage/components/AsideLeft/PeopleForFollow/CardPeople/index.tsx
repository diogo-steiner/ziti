import { useState } from "react";
import { CgCheck } from "react-icons/cg";
import { IFollowerSuggestion } from "..";
import { api } from "../../../../../../services/api";
import { AvatarStyled } from "../../../../../../styles/components/Avatar";
import { ButtonFollow, CardPeopleContainer, PeopleContainer } from "./styles";

interface ICardPeopleProps {
  suggestion: IFollowerSuggestion;
}

interface INewFollow {
  id: string;
}

export const CardPeople = ({ suggestion }: ICardPeopleProps) => {
  const [newFollow, setNewFollow] = useState({} as INewFollow);
  const { id, firstName, lastName, username, avatarUrl } = suggestion;

  const handleAddFollow = async () => {
    try {
      const response = await api.post(`/followers/${id}`);
      setNewFollow(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFollow = async () => {
    try {
      await api.delete(`/followers/${newFollow.id}`);
      setNewFollow({} as INewFollow);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CardPeopleContainer>
      <PeopleContainer>
        <AvatarStyled src={avatarUrl || ""} size="l" />
        <div>
          <strong>
            {firstName} {lastName}
          </strong>
          <p>@{username}</p>
        </div>
      </PeopleContainer>

      <ButtonFollow
        type="button"
        onClick={!newFollow.id ? handleAddFollow : handleRemoveFollow}
        isFollowing={!newFollow.id ? false : true}
      >
        {!newFollow.id ? "+" : <CgCheck className="check-following__icon" />}
      </ButtonFollow>
    </CardPeopleContainer>
  );
};
