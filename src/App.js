import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import Modal from './components/Modal/Modal';
import SearchBar from './components/Searchbar/SearchBar';
import s from './components/Searchbar/searchBar.module.css';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchImages } from './components/service/api';
import Loading from './components/Loader/Loader.jsx';
import Button from './components/Button/Button.jsx';

export default class App extends Component {
  state = {
    searchImg: '',
    hits: [],
    page: 1,
    error: null,
    status: 'idle',
    showModal: false,
    largeImageURL: '',
    tags: '',
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchImg;
    const nextQuery = this.state.searchImg;

    const page = this.state.page;
    
    if (nextQuery !== prevQuery) {
      this.setState({ status: 'pending' });
      this.setState({ page: 1, hits: [] });
      this.getImages({ nextQuery: nextQuery, page: 1 });
    }
    if (page !== prevState.page && page !== 1) {
      this.setState({ status: 'pending' });
      this.getImages({ nextQuery: nextQuery, page: page });
    }
  }

  getImages = ({ nextQuery, page }) => {
    fetchImages({ nextQuery, page })
      .then(data => {
        if (data.hits.length === 0) {
          this.setState({ status: 'rejected' });
        }
        this.setState({ status: 'resolved', totalHits: data.totalHits });

        this.setState(prevState => ({
          hits: [...prevState.hits, ...data.hits],
        }));
      })
      .catch(error => this.setState({ error, status: 'rejected' }))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  handleLoadMore = e => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSearchForm = searchImg => {
    this.setState({ searchImg });
  };

  handleSetLargeImageURL = ({ largeImageURL, tags }) => {
    this.setState({ largeImageURL, tags });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const {
      status,
      error,
      hits,
      searchImg,
      showModal,
      largeImageURL,
      totalHits,
      tags,
    } = this.state;

    if (status === 'idle') {
      return (
        <>
          <SearchBar onSubmit={this.handleSearchForm} />
          <ToastContainer autoClose={3000} theme={'colored'} />
          <div className={s.title}>Enter name image!</div>
        </>
      );
    }

    if (status === 'pending') {
      return (
        <div>
          {<Loading />}
          Loading.......
        </div>
      );
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return (
        <div className={s.App}>
          <SearchBar onSubmit={this.handleSearchForm} />
          <ImageGallery
            hits={hits}
            toggleModal={this.toggleModal}
            handleSetLargeImageURL={this.handleSetLargeImageURL}
          />

          {/* {showModal && <Modal onClose={this.toggleModal}></Modal>} */}
        </div>
      );
    }
  }
}
