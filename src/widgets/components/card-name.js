import React from 'react'

import Avatar from '../../../images/others/avatar.png'
import GitHub from '../../icons/components/github'
import Whatsapp from '../../icons/components/whatsapp'
import Linkedin from '../../icons/components/linkedin'
import './styles/card-name.css'

const CardName = props => (
	<div className="ContainerCardName TextCenter">
		<div className="BorderHeaderCardName"></div>
		<div className="ContainerContentFlexCardName">
			<div className="ContainerCardInfoAboutMe">
				<div className="ContainerContentFlexCardName">
					<div className="ContainerAvatarCardName">
						<img src={Avatar} className="AvatarCardName" />
					</div>
					<div className="DataCardName">
						<h2 className="TextCenter">Juan Pablo</h2>
						<h2 className="TextCenter">Arnedo Ramón</h2>
						<h3 className="TextCenter"><a href="mailto:dende149@gmail.com">dende149@gmail.com</a></h3>
						<p className="TextCenter"><span className="ContryCardName">Colombia - Bogotá DC</span></p>
					</div>
				</div>
				<div className="FooterCardName TextCenter">
					<h2>Desarrollador Frontend y Backend</h2>
					<div className="ContainerIcons">
						<a href="https://github.com/dende190" target="_blank"><GitHub size={70} color="grey" /></a>
						<a href="https://www.linkedin.com/in/juan-pablo-arnedo-ramon-07a902185/" target="_blank"><Linkedin size={70} color="grey" /></a>
						<a href="https://wa.me/573024221917?text=Buen%20dia%20vimos%20tu%20portafolio%20y%20queremos%20contactarnos%20contigo">
							<Whatsapp size={70} color="grey" />
						</a>
					</div>
				</div>
			</div>
			<div className="ContainerInfoAboutMe">
				<div>
					<h2>¿Quien Soy?</h2>
					<p>Soy un joven que poco a poco a aprendido lo que sabe hoy en dia y quiere siempre saber mas, me gusta mucho programar los proyectos que he realizado he realizado tanto el Frontend como el Backend, pero siempre me ha gustado mas el Backend. Me gusta mucho la Seguridad Informatica y la programacion, me encantan las artes marciales y hacer ejercicio,</p>
				</div>
				<div>
					<h2>¿Que Aspiro en mi vida?</h2>
					<p>Mi sueño es poder tener mi propia StartUp, pero en este momento quisiera aprender mucho para llegar a ser Product Manager y poco a poco mejorar mis conocimientos, me gustaria en un momento trabajar en temas de Seguridad Informatica.</p>
				</div>
			</div>
		</div>
	</div>
)

export default CardName