import React, { useContext } from "react";
import "./SocialLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
	initializeFramework,
	signInWithFacebook,
	signInWithGoogle,
} from "../FirebaseManegment/FirebaseManegment";
import { LoggedInUserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const SocialLogin = () => {
	const [LoggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);
	initializeFramework();
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };
	const googleSignInHandle = () => {
		signInWithGoogle().then((res) => {
			setLoggedInUser(res);
			history.replace(from);
		});
	};
	const facebookSignInHandle = () => {
		signInWithFacebook().then((res) => {
			setLoggedInUser(res);
			history.replace(from);
		});
	};
	return (
		<div className="socialButton">
			<h2>Sign In with social network</h2>
			<div className="facebook">
				<button onClick={facebookSignInHandle}>
					<div className=" socialRow">
						<div className=" socialColum">
							<FontAwesomeIcon
								icon={faFacebook}
								className="socialIcons"
							/>
						</div>
						<div className=" socialColum">
							Log in with facebook
						</div>
					</div>
				</button>
			</div>
			<div className="google">
				<button onClick={googleSignInHandle}>
					<div className=" socialRow">
						<div className=" socialColum">
							<FontAwesomeIcon
								icon={faGoogle}
								className="socialIcons"
							/>
						</div>
						<div className=" socialColum">
							Log in with Google
						</div>
					</div>
				</button>
			</div>
		</div>
	);
};

export default SocialLogin;
