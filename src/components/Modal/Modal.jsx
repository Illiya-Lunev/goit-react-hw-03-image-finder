import { Component } from 'react';
import s from './modal.module.css'

export default class Modal extends Component{

    render() {
        return <div className="Modal__backdrop" >
        <div className="Modal__content">{this.props.children}</div>
      </div>
    }
}