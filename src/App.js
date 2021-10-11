import { Component } from 'react';
import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal } = this.state;
    return <div>
      <button type="button" onClick={this.toggleModal}> открыть</button>
      {showModal && <Modal onClose={this.toggleModal}></Modal>}</div>;
  }
}
