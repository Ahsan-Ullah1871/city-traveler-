import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { LoggedInUserContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import {
	createNewAccount,
	initializeFramework,
	signInOldUser,
} from "../FirebaseManegment/FirebaseManegment";
import "./CreateAccount.css";

const CreateAccount = () => {
	const [LoggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);
	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };

	const [newUser, setNewUser] = useState(true);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);
	const [error, setError] = useState("");
	initializeFramework();

	// capture user input data and store in state:
	const getUserDataHandler = (e) => {
		if (e.target.name === "name") {
			setName(e.target.value);
			setError("");
		} else if (e.target.name === "email") {
			let checkMail = /\S+@\S+\.\S+/.test(e.target.value);

			if (checkMail === true) {
				setEmail(e.target.value);
				setError("");
			} else {
				setError("Email is not valid!!");
			}
		} else if (e.target.name === "password") {
			const checkPassword = e.target.value.length > 5;

			if (checkPassword === true) {
				setPassword(e.target.value);
				setError("");
			} else {
				setError(
					"This is not valid password,Enter at least a 6-digit password"
				);
			}
		} else if (e.target.name === "confirmPassword") {
			const checkConfirmPassword = password === e.target.value;
			if (checkConfirmPassword === true) {
				setConfirmPassword(e.target.value);
				setError("");
			} else {
				setError("Password dont match");
			}
		}
	};

	// after Click in submit button:

	const handleSubmitButton = (e) => {
		if (error === "") {
			if ((newUser && name, email, password)) {
				createNewAccount(email, password, name).then(
					(res) => {
						setLoggedInUser(res);
						history.replace(from);
					}
				);
			}
			if (!newUser && email && password) {
				signInOldUser(email, password).then((res) => {
					setLoggedInUser(res);
					history.replace(from);
				});
			}
		}
		e.preventDefault();
	};

	// user Detect
	const userDetect = () => {
		newUser ? setNewUser(false) : setNewUser(true);
	};
	return (
		<div>
			<div className="userDataForm">
				<h2>{newUser ? "Create New Account" : "Log In"}</h2>

				{/* from here conditional dynamic form */}
				<form
					action=""
					className="createUserForm"
					onSubmit={handleSubmitButton}
				>
					{newUser && (
						<input
							type="text"
							name="name"
							id=""
							placeholder="name"
							required
							onBlur={getUserDataHandler}
							onInput={() => setError("")}
						/>
					)}
					<input
						type="email"
						name="email"
						id=""
						placeholder="email"
						required
						onBlur={getUserDataHandler}
						onInput={() => setError("")}
					/>
					<input
						type="password"
						name="password"
						id=""
						placeholder="password"
						required
						onBlur={getUserDataHandler}
						onInput={() => setError("")}
					/>
					{newUser && (
						<input
							type="password"
							name="confirmPassword"
							id=""
							placeholder="confirm password"
							onBlur={getUserDataHandler}
							required
							onInput={() => setError("")}
						/>
					)}
					{/* error message output: */}
					{error && (
						<p className="errorMessage">
							<FontAwesomeIcon
								icon={
									faExclamationTriangle
								}
							/>
							{error}
						</p>
					)}
					<button type="submit" name="submit">
						{newUser
							? "Create account"
							: "Log In"}
					</button>
					<p>
						{newUser
							? "Already have an account?"
							: "Don't have an account?"}
						<span
							className="highlightText"
							onClick={userDetect}
						>
							{newUser
								? "Log In"
								: "Create an account"}
						</span>
					</p>
				</form>
				{LoggedInUser?.error && (
					<p className="errorMessage">
						<FontAwesomeIcon
							icon={faExclamationTriangle}
						/>
						{LoggedInUser?.error}
					</p>
				)}
			</div>
		</div>
	);
};

export default CreateAccount;
