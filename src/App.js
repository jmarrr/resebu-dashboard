import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './assets/logo.png'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import { FaHome, FaCalculator, FaBars } from "react-icons/fa";
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import DashBoard from './components/dashboard.js'
import TradeLog from './components/tradelog.js'
import SymbolStats from './components/symbolstats'
import TradesChart from './components/tradeschart.js'
import Calculator from './components/calculator.js'
import pnlChart from './components/pnlchart.js'


function App() {
	const [collapsed, setCollapsed] = useState(false);

	const handleToggleSidebar = () => {
		setCollapsed(!collapsed);
	};


	return (
		<Router>
			<div className="app" >
				<ProSidebar  className={`pro-sidebar ${collapsed ? 'collapsed-sidebar-btn' : ''}`} collapse={collapsed} onToggle={handleToggleSidebar}>
					<SidebarHeader>
					{
						<div class="App-header">
							<Helmet><title> Resebu Strategy </title></Helmet>
							<div style={{ textAlign: 'right', padding: '0 20px 20px 15px'}}>
								<FaBars size="20" onClick={() => handleToggleSidebar()} />
							</div>
							<img style={collapsed ? {width:"25px", height:"25px" } : {width:"50px", height:"50px" }} src={logo} alt="Logo" />
							<h3 style={collapsed ? {display : "none" } : {} }>Strategy Portfolio</h3>
						</div>
					}
					</SidebarHeader>
					<SidebarContent className={`${collapsed ? 'collapsed-sidebar-content' : ''}`}>
						<Menu>
							<MenuItem icon={<FaHome size="20" />}>
								Dashboard
								<Link to="/" />
							</MenuItem>
							<MenuItem icon={<FaCalculator size="20" />}>
								Calculator
								<Link to="/calculator" />
							</MenuItem>
							{/* <MenuItem icon={<FaHistory />}>
								Trade Log
								<Link to="/tradeLog" />
							</MenuItem>
							<MenuItem icon={<FaGg />}>
								Symbol Stats
								<Link to="/symbolstats" />
							</MenuItem>
							<MenuItem icon={<FaChartPie />}>
								Trades Chart
								<Link to="/tradeschart" />
							</MenuItem>
							<MenuItem icon={<FaChartLine />}>
								PnL Chart
								<Link to="/pnlchart" />
							</MenuItem> */}
						</Menu>
					</SidebarContent>
				</ProSidebar>
				
				<div class='content-wrapper'>
					<Switch>
						<Route path="/" exact component={DashBoard}></Route>
						<Route path="/calculator" component={Calculator}></Route>
						<Route path="/tradelog" component={TradeLog}></Route>
						<Route path="/symbolstats" component={SymbolStats}></Route>
						<Route path="/tradeschart" component={TradesChart}></Route>
						<Route path="/pnlchart" component={pnlChart}></Route>
					</Switch>	
				</div>
			</div>
		</Router>
	);
}

export default App;
