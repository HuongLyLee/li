import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import NavbarMenu from './NavbarMenu'

const Layout = ({ children }) => {
    return (
        <Container>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv='X-UA_Compatible' content="'IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title> My Next App </title>
            </Head>

            <header>
                <NavbarMenu />
            </header>

            <main> {children} </main>
        </Container>
    )
}

export default Layout