import { useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { api } from "../../../../services/api";
import { usePostsStore } from "../../../../stores/posts";
import { useUserStore } from "../../../../stores/user";
import { MenuPostContainer, OptionsMenuPost } from "./styles";

interface IMenuPostProps {
  postId: string;
  ownerId: string;
}

export const MenuPost = ({ postId, ownerId }: IMenuPostProps) => {
  const [isOptionsPost, setIsOptionsPost] = useState(false);
  const { user } = useUserStore();
  const { posts, setPosts } = usePostsStore();

  if (!(user.id == ownerId)) return null;

  const handleDeletePost = async (): Promise<void> => {
    try {
      await api.delete(`/posts/${postId}`);
      const postsWithoutPostDeleted = posts.filter(({ id }) => id != postId);
      setPosts(postsWithoutPostDeleted);
    } catch (error) {
      console.error(error);
    }
    return;
  };

  return (
    <MenuPostContainer>
      <button type="button" onClick={() => setIsOptionsPost(!isOptionsPost)}>
        <GoKebabHorizontal />
      </button>

      {isOptionsPost && (
        <OptionsMenuPost>
          {user.id == ownerId && (
            <button type="button" onClick={handleDeletePost}>
              Excluir
            </button>
          )}
        </OptionsMenuPost>
      )}
    </MenuPostContainer>
  );
};
