import React, { useContext } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { LoggedInUserContext } from "../../App";
import "./Header.css";
import Logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import {
	initializeFramework,
	signOut,
} from "../FirebaseManegment/FirebaseManegment";

const Header = () => {
	const [LoggedInUser, setLoggedInUser] = useContext(LoggedInUserContext);
	const name = LoggedInUser?.displayName;
	const email = LoggedInUser?.email;
	const photo = LoggedInUser?.photoURL;
	console.log(LoggedInUser.displayName);
	// Profile Open: https:
	const profileOpen = () => {
		document.getElementById("profileCard").style.display = "block";
	};
	// closeProfile
	const closeProfile = () => {
		document.getElementById("profileCard").style.display = "none";
	};
	const logOut = () => {
		signOut().then((res) => {
			setLoggedInUser("");
		});
	};
	return (
		<div>
			<div>
				<Navbar expand="lg " className="headerPart">
					<Navbar.Brand to="/home" className="logo">
						<img src={Logo} alt="" />
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls="basic-navbar-nav "
						className="bg-white"
					/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto navPart">
							<Link to="/home">Home</Link>
							<Link to="/destination/Bike">
								Destination
							</Link>
							<Link>Blog</Link>
							<Link>Contact</Link>
							{name === undefined ? (
								<Link to="/login">
									Log in
								</Link>
							) : (
								<button
									onClick={
										profileOpen
									}
								>
									{name}
								</button>
							)}
						</Nav>

						<div
							className="profileCard"
							id={"profileCard"}
						>
							<Button
								variant="contained"
								color="secondary"
								className="closeButton"
								onClick={closeProfile}
							>
								<FontAwesomeIcon
									icon={
										faTimesCircle
									}
								/>
							</Button>
							<div className="profilePhoto">
								<img
									src={photo}
									alt=""
								/>
							</div>
							<div className="info">
								<h4>
									Name:
									{name}
								</h4>
								<h4>Email: {email}</h4>
							</div>
							<Button
								variant="contained"
								color="primary"
								className="logOut"
								onClick={logOut}
							>
								<FontAwesomeIcon
									icon={
										faSignOutAlt
									}
								/>
								Log Out
							</Button>
						</div>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</div>
	);
};

export default Header;
