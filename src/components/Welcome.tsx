import { useOutletContext, useParams } from "react-router-dom";

export function Welcome() {
	const { id } = useParams();
	const obj: any = useOutletContext();
	return (
		<h1>
			Welcome Page {id}
			{obj.Hello}
		</h1>
	);
}
