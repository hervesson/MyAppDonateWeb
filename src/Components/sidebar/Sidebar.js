import './Sidebar.css';
import logo from '../../Assets/logo.jpg';

const Sidebar = ({ sidebarOpen, closeSidebar}) => {
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
				<div className="sidebar__link active_menu_link">
					<i className="fa fa-manus-square"></i>
					<a href=""> Home </a>
				</div>	
				<h2> ADMIN </h2>
				<div className="sidebar__link">
					<i className="fa fa-tachometer"></i>
					<a href=""> Área administrativa </a>
				</div>
				<div className="sidebar__link">
					<i className="fa fa-building"></i>
					<a href=""> Entidades </a>
				</div>
				<div className="sidebar__link">
					<i className="fa fa-bars"></i>
					<a href=""> Produtos </a>
				</div>
				<div className="sidebar__link">
					<i className="fa fa-tachometer"></i>
					<a href=""> Categorias </a>
				</div>
				<div className="sidebar__link">
					<i className="fa fa-cutlery"></i>
					<a href=""> Pedidos </a>
				</div>
				<div className="sidebar__logout">
					<i className="fa fa-power-off"></i>
					<a href=""> log out </a>
				</div>
			</div> 
		</div>
	)
}



export default Sidebar