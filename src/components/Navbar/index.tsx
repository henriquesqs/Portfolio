import React from "react"
import { fullpageApi } from "@fullpage/react-fullpage";

import "./styles.css"


interface propsTypes {
	links: any[],
	api: fullpageApi;
}

const Navbar: React.FC<propsTypes> = (props) => {

	const navLinks = props.links.map(link => {
		return (
			(link.id === 1) ?
				<strong key={link.id}>
					<p onClick={() => (props.api).moveTo(link.id)}>
						{link.title}
					</p>
				</strong> :
				<p key={link.id} onClick={() => (props.api).moveTo(link.id)}>
					{link.title}
				</p>
		)
	})

	return (
		<div className="navBar">
			{navLinks}
		</div>
	);
}

export default Navbar
