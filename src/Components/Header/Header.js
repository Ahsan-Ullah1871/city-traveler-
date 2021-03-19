import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
	return (
		<div>
			<div className="logo">
				<Navbar expand="lg">
					<Navbar.Brand href="#home">
						<h2>City Traveler</h2>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto navPart">
							<a href="#home">Home</a>
							<a href="#link">Destination</a>
							<a href="#link">Blog</a>
							<a href="#link">Contact</a>
							<a href="#link">Log in</a>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</div>
	);
};

export default Header;
