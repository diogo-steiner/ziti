import { IComment } from "../../../../../stores/posts";
import { useUserStore } from "../../../../../stores/user";
import { AvatarStyled } from "../../../../../styles/components/Avatar";
import { MenuComment } from "./MenuComment";
import { CardCommentContainer } from "./styles";

interface ICardCommentProps {
  postId: string;
  comment: IComment;
}

export const CardComment = ({ postId, comment }: ICardCommentProps) => {
  const { user } = useUserStore();

  const { text, owner } = comment;
  const { firstName, lastName, avatarUrl } = owner;
  const ownerFullName = `${firstName} ${lastName}`;

  return (
    <CardCommentContainer>
      <AvatarStyled src={avatarUrl || ""} alt={ownerFullName} />
      <article>
        <div>
          <div className="owner-options__container">
            <strong>{ownerFullName}</strong>

            {owner.id == user.id && (
              <MenuComment postId={postId} commentId={comment.id} />
            )}
          </div>
          <p>{text}</p>
        </div>
      </article>
    </CardCommentContainer>
  );
};
