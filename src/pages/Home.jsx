import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from '../store/slices/clientsProducts.slice';

const Home = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductsThunk())
  }, [])


    return (
        <div>
          <h1>este es mi home</h1>  
        </div>
    );
};

export default Home;