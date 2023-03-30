import { useEffect, useState } from "react";
import { BsBookmark } from "react-icons/bs";
import { api } from "../../../../services/api";
import { IFavorite } from "../../../../stores/posts";
import { useUserStore } from "../../../../stores/user";
import { AddFavoriteContainer } from "./styles";

interface IAddFavoriteProps {
  postId: string;
  favorites: IFavorite[];
}

export const AddFavorite = ({ postId, favorites }: IAddFavoriteProps) => {
  const [postFavorited, setPostFavorited] = useState({} as IFavorite);
  const { user } = useUserStore();

  useEffect(() => {
    const favoriteFind = favorites.find(
      (favorite) => favorite.owner.id == user.id
    );

    if (favoriteFind) setPostFavorited(favoriteFind);
  }, []);

  const handleAddFavorite = async () => {
    try {
      const response = await api.post(`/posts/favorites/${postId}`);
      setPostFavorited(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFavorite = async () => {
    try {
      await api.delete(`/posts/favorites/${postFavorited?.id}`);
      setPostFavorited({} as IFavorite);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AddFavoriteContainer isFavoritedPost={!postFavorited.id ? false : true}>
      <button
        type="button"
        onClick={!postFavorited.id ? handleAddFavorite : handleRemoveFavorite}
      >
        <BsBookmark />
      </button>
    </AddFavoriteContainer>
  );
};
