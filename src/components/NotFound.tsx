import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export function NotFound() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate("/", { state: "Error on not found page " });
		}, 1000);
	}, []);
	return <h1>Not Found !!</h1>;
	//return <Navigate to="/" />;
}
