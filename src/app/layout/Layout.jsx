
import "./Layout.scss";

import { Outlet } from "react-router-dom";

import Content from "@/widgets/Content";
import Footer from "@/widgets/Footer";
import Header from "@/widgets/Header";



const Layout = () => {



  return (
    <div className="layout">
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </div>
  )
}


export default Layout;