import React from "react"
import "./styles.css"

const Navbar = (props) => {
	return (
		<div className="navBar">
			<strong>
				<p>{props.link1 ? props.link1 : null}</p>
			</strong>
			<p>{props.link2 ? props.link2 : null}</p>
			<p>{props.link3 ? props.link3 : null}</p>
			<p>{props.link4 ? props.link4 : null}</p>
		</div>
	)
}

export default Navbar
