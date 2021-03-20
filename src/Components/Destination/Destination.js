import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Destination.css";
import Header from "../Header/Header";
import CityTravelerData from "../../CityTravelerData/CityTravelerData.json";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import map from "../../Images/Map.png";
import DestinationSearchResult from "../DestinationSearchResult/DestinationSearchResult";

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

	const { register, errors, handleSubmit } = useForm();
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
							<form
								action=""
								className="searchForm"
								onSubmit={handleSubmit(
									SearchClick
								)}
							>
								<input
									type="text"
									name="PickFromSearch"
									id=""
									ref={register({
										required: true,
										minLength: 2,
									})}
								/>{" "}
								<br />
								{errors.PickFromSearch &&
									"Tis is required"}
								<input
									type="text"
									name="PickToSearch"
									id=""
									ref={register}
								/>
								<input
									type="submit"
									name="search"
									value="Search"
								/>
							</form>
						)}
					</Col>
					<Col sm={12} md={6} className="mapPart">
						<img src={map} alt="" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Destination;
