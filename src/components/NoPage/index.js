import { Link } from 'react-router-dom';

const NoPage = () => {
   return(
    <div>
    <h1>Página não encontrada</h1>

          <Link to="/home">Voltar para Home</Link>

  </div>
   )
}

export default NoPage;