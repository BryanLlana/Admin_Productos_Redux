import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <Link to='/'><h1>ProductosApp</h1></Link>
        <Link
          to='/nuevo-producto'
          className='btn btn-danger nuevo-post d-block d-md-inline-block'
        >Agregar producto &#43;
        </Link>
      </div>
    </nav>
  )
}

export default Header