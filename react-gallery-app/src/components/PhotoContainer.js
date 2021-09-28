import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {
   render() {
      const results = this.props.data;
      let photos;
      if (results.length > 0) {
         photos = results.map( (photo, idx) => {
            return <Photo 
                        key={idx.toString()}
                        id={photo.id}
                        server={photo.server}
                        secret={photo.secret}
                        title={photo.title}
                     />
         }); 
      } else {
         photos = <NotFound />
      }
      // Remove pluralization
      let title = this.props.title.replace(/s$/, '');

      return (
         <div className="photo-container">
            <h2>{title} Gifs</h2>
            <ul>
               {photos}
            </ul>
         </div>
      )
   }
}

export default PhotoContainer;