// import react from "react";
import { Link } from "react-router-dom";

function Vending() {
	return (
		<div>
			<Link to="/soda" className="links">
				Soda
			</Link>
			<Link to="/chips" className="links">
				Chips
			</Link>
			<Link to="/sardines" className="links">
				Fresh Sardines
			</Link>
		</div>
	);
}

export default Vending;
