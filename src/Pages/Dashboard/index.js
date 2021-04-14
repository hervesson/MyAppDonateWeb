import { useState } from 'react';
import Sidebar from "../../Components/sidebar/Sidebar"
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
		<div className="container">
			<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
		</div>
	)
};

export default DashboardAdmin