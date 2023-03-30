import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { BsSend } from "react-icons/bs";
import { api } from "../../../../services/api";
import { usePostsStore } from "../../../../stores/posts";
import { useUserStore } from "../../../../stores/user";
import { AvatarStyled } from "../../../../styles/components/Avatar";
import { Textarea } from "../../../Textarea";
import { schemaAddComment } from "./schema";
import { AddCommentContainer } from "./styles";

interface IAddCommentProps {
  postId: string;
}

export interface IFormAddComment {
  text: string;
}

export const AddComment = ({ postId }: IAddCommentProps) => {
  const { handleSubmit, register, reset } = useForm<IFormAddComment>({
    resolver: yupResolver(schemaAddComment),
  });
  const { user } = useUserStore();
  const { posts, setPosts } = usePostsStore();

  const handleAddComment = async (dataComment: IFormAddComment) => {
    try {
      const response = await api.post(`/posts/comments/${postId}`, dataComment);
      const postsWithPostCommentUpdated = posts.map((post) => {
        if (post.id == postId) {
          return {
            ...post,
            comments: [response.data, ...post.comments],
          };
        }

        return post;
      });
      setPosts(postsWithPostCommentUpdated);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AddCommentContainer>
      <AvatarStyled src={user.avatarUrl || ""} />
      <form onSubmit={handleSubmit(handleAddComment)}>
        <Textarea
          placeholder="Escreva um comentário"
          register={register("text")}
        />
        <button type="submit">
          <BsSend />
        </button>
      </form>
    </AddCommentContainer>
  );
};
