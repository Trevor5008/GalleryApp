import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

// App components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import FourZeroFour from './components/FourZeroFour';

import apiKey from './config';

// Preset data 
import { cats, dogs, computers } from './data/data';

class App extends Component {
  state = {
     images: [],
     title: '',
     loading: true
  }

  componentDidMount() {
   // fetch on initial load prevents 
   // having to refresh page to get data
   this.performSearch();
  }

  performSearch = (query = 'ducks') => {
     this.setState({ loading: true });
     axios.get('https://www.flickr.com/services/rest', {
        params: {
           method: 'flickr.photos.search',
           tags: query,
           api_key: apiKey,
           per_page: 24,
           format: 'json',
           nojsoncallback: 1
        }
     })
     .then(res => {
         let data = res.data.photos.photo;
         this.setState({
            images: data,
            title: query,
            loading: false
         })
     })
     .catch(err => console.log('There was an error fetching and retrieving data', err));
  }

  render() {
   return (
      <BrowserRouter basename="/GalleryApp">
       <div className="container">
          <SearchForm onSearch={this.performSearch}/>
          <Nav />
          { this.state.loading 
            ? <h3 id="loading"> Loading... </h3>
            : <Switch>
                  <Route exact path="/" render={() => <Redirect to="/Cats"/>} />
                  <Route path="/Cats" render={() => <PhotoContainer title="Cat" data={cats} />} />
                  <Route path="/Dogs" render={() => <PhotoContainer title="Dog" data={dogs} />} />
                  <Route path="/Computers" render={() => <PhotoContainer title="Computer" data={computers} />} />
                  <Route path="/search/:term" render={() => <PhotoContainer title={this.state.title} data={this.state.images} />} />
                  <Route path="*" component={FourZeroFour} />
               </Switch>
          }
       </div>
      </BrowserRouter>
   );
  }
}

export default App;
