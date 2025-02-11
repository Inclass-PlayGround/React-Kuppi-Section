import {Link} from 'react-router-dom';
const NavBar = () => {
  return (
    <>
        <nav className='w-full h-[5rem] bg-amber-400 '>
            <ul className='flex justify-end items-center gap-5 mx-10 text-center'>
                <Link to="/">DashBoard</Link>
                <Link to="/customer">Customer</Link>
                <Link to="/order">Ordaer</Link>
            </ul>
        </nav>
    </>
  )
}

export default NavBar