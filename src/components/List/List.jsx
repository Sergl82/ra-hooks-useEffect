/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../useFetch/useFetch';
import './List.css';

function List({ selectUser }) {
   const [data, isLoading, error] = useFetch(
      `${process.env.REACT_APP_DATA_URL}users.json`
   );

   return (
      <div className="List">
         {isLoading && <div> Загрузка... </div>}
         {error && <div> {error} </div>}
         {data && (
            <ul className="List-wrapper">
               {data.map((item) => (
                  <li
                     className="List__item"
                     key={item.id}
                     onClick={() => selectUser(item)}
                  >
                     {item.name}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}

List.propTypes = {
   selectUser: PropTypes.func.isRequired,
};
export default List;
