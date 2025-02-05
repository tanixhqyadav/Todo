	import { Route, Routes, Navigate } from "react-router-dom";
	import Mainx from "./components/Mainx.jsx";
	import Signup from "./components/SignUp.jsx";
	import Login from "./components/Login.jsx";

	function App() {
		const user = localStorage.getItem("token");
		return (
			<Routes>
				{user && <Route path="/" exact element={<Mainx />} />}
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/login" exact element={<Login />} />
				<Route path="/" element={<Navigate replace to="/login" />} />
			</Routes>
		);
	}

	export default App;