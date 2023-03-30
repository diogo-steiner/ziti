import { Container } from "../../styles/components/Container";
import { AddPost } from "./components/AddPost";
import { AsideLeft } from "./components/AsideLeft";
import { AsideRight } from "./components/AsideRight";
import { Posts } from "./components/Posts";
import { FeedPageContainer } from "./styles";

export const FeedPage = () => {
  return (
    <Container>
      <FeedPageContainer>
        <AsideLeft />
        <main>
          <AddPost />
          <Posts />
        </main>
        <AsideRight />
      </FeedPageContainer>
    </Container>
  );
};
