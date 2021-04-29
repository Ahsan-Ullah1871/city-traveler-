import "./App.css";
import { createContext, useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Destination from "./Components/Destination/Destination";
import Login from "./Components/LoginPage/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { initializeFramework } from "./Components/FirebaseManegment/FirebaseManegment";
import firebase from "firebase/app";
import "firebase/auth";

export const LoggedInUserContext = createContext();

function App() {
	const [LoggedInUser, setLoggedInUser] = useState({});
	// useEffect(() => {
	// 	initializeFramework();
	// 	firebase.auth().onAuthStateChanged(function (user) {
	// 		if (user) {
	// 			setLoggedInUser(user);
	// 		} else {
	// 			setLoggedInUser("");
	// 		}
	// 	});
	// }, []);
	return (
		<div>
			<LoggedInUserContext.Provider
				value={[LoggedInUser, setLoggedInUser]}
			>
				<Router>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route path="/home">
							<Home></Home>
						</Route>
						<PrivateRoute path="/destination/:name">
							<Destination></Destination>
						</PrivateRoute>
						<Route path="/login">
							<Login></Login>
						</Route>
					</Switch>
				</Router>
			</LoggedInUserContext.Provider>
		</div>
	);
}

export default App;
