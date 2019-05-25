import React, { useState } from 'react'

import './styles/carousel.css'

const Carousel = props => {
	const [start, setStart] = useState(1)
	const [end, setEnd] = useState(4)

	return (
		<div className="ContainerCarouselDataCarousel">
			<button 
				className="LeftButtonCarousel" 
				onClick={() => {
					if(start == 1){
						setStart(10)
						setEnd(13)	
					}else{
						setStart(start - 1)
						setEnd(end - 1)
					}
				}} 
			> 👈 </button>
			{
				props.data.map( item => {
					if(item.id >= start && item.id <= end){
						return (
							<div className="ContainerDataCarousel" key={item.id} id={item.id} >
								<img width="100%" src={item.src} />
								<p>{item.name}</p>
							</div>
						)
					}
				})
			}
			<button 
				className="RightButtonCarousel" 
				onClick={() => {
					if(end == 13){
						setStart(1)
						setEnd(4)
					}else{
						setStart(start + 1)
						setEnd(end + 1)
					}
				}}
			> 👉 </button>
		</div>
	)
 }

export default Carousel