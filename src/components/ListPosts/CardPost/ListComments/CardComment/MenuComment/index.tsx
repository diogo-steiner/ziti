import { useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { api } from "../../../../../../services/api";
import { usePostsStore } from "../../../../../../stores/posts";
import { MenuCommentContainer, OptionsMenuComment } from "./styles";

interface IMenuCommentProps {
  postId: string;
  commentId: string;
}

export const MenuComment = ({ postId, commentId }: IMenuCommentProps) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { posts, setPosts } = usePostsStore();

  const handleDeleteComment = async (): Promise<void> => {
    try {
      await api.delete(`/posts/comments/${commentId}`);
      const postsWithPostCommentsUpdated = posts.map((post) => {
        if (post.id == postId) {
          return {
            ...post,
            comments: post.comments.filter(({ id }) => id != commentId),
          };
        }

        return post;
      });
      setPosts(postsWithPostCommentsUpdated);
    } catch (error) {
      console.error(error);
    }

    return;
  };

  return (
    <MenuCommentContainer>
      <button type="button" onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
        <GoKebabHorizontal />
      </button>

      {isOptionsOpen && (
        <OptionsMenuComment aria-label="Excluir comentário">
          <button type="button" onClick={handleDeleteComment}>
            Excluir
          </button>
        </OptionsMenuComment>
      )}
    </MenuCommentContainer>
  );
};
