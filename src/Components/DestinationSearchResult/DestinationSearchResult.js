import React from "react";
import "./DestinationSearchResult.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faUserFriends,
	faSearchLocation,
	faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const DestinationSearchResult = ({ selectedVehicle }) => {
	const { name, categories, avatar } = selectedVehicle;
	console.log(selectedVehicle);
	return (
		<div>
			<div className="searchPlace">
				<VerticalTimeline>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background:
								"rgb(33, 150, 243)",
							color: "#fff",
						}}
						contentArrowStyle={{
							borderRight:
								"7px solid  rgb(33, 150, 243)",
						}}
						iconStyle={{
							background:
								"rgb(33, 150, 243)",
							color: "#fff",
							fontSize: "30px",
						}}
						icon={
							<FontAwesomeIcon
								icon={faSearchLocation}
							/>
						}
					>
						<h3>From</h3>
						<p>
							{
								selectedVehicle
									.searchResult
									?.PickFromSearch
							}
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						iconStyle={{
							background:
								"rgb(33, 150, 243)",
							color: "#fff",
							fontSize: "35px",
						}}
						icon={
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
							/>
						}
					>
						<h3 className=" ">To</h3>

						<p>
							{
								selectedVehicle
									.searchResult
									?.PickToSearch
							}
						</p>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>
			<div className="categories">
				{categories &&
					categories.map((category) => {
						return (
							<div className="option">
								<img
									src={avatar}
									alt=""
								/>
								<p>{name}</p>
								<p>
									<FontAwesomeIcon
										icon={
											faUserFriends
										}
									/>{" "}
									{category?.sits}
								</p>
								<p>৳{category?.rent}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default DestinationSearchResult;
