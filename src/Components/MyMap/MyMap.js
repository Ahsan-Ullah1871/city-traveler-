import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MyMap = () => {
	const mapStyles = {
		height: "100vh",
		width: "100%",
	};

	const defaultCenter = {
		lat: 25.74486,
		lng: 89.275589,
	};
	const onClick = () => {
		console.info("I have been clicked!");
	};

	const divStyle = {
		background: "white",
		border: "1px solid #ccc",
		padding: 15,
	};

	return (
		<div>
			<LoadScript googleMapsApiKey="AIzaSyA5YjggofvCXW3-2aHqTOtOdpQDiR4HMvA">
				<GoogleMap
					id="overlay-view-example"
					mapContainerStyle={mapStyles}
					zoom={19}
					center={defaultCenter}
				/>
			</LoadScript>
		</div>
	);
};

export default MyMap;
