import { Link, Outlet, useSearchParams } from "react-router-dom";

export function WelcomeLayout() {
	const [searchParam, setSearchParam] = useSearchParams({ n: 3 });
	const number = searchParam.get("n");
	return (
		<>
			<Link to="/welcomes/1">Welcome 1</Link>
			<br />
			<Link to={`/welcomes/${number}`}>Welcome {number}</Link>
			<br />
			<Link to="/welcomes/new"> New Welcome List</Link>
			<br />
			<Outlet context={{ Hello: "world !" }} />
			<input
				type="number"
				value={number}
				onChange={(e) => setSearchParam({ n: e.target.value })}
			/>
		</>
	);
}
