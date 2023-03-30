import { IPost } from "../../stores/posts";
import { CardPost } from "./CardPost";
import { ListPostsContaier } from "./styles";

interface IListPostsProps {
  posts: IPost[];
}

export const ListPosts = ({ posts }: IListPostsProps) => {
  return (
    <ListPostsContaier>
      {posts.map((post: IPost) => (
        <CardPost key={post.id} post={post} />
      ))}
    </ListPostsContaier>
  );
};
