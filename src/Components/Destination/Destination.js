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
	useEffect(() => {
		const findSelectedVehicle = CityTravelerData.find(
			(selected) => selected.name === `${name}`
		);
		setSelectedVehicle(findSelectedVehicle);
	}, [name]);

	const destinationStyle = {
		height: "700px",
		backgroundImage: `url(${selectedVehicle?.backPhoto})`,
		backgroundSize: "cover",
		color: "red",
		backgroundPosition: "center",
	};
	const { register, errors, handleSubmit } = useForm();
	const SearchClick = (data) => {
		const searchResult = data;
		const selectedVehicleData = { ...selectedVehicle, searchResult };
		setSelectedVehicle(selectedVehicleData);
	};
	console.log(selectedVehicle);

	return (
		<div style={destinationStyle}>
			<Header></Header>
			<Container>
				<Row>
					<Col>
						<h3>
							Aythachi {selectedVehicle.name}
							<form
								action=""
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
							<DestinationSearchResult
								selectedVehicle={
									selectedVehicle
								}
							></DestinationSearchResult>
						</h3>
					</Col>
					<Col className="mapPart">
						<img src={map} alt="" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Destination;
