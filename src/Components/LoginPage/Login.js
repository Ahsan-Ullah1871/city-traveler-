import React, { useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { LoggedInUserContext } from "../../App";
import CreateAccount from "../CreateAccount/CreateAccount";
import Header from "../Header/Header";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
	const [LoggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };
	useEffect(() => {
		if (LoggedInUser?.email) {
			history.replace(from);
		}
	}, [LoggedInUser]);

	return (
		<div className="loginPage">
			<Header></Header>
			<CreateAccount></CreateAccount>
			<SocialLogin></SocialLogin>
		</div>
	);
};

export default Login;
