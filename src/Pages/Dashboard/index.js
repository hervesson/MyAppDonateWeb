import { useState, useEffect } from "react";

import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Main from "../../Components/main/Main";

import { connect } from "react-redux";

import "./index.css";

function DashboardAdmin(props) {
  let [sidebarOpen, setSidebarOpen] = useState(false);
  let [activeTab, setDashboard] = useState(props.activeTab);
  let [activeComponent, setActiveComponent] = useState(<Main />);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    switch (props.activeTab) {
      	case "dashboard":
        	setActiveComponent(<Main />);
        break;

      	case "conta":
        	setActiveComponent(<h1>Conta</h1>);
        break;

        case "agenda":
        	setActiveComponent(<h1>Agenda</h1>);
        break;

        case "listaDeDoadores":
        	setActiveComponent(<h1>Lista de doadores</h1>);
        break;

        case "dadosBancarios":
        	setActiveComponent(<h1>Dados bancários</h1>);
        break;

      	default:
        	setActiveComponent(<Main />);
        break;
    }
  }, [props.activeTab]);

  return (
    <div className="containerr">
      {/*<Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />*/}
      {activeComponent}
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { activeTab } = state.Dashboard;
  return { activeTab };
};

export default connect(mapStateToProps, {})(DashboardAdmin);
