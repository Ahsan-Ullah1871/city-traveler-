import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./HomeCard.css";
import Roll from "react-reveal/Roll";

const HomeCard = ({ traveler }) => {
	const history = useHistory();
	const selectVehicle = (name) => {
		history.push(`/destination/${name}`);
	};

	return (
		<div className="homeCardPart">
			<Roll>
				<Card
					style={{ border: "none", cursor: "pointer" }}
					onClick={() => selectVehicle(traveler.name)}
				>
					<Card.Img
						variant="top"
						src={traveler.photo}
					/>
					<Card.Body className="">
						<Button variant="info">
							{traveler.name}
						</Button>
					</Card.Body>
				</Card>
			</Roll>
		</div>
	);
};

export default HomeCard;
