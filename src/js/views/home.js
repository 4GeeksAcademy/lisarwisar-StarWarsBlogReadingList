import React from "react";
import "../../styles/home.css";

export const Home = () => {
	
	return(
		<div>
			<div className="card">
				<img src="..." className="card-img-top" alt="..."></img>
				<div className="card-body">
					<h5 className="card-title">Name</h5>
					<p className="card-text">Gender</p>
					<p className="card-text">Hair-color</p>
					<p className="card-text">Eye color</p>
					<a href="#" className="btn btn-primary">Learn more!</a>
				</div>
			</div>
		</div>
	)
}
