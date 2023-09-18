import styled from "styled-components";
import { Outlet } from "react-router-dom";
import DashboardHead from "../Static/DashboardHead";
import Sidebar from "../Static/Sidebar";

const Layout = () => {
  return (
    <div>
      <DashboardHead />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;

const Container = styled.div``;
