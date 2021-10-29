import { useState } from "react";
import { Link } from "react-router-dom";

function Chips() {
	const [count, countUpdate] = useState(0);
	const handleClick = () => {
		countUpdate(count + 1);
	};
	return (
		<div>
			<h1>Bags Eaten: {count}</h1>
			<button onClick={handleClick}>NOM NOM NOM</button>
			<Link to="/" className="links">
				Go Back
			</Link>
		</div>
	);
}

export default Chips;
