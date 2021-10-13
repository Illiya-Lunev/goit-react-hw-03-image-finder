import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
// import Modal from './components/Modal/Modal';
import SearchBar from './components/Searchbar/SearchBar';
import s from './components/Searchbar/searchBar.module.css'
import ImageGallery from './components/ImageGallery/ImageGallery';





export default class App extends Component {
  state = {
    searchImg: '',
    // showModal: false,
  };

  handleSearchForm = searchImg => {
    this.setState({searchImg})

  }

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({ showModal: !showModal }));
  // };
  render() {
    // const { showModal } = this.state;
    return <div className={s.App} >
      <SearchBar onSubmit={this.handleSearchForm} />
      <ImageGallery searchImg={this.state.searchImg}  />
      {/* {showModal && <Modal onClose={this.toggleModal}></Modal>} */}
      <ToastContainer autoClose={3000} theme={'colored'}/>
     
      
      </div>;
  
  }
}
