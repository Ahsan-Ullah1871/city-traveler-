import "./App.css";
import { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Destination from "./Components/Destination/Destination";
function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/home">
						<Home></Home>
					</Route>
					<Route exact path="/destination/:name">
						<Destination></Destination>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
