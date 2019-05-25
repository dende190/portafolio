import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import './styles/modal.css'

const ModalProjects = props => {
	if(props.openModalProject){
	    return createPortal(
			<div className="Modal">
				<div className="Modal__container">
					<button className="Modal__close-button" onClick={props.handleCloseProject}>X</button>
					{props.children}
				</div>
			</div>, document.getElementById('modal-projects')
	    )
	}else{
		return null
	}

}

export default ModalProjects;


