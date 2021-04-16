import "./Navbar.css";
import Avatar from "../../Assets/avatar.png";

const Navbar = ({ sidebarOpen, openSidebar}) => {
	return (
		<nav className="navbar">
			<div className="nav_icon" onClick={() => openSidebar()}>
				<i className="fa fa-bars" aria-hidden="true"></i>
			</div>
			<div className="navbar__left">
				<a href="#">Produtos</a>
				<a href="#">Usuários</a>
				<a href="#" className="active_link">admin</a>
			</div>
			<div className="navbar__right">
				<a href="#">
					<i className="fa fa-search"></i>
				</a>

				<a href="#">
					<i className="fa fa-clock-o"></i>
				</a>

				<a href="#">
					<img  width="30px" src={Avatar} alt="avatar" />
				</a>
			</div>

		</nav>
	)
}

export default Navbar;