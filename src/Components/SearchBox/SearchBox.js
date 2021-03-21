import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./SearchBox.css";
import DatePicker from "react-date-picker";
import Rotate from "react-reveal/Rotate";

const SearchBox = ({ SearchClick }) => {
	const { register, errors, handleSubmit } = useForm();
	const [value, onChange] = useState(new Date());

	return (
		<Rotate bottom left>
			<div>
				<form
					action=""
					className="searchForm"
					onSubmit={handleSubmit(SearchClick)}
				>
					<input
						type="text"
						name="PickFromSearch"
						id=""
						placeHolder="From"
						ref={register({
							required: true,
							minLength: 2,
						})}
					/>{" "}
					<p className="errorMessage">
						{errors.PickFromSearch &&
							"Tis is required"}
					</p>
					<input
						type="text"
						name="PickToSearch"
						placeHolder="To"
						id=""
						ref={register({
							required: true,
							minLength: 2,
						})}
					/>
					<DatePicker
						name="datePick"
						className="datePick"
						onChange={onChange}
						value={value}
						ref={register}
					/>
					<p className="errorMessage">
						{errors.PickToSearch &&
							"Tis is required"}
					</p>
					<input
						type="submit"
						name="search"
						value="Search"
					/>
				</form>
			</div>
		</Rotate>
	);
};

export default SearchBox;
