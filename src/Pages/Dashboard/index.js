import { useState, useEffect } from "react";

import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Main from "../../Components/main/Main";

import Conta from "../../Components/itemsMenu/Conta/index";
import Agenda from "../../Components/itemsMenu/Agenda/index";
import ListaDeDoadores from "../../Components/itemsMenu/ListaDeDoadores/index";
import DadosBancarios from "../../Components/itemsMenu/DadosBancarios/index";

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
        	setActiveComponent(<Conta />);
        break;

        case "agenda":
        	setActiveComponent(<Agenda />);
        break;

        case "listaDeDoadores":
        	setActiveComponent(<ListaDeDoadores />);
        break;

        case "dadosBancarios":
        	setActiveComponent(<DadosBancarios />);
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
