import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsSend } from "react-icons/bs";
import { AddPostContainer } from "./styles";
import { Textarea } from "../../../../components/Textarea";
import { AvatarStyled } from "../../../../styles/components/Avatar";
import { api } from "../../../../services/api";
import { useUserStore } from "../../../../stores/user";
import { schemaAddPost } from "./schema";
import { usePostsStore } from "../../../../stores/posts";

export interface IFormAddPost {
  text: string;
}

export const AddPost = () => {
  const { handleSubmit, register, reset } = useForm<IFormAddPost>({
    resolver: yupResolver(schemaAddPost),
  });
  const { user } = useUserStore((state) => state);
  const { posts, setPosts } = usePostsStore((state) => state);

  const handleAddPost = async (dataPost: IFormAddPost): Promise<void> => {
    try {
      const response = await api.post("/posts", dataPost);
      setPosts([response.data, ...posts]);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AddPostContainer>
      <AvatarStyled src={user.avatarUrl || ""} />
      <form onSubmit={handleSubmit(handleAddPost)}>
        <Textarea
          register={register("text")}
          placeholder={`No que você está pensando, ${user.firstName}`}
        />
        <button type="submit">
          <BsSend />
        </button>
      </form>
    </AddPostContainer>
  );
};
