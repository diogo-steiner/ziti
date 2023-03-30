import { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { VscComment } from "react-icons/vsc";
import { api } from "../../../../services/api";
import { IComment, ILike, usePostsStore } from "../../../../stores/posts";
import { useUserStore } from "../../../../stores/user";
import { InfoLikeCommentContainer } from "./styles";

interface IInfoLikeComment {
  postId: string;
  likes: ILike[];
  comments: IComment[];
}

export const InfoLikeComment = ({
  postId,
  likes,
  comments,
}: IInfoLikeComment) => {
  const { user } = useUserStore((state) => state);
  const { posts, setPosts } = usePostsStore((state) => state);
  const [likePost, setLikePost] = useState({} as ILike);

  useEffect(() => {
    const likeFind = likes.find(({ owner }) => owner.id == user.id);
    if (likeFind) setLikePost(likeFind);
  }, []);

  const handleAddLike = async () => {
    try {
      const response = await api.post(`/posts/likes/${postId}`);
      const postsWithPostUpdated = posts.map((post) => {
        if (post.id == postId) {
          return {
            ...post,
            likes: [response.data, ...post.likes],
          };
        }
        return post;
      });

      setPosts(postsWithPostUpdated);
      setLikePost(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRmvLike = async () => {
    try {
      await api.delete(`/posts/likes/${likePost.id}`);
      const postsWithPostUpdated = posts.map((post) => {
        if (post.id == postId) {
          const likesWithLikeRemoved = post.likes.filter(
            ({ id }) => id != likePost.id
          );
          return {
            ...post,
            likes: likesWithLikeRemoved,
          };
        }

        return post;
      });
      setPosts(postsWithPostUpdated);
      setLikePost({} as ILike);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <InfoLikeCommentContainer isPostLiked={!likePost.id ? false : true}>
      <div>
        <IoIosHeartEmpty
          onClick={!likePost.id ? handleAddLike : handleRmvLike}
        />
        <span>{likes?.length}</span>
      </div>
      <div>
        <VscComment />
        <span>{comments?.length}</span>
      </div>
    </InfoLikeCommentContainer>
  );
};
