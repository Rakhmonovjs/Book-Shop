import React from 'react';
import Productcard from './Productcard';
import "./Productcard.css";

const Productlist = ({data}) => {
  return (
    <>
      <div className='list'>
          {data.map((item) => (
            <Productcard item={item} />
          ))}
          {/* <Productcard/> */}
        </div>
    </>
  );
};

export default Productlist