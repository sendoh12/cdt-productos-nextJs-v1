import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { Loader } from '@src/componentes/loader/Loader';
import SearchProducto from './SearchProduct';

const Home: NextPage = () => {
  const [loader, setLoader] = useState<boolean>(false);

  const activeWelcome = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 300);
  };

  useEffect(() => {
    activeWelcome();
  }, []);

  return (
    <div data-testid="home">
      <Loader activateLoader={loader} />
      <SearchProducto />
    </div>
  );
};

export default Home;
