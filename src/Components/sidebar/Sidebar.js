import './Sidebar.css';
import logo from '../../Assets/logo.jpg';
import { auth } from "../../Services/FirebaseConfig";

import { connect } from "react-redux";

import { setActiveTab } from "../../Redux/actions";

function Sidebar(props, {sidebarOpen, closeSidebar}){

	const toggleTab = tab => {
      props.setActiveTab(tab)
   };

   const off = () => {
   	auth.auth().signOut()
   }
   

	return (
		<div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
			<div className="sidebar__title">
				<div className="sidebar__img">
					<img src={logo} alt="logo" />
					<h1>Hervesson</h1>
				</div>

				<i 
					onClick={() => closeSidebar()}
					className="fa fa-times"
					id="sidebarIcon"
					aria-hidden="true"
				></i>
			</div>
			<div className="sidebar__menu">	
				<h2> ADMIN </h2>
				<div className="sidebar__link" onClick={() => { toggleTab('dashboard')}}>
					<i className="fa fa-tachometer"></i>
					<a href="#"> Dashboard </a>
				</div>
				<div className="sidebar__link" onClick={() => { toggleTab('conta')}}>
					<i className="fa fa-user"></i>
					<a href="#"> Conta </a>
				</div>
				<div className="sidebar__link" onClick={() => { toggleTab('agenda')}}>
					<i className="fa fa-list-alt"></i>
					<a href="#"> Agenda </a>
				</div>
				<div className="sidebar__link" onClick={() => { toggleTab('listaDeDoadores')}}>
					<i className="fa fa-users"></i>
					<a href="#"> Lista de doadores </a>
				</div>
				<div className="sidebar__link" onClick={() => { toggleTab('dadosBancarios')}}>
					<i className="fa fa-usd"></i>
					<a href="#"> Dados bancários </a>
				</div>
				<div className="sidebar__logout">
					<i className="fa fa-power-off"></i>
					<a href="#" onClick={() => off}> log out </a>
				</div>
			</div> 
		</div>
	)
}

const mapStatetoProps = state => {
    return {  };
};

export default connect(mapStatetoProps, { setActiveTab })(Sidebar);
