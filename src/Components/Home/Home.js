import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import cityTravelerData from "../../CityTravelerData/CityTravelerData.json";
import "./Home.css";
import HomeCard from "../HomeCard/HomeCard";

const Home = () => {
	const [travelerData, setTravelerData] = useState([]);
	useEffect(() => {
		setTravelerData(cityTravelerData);
	}, []);
	return (
		<div className="homePart">
			<Header></Header>
			<div className="homeCard">
				{travelerData.map((traveler) => (
					<HomeCard traveler={traveler}></HomeCard>
				))}
			</div>
		</div>
	);
};

export default Home;
