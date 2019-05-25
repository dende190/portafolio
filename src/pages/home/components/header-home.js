import React, { Fragment } from 'react'

import Avatar from '../../../../images/others/avatar.png'
import Subl from './subl'

import './styles/header-home.css'

const HeaderHome = props => (
	<div className="ContainerAllHeaderHome">
		<h1>Bienvenidos a mi portafolio</h1>
		<div className="ContainerHeaderHome">
			<div className="ContentHeaderHome">
				<h2>¿Quien soy?</h2>
				<div className="ContainerDataHeaderHome">
					<div className="ContainerImageAvatarHeaderHome">
						<img className="ImageAvatarHeaderHome" src={Avatar} />
					</div>
					<div>
						<p>Juan Pablo Arnedo Ramón</p>
						<p>Desarrollor Backend y Frontend</p>
						<p>Email de contacto <span><a href="mailto:dende149@gmail.com">dende149@gmail.com</a></span></p>
						<div className="TextCenter">
							<a target="_blank" href="http://jparnedo:8080/documents/cv.pdf"><button>Ver CV</button></a>
						</div>
					</div>
				</div>
			</div>
			<Subl />
		</div>
	</div>
)

export default HeaderHome