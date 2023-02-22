interface Props {
  title: string;
  children: React.ReactNode;
}

const TitleContainer = ({ title, children }: Props) => {
  return (
    <div className="main-wrapper">
      <div className="title-container">{title}</div>
      <div className="child-wrapper">{children}</div>
    </div>
  );
};

export { TitleContainer };
