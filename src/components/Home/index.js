import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>

            <Link to="/Result">Resultado</Link>
 
    </div>
  );
}

export default Home;
