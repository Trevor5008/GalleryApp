import axios from 'axios';
import { apiKey } from '../config';

const presetCategories = ['cats', 'dogs', 'computers'];

let cats = {}, dogs = {}, computers = {};

const searchImages = query => {
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
      const data = res.data.photos.photo;
      query === 'cats' 
         ? cats = data 
         : query === 'dogs' 
         ? dogs = data 
         : computers = data;
   })
   .catch(err => console.log('There was an error fetching and retrieving data', err));
}

presetCategories.forEach( category => searchImages(category));

export { cats, dogs, computers };