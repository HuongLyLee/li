import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

const NarbarMenu = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand> My Next App </Navbar.Brand>
            
            <Nav className='NarbarMenu__menu'>
                
                <Link href='/posts' passHref>
                    Posts 
                </Link>
                <Link href='/about' passHref>
                    About
                </Link>
                <Link href='/jokes/random' passHref>
                    Ịokes
                </Link>
                <Link href='/' passHref>
                    Home 
                </Link>
            </Nav>
        </Navbar>
    )
}
export default NarbarMenu