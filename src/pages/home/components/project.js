import React from 'react'

import './styles/project.css'

const Project = props => (
	<div className="ContentProject" >
		<div className={ props.button_rotate ? `ContentFacePrimary ${props.button_rotate}` : "ContentFacePrimary StateInitial" }>
			<h3>{props.name}</h3>
			<div>
				<img width="100%" src={props.src} />
			</div>
			<p>{props.description}</p>
			{
				props.developed_by.map( developed => (
					<p className="ListDevelopedProject"><span>{developed}</span></p>
				))
			}
			<p>{props.date}</p>
		</div>
		<div className={props.button_frontend ? "ContentFaceFrontend StateInitial" : "ContentFaceFrontend"}>
			<h3>Uso de Frontend</h3>
			<div>
				<img width="100%" src={props.src} />
			</div>
			<div className="ContainerProjectLenguaje">
				<h3>Como se realizo el Frontend:</h3>
				<ul>
					{
						props.frontend.map( front => (
							<li className="ProjectLenguaje">{front}</li>
						))
					}
				</ul>
			</div>
		</div>
		<div className={props.button_backend ? "ContentFaceBackend StateInitial" : "ContentFaceBackend"}>
			<h3>Uso de Backend</h3>
			<div>
				<img width="100%" src={props.src} />
			</div>
			<div className="ContainerProjectLenguaje">
				<h3>Como se realizo el Backend:</h3>
				<ul>
					{
						props.backend.map( back => (
							<li className="ProjectLenguaje">{back}</li>
						))
					}
				</ul>
			</div>
		</div>
	</div>
)

export default Project