import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
import { theme } from "../../../utils";
import { Header } from "../Header";

const Layout = () => {
  return (
    <ConfigProvider theme={{ token: { ...theme } }}>
      <Header />
      <Outlet />
    </ConfigProvider>
  );
};

export { Layout };
