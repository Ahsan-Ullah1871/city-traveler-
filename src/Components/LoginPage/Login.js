import React from "react";
import CreateAccount from "../CreateAccount/CreateAccount";
import Header from "../Header/Header";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
	return (
		<div>
			<Header></Header>
			<CreateAccount></CreateAccount>
			<SocialLogin></SocialLogin>
		</div>
	);
};

export default Login;
