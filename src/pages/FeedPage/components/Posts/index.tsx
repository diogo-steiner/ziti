import { useEffect } from "react";
import { ListPosts } from "../../../../components/ListPosts";
import { api } from "../../../../services/api";
import { usePostsStore } from "../../../../stores/posts";

export const Posts = () => {
  const { posts, setPosts } = usePostsStore();

  useEffect(() => {
    const handleGetPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    handleGetPosts();
  }, []);

  return <ListPosts posts={posts} />;
};
