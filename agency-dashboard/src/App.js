import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/pages/Dashboard";

function App() {
	return (
		<React.Fragment>
			<Router>
				{" "}
				<Navbar />
				<div class="container-fluid">
					<div className="row">
						<Sidebar />
						<Route exact path="/dashboard" component={Dashboard} />
					</div>
				</div>
			</Router>
		</React.Fragment>
	);
}

export default App;
