import axios from "axios";
import { useState, useEffect } from "react";
import Alert from "./Alert";
import Button from "./Button";
import ListGroup from "./ListGroup";
import { useLocation } from "react-router-dom";

export function Home() {
	//let items = ["london", "san francisco", "tehran", "tokyo"];
	const [countries, setCountries] = useState([]);
	const [province, setProvince] = useState([]);
	const location = useLocation();
	useEffect(() => {
		axios
			.get("http://isdynamicdev.com/basicinfo/country/getAll", {
				headers: {
					language: "fa",
				},
			})
			.then((response: any) => {
				setCountries(response.data.data);
			});
		axios
			.get("http://45.156.186.149/basicinfo/province/getAll", {
				headers: {
					language: "en",
				},
			})
			.then((city) => {
				setProvince(city.data.data);
			});
	}, []);
	const handleSelectItem = (item: string) => {
		console.log(item);
	};
	const [alertVisible, setAlertVisibility] = useState(false);
	return (
		<>
			<p>{location.state}</p>
			<Button color="danger" onClick={() => setAlertVisibility(true)}>
				My Button
			</Button>
			<ListGroup
				data={countries}
				headingTitle="Country"
				onSelectItem={handleSelectItem}
			/>
			<ListGroup
				data={province}
				headingTitle="Province"
				color="brown"
				//onSelectItem={handleSelectItem}
			/>
			{alertVisible && (
				<Alert onClose={() => setAlertVisibility(false)}>
					my <span>alert</span>
				</Alert>
			)}
		</>
	);
}
