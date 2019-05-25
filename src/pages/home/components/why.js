import React from 'react'

import Carousel from '../../../widgets/components/carousel'

import './styles/why.css'

const Why = props => (
	<div className="ContainerWhy">
		<h1 className="TextCenter TitleWhy">¿Por que me deberias contratar?</h1>
		<div className="ContainerReasons">
			{
				props.listWhyReasons.map( reason => (
					<div className="ContainerWhyReason" key={reason.id}>
						<h2>{reason.why}</h2>
						<p>{reason.description}</p>
					</div>
				))
			}
		</div>
		<h1 className="TextCenter TitleWhy">Herramientas con las que se trabajar</h1>
		<Carousel 
			data={props.listProgramming} 
		/>
		<h1 className="TextCenter TitleWhy">Certificados que lo demuestran</h1>
		<Carousel 
			data={props.listCertificates} 
		/>
	</div>
)

export default Why