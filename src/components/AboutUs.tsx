import { useParams } from "react-router-dom";
export function AboutUs() {
	const { id } = useParams();
	return <>AboutUs Page {id}</>;
}
export function ContactUs() {
	return <>ContactUs Page</>;
}
export function ContactMe() {
	return <>ContactMe Page</>;
}
