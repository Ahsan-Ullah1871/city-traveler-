import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Destination.css";
import Header from "../Header/Header";
import CityTravelerData from "../../CityTravelerData/CityTravelerData.json";
import { Col, Container, Row } from "react-bootstrap";
import map from "../../Images/Map.png";
import DestinationSearchResult from "../DestinationSearchResult/DestinationSearchResult";
import MyMap from "../MyMap/MyMap";
import SearchBox from "../SearchBox/SearchBox";

const Destination = () => {
	const { name } = useParams();
	const [selectedVehicle, setSelectedVehicle] = useState({});
	const [showSearchResult, setShowSearchResult] = useState(false);
	useEffect(() => {
		const findSelectedVehicle = CityTravelerData.find(
			(selected) => selected.name === `${name}`
		);
		setSelectedVehicle(findSelectedVehicle);
	}, [name]);

	const SearchClick = (data) => {
		setShowSearchResult(true);
		const searchResult = data;
		const selectedVehicleData = { ...selectedVehicle, searchResult };
		setSelectedVehicle(selectedVehicleData);
	};

	const destinationStyle = {
		minHeight: "700px",
		backgroundImage: `url(${selectedVehicle?.backPhoto})`,
		backgroundSize: "cover",
		color: "red",
		backgroundPosition: "center",
	};

	return (
		<div style={destinationStyle}>
			<Header></Header>
			<Container>
				<Row className="align-items-md-center">
					<Col sm={12} md={6} className="mb-5">
						{showSearchResult ? (
							<DestinationSearchResult
								selectedVehicle={
									selectedVehicle
								}
							></DestinationSearchResult>
						) : (
							<SearchBox
								SearchClick={
									SearchClick
								}
							></SearchBox>
						)}
					</Col>
					<Col sm={12} md={6} className="mapPart">
						<MyMap></MyMap>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Destination;
