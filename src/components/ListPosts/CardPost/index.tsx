import {
  CardPostContainer,
  HeaderPostContainer,
  ContentPostContainer,
  HeaderPostAuthorTimestampContainer,
} from "./styles";
import { AvatarStyled } from "../../../styles/components/Avatar";
import { ListComments } from "./ListComments";
import { InfoLikeComment } from "./InfoLikeComment";
import { IPost } from "../../../stores/posts";
import { AddComment } from "./AddComment";
import { MenuPost } from "./MenuPost";
import { AddFavorite } from "./AddFavorite";

interface ICardPostProps {
  post: IPost;
}

export const CardPost = ({ post }: ICardPostProps) => {
  const { id, text, createdAt, likes, comments, favorites, owner } = post;
  const { firstName, lastName, username, avatarUrl } = owner;
  const ownerFullName = `${firstName} ${lastName}`;

  const datePost = new Date(createdAt);
  const date = datePost.toLocaleDateString();
  const time = datePost.toLocaleTimeString();
  const dateTime = `${date} às ${time.substring(0, 5)} `;

  return (
    <CardPostContainer>
      <HeaderPostContainer>
        <HeaderPostAuthorTimestampContainer>
          <AvatarStyled src={avatarUrl || ""} alt={ownerFullName} size="l" />
          <div className="autor-timestamp__container">
            <div>
              <strong>{ownerFullName}</strong>
              <p>@{username}</p>
            </div>
            <time dateTime={dateTime}>{dateTime}</time>
          </div>
        </HeaderPostAuthorTimestampContainer>
        <div className="post-options__container">
          <AddFavorite postId={id} favorites={favorites} />
          <MenuPost postId={id} ownerId={owner.id} />
        </div>
      </HeaderPostContainer>

      <ContentPostContainer>
        <p>{text}</p>
      </ContentPostContainer>

      <footer>
        <InfoLikeComment postId={id} likes={likes} comments={comments} />
        <AddComment postId={id} />
        <ListComments postId={id} comments={comments} />
      </footer>
    </CardPostContainer>
  );
};
