import { IPost } from "../../../../stores/posts";
import { CardComment } from "./CardComment";
import { ListCommentsContainer } from "./styles";

interface IListCommentsProps extends Pick<IPost, "comments"> {
  postId: string;
}

export const ListComments = ({ postId, comments }: IListCommentsProps) => {
  return (
    <ListCommentsContainer>
      {comments?.map((comment) => (
        <CardComment key={comment.id} postId={postId} comment={comment} />
      ))}
    </ListCommentsContainer>
  );
};
