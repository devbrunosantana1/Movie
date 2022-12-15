import { Link } from "react-router-dom"
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi"

export function Navbar() {
    return (
        <nav className='navbar'>
        <h2>
            <Link to="/"><BiCameraMovie />Movie</Link>
        </h2>
        <form>
            <input type="text" placeholder="Busque um filme" />
            <button type="submit">
                <BiSearchAlt2/>
            </button>
        </form>
        </nav>
    )
}