
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<header>
		<div className="container">
			<div className="inner">
			<div className="brand">
				<Link to="/">WatchList</Link>
			</div>
			<ul className="nav-links">
				<li>
				<Link to="/">Watch List</Link>
				</li>
				<li>
				<Link to="/watched">Watched</Link>
				</li>
				<li>
				<Link to="/add" className="btn">
					Add
				</Link>
				</li>
				<li>
            <button className="btn" onClick={handleLogout}>
				Logout
			</button>
            </li>
			</ul>
			</div>
		</div>
    </header>
	);
};

export default Main;