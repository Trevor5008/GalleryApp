import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

// App components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';
import { apiKey } from './config';

// Preset data 
import { cats, dogs, computers } from './data/data';

class App extends Component {
  state = {
     images: [],
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
           text: query,
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
            loading: false
         })
     })
     .catch(err => console.log('There was an error fetching and retrieving data', err));
  }

  render() {
   return (
      <BrowserRouter>
       <div className="container">
          <SearchForm />
          <Nav />
          { this.state.loading 
            ? <h3> Loading... </h3>
            : <Switch>
                  <Route exact path="/" render={() => <Redirect to="/Cats"/>} />
                  <Route path="/Cats" render={() => <PhotoContainer data={cats} />} />
                  <Route path="/Dogs" render={() => <PhotoContainer data={dogs} />} />
                  <Route path="/Computers" render={() => <PhotoContainer data={computers} />} />
                  <Route path="*" component={NotFound} />
               </Switch>
          }
       </div>
      </BrowserRouter>
   );
  }
}

export default App;
