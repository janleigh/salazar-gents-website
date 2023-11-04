import ReactDOM from "react-dom";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import App from "./pages/App";

import "animate.css";
import "./styles/index.scss";

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
	</Router>,
	document.getElementById("root")
);
