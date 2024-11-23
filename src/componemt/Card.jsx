import React from 'react'
import PropTypes from 'prop-types'
import Loader from './Loader'

const Card = ({data, loading }) => {
  return (
    <div className="bg-[#323a49] w-[50%] min-w-96 min-h-40 rounded-md mx-auto mt-16 p-5">
        {loading ? (
            <Loader />
        ) : (
            <div>
          <h5 className="text">ADVICE #117</h5>
         <h1>{data.id}</h1>
         <p className="ron">{data.advice}</p> 
         <img className="race" src={"./src/assets/images/pattern-divider-desktop.svg"} alt="" />
  
            </div>
        )}
      </div>
  );
};

export default Card;
