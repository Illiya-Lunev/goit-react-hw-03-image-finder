import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
     
  }

  componentWillUnmount() {
    window.removeEventListener('keydown',this.handleKeyDown)
 
  }
  
  // Закрытие по Esc
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

// Закрытие по Бекдропу
  handleBackdropClick = e =>{
if(e.currentTarget === e.target){
  this.props.onClose();
}

   

  }
  render() {
    return createPortal(
      <div className={s.Modal__backdrop} onClick={this.handleBackdropClick}>
        <div className={s.Modal__content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}
