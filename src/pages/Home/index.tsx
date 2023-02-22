import { Link } from 'react-router-dom';
import { useContext } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { FavoriteCard, TitleContainer } from "../../components";
import { useListOfSpells } from "../../hooks/useSpells";
import { ISpell } from "../../interfaces/spell";
import { Context } from "../../utils";

const HomePage = () => {
  const { favorites } = useContext(Context);
  const { data, isLoading } = useListOfSpells();

  return (
    <TitleContainer title="Favorite Spells">
      <Link to='spells'>
        <div className='view-all-spells'>View all spells</div>
      </Link>
      {isLoading ? (
        <div className="loader">
          <LoadingOutlined />
        </div>
      ) :
        favorites?.length !== 0 ?
          (<div className="grid">
            {data?.results?.map((spell: ISpell) => (
              <FavoriteCard name={spell.name} key={spell.index} index={spell.index} />
            ))}
          </div>)
          : "No Spells added to Favorites, Please navigate through View all spells and Add to favorite."
      }
      <FloatButton.BackTop />
    </TitleContainer>
  );
};

export { HomePage };
