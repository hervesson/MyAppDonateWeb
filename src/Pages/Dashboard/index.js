import { useState } from 'react';

import Navbar from "../../Components/navbar/Navbar"
import Sidebar from "../../Components/sidebar/Sidebar"
import Main from "../../Components/main/Main"



import "./index.css"

const DashboardAdmin = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	const openSidebar = () => {
		setSidebarOpen(true);
	}

	const closeSidebar = () => {
		setSidebarOpen(false);
	}

	return (
		<div className="containerr">
			<Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
			<Main />
			<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
		</div>
	)
};

export default DashboardAdmin