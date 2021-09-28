import React from 'react';

const Photo = (props) => {
   const { id, server, secret, title } = props;
   return (
      <li>
         <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title}/>
      </li>
   )
};

export default Photo;