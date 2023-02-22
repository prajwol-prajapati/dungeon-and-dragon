import { FloatButton } from "antd";
import { BackArrowIcon } from "../../assets";
import { useNavigate } from "react-router-dom";
import { ISpell } from "../../interfaces/spell";
import { LoadingOutlined } from "@ant-design/icons";
import { Card, TitleContainer } from "../../components";
import { useListOfSpells } from "../../hooks/useSpells";

const SpellsPage = () => {
  const { data, isLoading } = useListOfSpells();

  let navigate = useNavigate();
  const goToPreviousPath = () => {
    navigate(-1);
  }

  return (
    <TitleContainer title="Spells">
      <div className="back-nav-wrapper">
        <span onClick={goToPreviousPath}>
          <BackArrowIcon className="back-nav" />
        </span>
      </div>
      <div>
        {isLoading ? (
          <div className="loader">
            <LoadingOutlined />
          </div>
        ) : (
          <div className="grid">
            {data?.results?.map((spell: ISpell) => (
              <Card name={spell.name} key={spell.index} index={spell.index} />
            ))}
          </div>
        )}
        <FloatButton.BackTop />
      </div>
    </TitleContainer>
  );
};

export { SpellsPage };
