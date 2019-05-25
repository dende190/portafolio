import React from 'react'

import './styles/data-about.css'

const DataAbout = props => (
	<div className="ContainerDataAbout">
		<div className="ContainerGif">
			<img className="gif" src={props.gif} />
		</div>
		<div className="TextCenter">
			<h1>{props.hobbie}</h1>
			<p>{props.description}</p>
			<p>Fecha de inicio: {props.start_date}</p>
		</div>
	</div>
)

export default DataAbout