import { useEffect, useState } from "react";
import { ListPeople, PeopleForFollowContainer } from "./styles";
import { api } from "../../../../../services/api";
import { CardPeople } from "./CardPeople";

export interface IFollowerSuggestion {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatarUrl: string | null;
}

export const PeopleForFollow = () => {
  const [suggestions, setSuggestions] = useState([] as IFollowerSuggestion[]);

  useEffect(() => {
    const handleGetFollowersSuggestions = async () => {
      const response = await api.get("/followers/suggestions", {
        params: {
          page: 1,
          limit: 4,
        },
      });
      setSuggestions(response.data.content);
    };

    handleGetFollowersSuggestions();
  }, []);

  return (
    <PeopleForFollowContainer>
      <h2>Pessoas para você seguir</h2>
      <ListPeople>
        {suggestions.map((suggestion) => (
          <CardPeople key={suggestion.id} suggestion={suggestion} />
        ))}
      </ListPeople>
    </PeopleForFollowContainer>
  );
};
