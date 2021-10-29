import react from "react";
import { Link } from "react-router-dom";

function Sardines() {
	return (
		<div>
			<h1>You dont eat the sardines they eat you.</h1>
			<Link to="/" className="links">
				Go Back
			</Link>
		</div>
	);
}

export default Sardines;
