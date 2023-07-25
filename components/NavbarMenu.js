import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

const NarbarMenu = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand> My Next App </Navbar.Brand>
            <Nav className='NarbarMenu__menu'>
                <Link href='/' passHref>
                    Home 
                </Link>
                <Link href='/posts' passHref>
                    Posts 
                </Link>
                <Link href='/about' passHref>
                    About
                </Link>

            </Nav>
        </Navbar>
    )
}
export default NarbarMenu