import { CardProfile } from "./CardProfile";
import { PeopleForFollow } from "./PeopleForFollow";
import { AsideLeftContainer } from "./styles";

export const AsideLeft = () => {
  return (
    <AsideLeftContainer>
      <CardProfile />
      <PeopleForFollow />
    </AsideLeftContainer>
  );
};
