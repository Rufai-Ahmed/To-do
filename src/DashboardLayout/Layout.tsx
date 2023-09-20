import styled from "styled-components";
import { Outlet } from "react-router-dom";
import DashboardHead from "../Static/DashboardHead";
import Sidebar from "../Static/Sidebar";
import Settings from "../Components/Settings";

const Layout = () => {
  return (
    <div>
      <DashboardHead />
      <Holder>
        <Sidebar />
        <Outlet />
      </Holder>
    </div>
  );
};

export default Layout;

const Holder = styled.div`
  display: flex;
  height: calc(100vh - 55px);
  background-color: #faf9f8ff;
`;
