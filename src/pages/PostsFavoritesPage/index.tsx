import { useEffect } from "react";
import { ListPosts } from "../../components/ListPosts";
import { api } from "../../services/api";
import { usePostsStore } from "../../stores/posts";
import { PostsFavoritesPageContainer } from "./styles";

export const PostsFavoritesPage = () => {
  const { posts, setPosts } = usePostsStore();
  useEffect(() => {
    const handleGetFavoritesPosts = async () => {
      try {
        const response = await api.get("/posts/favorites");
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    handleGetFavoritesPosts();
  }, []);

  return (
    <PostsFavoritesPageContainer>
      <ListPosts posts={posts} />
    </PostsFavoritesPageContainer>
  );
};
