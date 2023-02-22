import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { notification, Tooltip } from "antd";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ISpell } from "../../../interfaces/spell";
import { Context } from "../../../utils";

const FavoriteCard = ({ index, name }: ISpell) => {
  const { setFavorites, favorites } = useContext(Context);

  const addToFavorites = () => {
    setFavorites && favorites && setFavorites([...favorites, index]);
    notification.success({ message: `${name} added to favorites!` });
  };

  const removeFromFavorites = () => {
    const newFavorites = favorites?.filter(
      (spell: string) => spell !== index
    ) as string[];
    setFavorites && favorites && setFavorites([...newFavorites]);
    notification.success({ message: `${name} removed from favorites!` });
  };

  useEffect(() => {
    localStorage.setItem("favorites", favorites ? favorites?.toString() : "");
  }, [favorites]);

  const alreadyInFavorite = () => {
    return favorites?.some((spell: string) => spell === index);
  };

  return alreadyInFavorite() ? (
    <article className="card-wrapper">
      <Tooltip
        title={
          alreadyInFavorite() ? "Remove from favorites" : "Add to favorites"
        }
        mouseEnterDelay={0.6}
      >
        {alreadyInFavorite() ? (
          <HeartFilled
            className="anticon-heart-filled"
            onClick={removeFromFavorites}
          />
        ) : (
          <HeartOutlined onClick={addToFavorites} />
        )}
      </Tooltip>
      <Link to={`/details/${index}`}>
        <div className="card">{name}</div>
      </Link>
    </article>
  ) : (<></>);
};

export { FavoriteCard };
