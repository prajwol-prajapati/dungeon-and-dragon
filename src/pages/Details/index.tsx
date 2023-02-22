import { Divider } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { BackArrowIcon } from "../../assets";
import { TitleContainer } from "../../components";
import { useParams, useNavigate } from "react-router-dom";
import { useSpellDetails } from "../../hooks/useSpellDetails";
import { ITypeInfo, ISpellDetail } from "../../interfaces/spell";

interface IDesc {
  name: string;
  description: string;
}

interface IListDesc {
  name: string;
  description: Array<string>;
}

const Details = () => {
  const params = useParams();

  const { data, isLoading } = useSpellDetails(params);
  const detailResponse = data as ISpellDetail;

  let navigate = useNavigate();
  const goToPreviousPath = () => {
    navigate(-1);
  }

  const Description = ({ name, description }: IListDesc) => {
    return (
      <>
        <h4>{name}</h4>
        <p className="description">{description || "-"}</p>
        <Divider />
      </>
    );
  };

  const SubDescription = ({ name, description }: IDesc) => {
    return (
      <div>
        <span className="sub-description-title">{name}</span>{' : '}
        <span className="sub-description">{description || "-"}</span>
      </div>
    );
  };

  const TypeInfo = ({ index, name }: ITypeInfo) => {
    return (
      <div className="grid">
        <div>
          <span className="sub-description-title">Name</span>{' : '}
          <span className="sub-description">{name || "-"}</span>
        </div>
        <div>
          <span className="sub-description-title">Index</span>{' : '}
          <span className="sub-description">{index || "-"}</span>
        </div>
      </div>
    )
  }

  return (
    <TitleContainer title={detailResponse?.name}>
      <span onClick={goToPreviousPath}>
        <BackArrowIcon className="back-nav" />
      </span>
      {isLoading ? (
        <div className="loader">
          <LoadingOutlined />
        </div>
      ) : (
        <div className="details">
          <Description name="Description" description={detailResponse?.desc} />
          <Description name="Components" description={detailResponse?.components} />
          {detailResponse.damage ? (
            <div>
              <h4>Damage</h4>
              {detailResponse.damage.damage_type ? (
                <TypeInfo
                  index={detailResponse.damage.damage_type.index}
                  name={detailResponse.damage.damage_type.name} />
              ) : null}
              <Divider />
            </div>
          ) : null}
          {detailResponse.dc ? (
            <div>
              <h4>DC</h4>
              {detailResponse.dc.dc_type ? (
                <TypeInfo
                  index={detailResponse.dc.dc_type.index}
                  name={detailResponse.dc.dc_type.name} />
              ) : null}
              <div>
                <span className="sub-description-title">DC Success</span>{' : '}
                <span className="sub-description">{detailResponse.dc.dc_success}</span>
              </div>
              <Divider />
            </div>
          ) : null}
          {detailResponse.school ? (
            <div>
              <h4>School</h4>
              <TypeInfo
                index={detailResponse.school.index}
                name={detailResponse.school.name} />
              <Divider />
            </div>
          ) : null}
          {detailResponse.classes ? (
            <h4>Classes</h4>) : null}
          {detailResponse.classes?.map(spellClass =>
          (<div key={spellClass.index}>
            <TypeInfo
              index={spellClass.index}
              name={spellClass.name} />
          </div>
          ))}
          <Divider />
          {detailResponse.subclasses ? (
            <h4>Sub Classes</h4>) : null}
          {detailResponse.subclasses?.map(spellClass =>
          (<div key={spellClass.index}>
            <TypeInfo
              index={spellClass.index}
              name={spellClass.name} />
          </div>
          ))}
          <Divider />
          <div className="grid">
            <SubDescription name="Range" description={detailResponse?.range} />
            <SubDescription name="Duration" description={detailResponse?.duration} />
            <SubDescription name="Range" description={detailResponse?.range} />
            <SubDescription name="Casting Time" description={detailResponse?.casting_time} />
            <SubDescription name="Level" description={detailResponse?.level} />
          </div>
          <Divider />
        </div>
      )}
    </TitleContainer>
  );
};

export default Details;
