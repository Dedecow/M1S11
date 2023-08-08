import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <> 
    <p>Não foi encontrada a página solicitada.</p>

    <button>
      <Link to = "/"> Inicio </Link>
    </button>
    </>
   
  );
}
export { NotFound };
