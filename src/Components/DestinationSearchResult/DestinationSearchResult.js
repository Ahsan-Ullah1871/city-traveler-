import React from "react";

const DestinationSearchResult = ({ selectedVehicle }) => {
	const { name } = selectedVehicle;
	return <div>Name: {name}</div>;
};

export default DestinationSearchResult;
