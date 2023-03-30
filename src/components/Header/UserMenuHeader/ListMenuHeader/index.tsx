import { OptionExit } from "./OptionExit";
import { OptionProfile } from "./OptionProfile";
import { ListMenuHeaderContainer } from "./styles";

export const ListMenuHeader = () => {
  return (
    <ListMenuHeaderContainer>
      <ul>
        <OptionProfile />
        <OptionExit />
      </ul>
    </ListMenuHeaderContainer>
  );
};
