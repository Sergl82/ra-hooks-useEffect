import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../useFetch/useFetch';
import './Details.css';

function Details({ info }) {
   const [data, isLoading, error] = useFetch(
      `${process.env.REACT_APP_DATA_URL}${info.id}.json`
   );

   return (
      <div className="Details">
         {isLoading && <div> Загрузка... </div>}
         {error && <div> {error} </div>}
         {data && !isLoading && (
            <div>
               <img
                  className="Details__avatar"
                  height="300px"
                  alt={data.name}
                  src={data.avatar}
               />
               <div className="details-text">
                  <div className="details-text-item details-text-title">
                     {data.name}
                  </div>
                  <div className="details-text-item">
                     City: {data.details.city}
                  </div>
                  <div className="details-text-item">
                     Company: {data.details.company}
                  </div>
                  <div className="details-text-item">
                     Position: {data.details.position}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

Details.propTypes = {
   info: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
   }).isRequired,
};
export default Details;
