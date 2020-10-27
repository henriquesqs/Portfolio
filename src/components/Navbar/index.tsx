import React from "react"

import "./styles.css"


interface propsTypes {
	links: any[],
	anchors: string[];
}

const Navbar: React.FC<propsTypes> = (props) => {
	
	const navLinks = props.links.map(link => {
		return (
			(link.id === 1) ?
				<strong key={link.id}>
					<a href={"#" + props.anchors[link.id-1]}><p>{link.title}</p></a>
				</strong> :
				<a key={link.id} href={"#" + props.anchors[link.id-1]}><p>{link.title}</p></a>
		)
	})

	return (
		<div className="navBar">
			{navLinks}
		</div>
	);
}

export default Navbar
