import PropTypes from 'prop-types';
import { Component } from 'react';
// import api from '../service/apiImages';

export default class ImageGallery extends Component {
  static propTypes = {
    searchImg: PropTypes.string,
   
  };

  state ={
    images: [],
    page: 1,
    status: 'idle',
    error: null,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchImg;
    const nextName = this.props.searchImg;

    if (prevName !== nextName) {
      fetch(
        `https://pixabay.com/api/?key=22951340-683a641f2fde08e18261bbe3d&per_page=12&page=${this.state.page}&q=${nextName}&image_type=photo`
      ).then(res => res.json()).then(console.log());
    }
  }

  render() {
    return (
      <ul className="ImageGallery">
        <li>{this.props.searchImg}</li>
      </ul>
    );
  }
}
