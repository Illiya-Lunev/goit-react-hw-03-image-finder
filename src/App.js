import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import Modal from './components/Modal/Modal';
import SearchBar from './components/Searchbar/SearchBar';

export default class App extends Component {
  state = {
    searchImg: '',
    showModal: false,
  };

  handleSearchForm = searchImg => {
    this.setState({searchImg})

  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal } = this.state;
    return <div>
      <SearchBar onSubmit={this.handleSearchForm} />
      {showModal && <Modal onClose={this.toggleModal}></Modal>}
      <ToastContainer autoClose={3000}/>
     
      
      </div>;
  
  }
}
