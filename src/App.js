import { BrowserRouter, Route } from "react-router-dom";
import Vending from "./Vending";
import Soda from "./Soda";
import Sardines from "./Sardines";
import "./App.css";
import "./Link.css";
import Chips from "./Chips";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route exact path="/" component={Vending} />
				<Route exact path="/soda" component={Soda} />
				<Route exact path="/chips" component={Chips} />
				<Route exact path="/sardines" component={Sardines} />
			</BrowserRouter>
		</div>
	);
}

export default App;
