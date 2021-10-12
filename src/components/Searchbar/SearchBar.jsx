import { Component } from 'react';
import { toast } from 'react-toastify';
import s from './searchBar.module.css';

export default class SearchBar extends Component {
  state = {
    searchImg: '',
  };

  handleNameChange = e => {
    this.setState({ searchImg: e.currentTarget.value.toLowerCase() });
    
  };

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.searchImg.trim() ===''){
        toast.error('Error')
        return;
    }
    this.props.onSubmit(this.state.searchImg)
    this.setState({searchImg:''})
  
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            value={this.state.searchImg}
            onChange={this.handleNameChange}
            className={s.SearchForm_input}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
