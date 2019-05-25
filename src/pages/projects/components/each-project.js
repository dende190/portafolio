import React from 'react'

import './styles/each-project.css'

const Project = props => (
	<div className="CotainerEachProject">
		<div className="ContainerImageEachProject">
			<img src={props.src} />
		</div>
		<div className="ContainerTextEachProject">
			<h2>{props.name}</h2>
			<button onClick={props.handleOpenProject}>Saber Más</button>
		</div>
	</div>
)

export default Project