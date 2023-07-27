
import Link from 'next/link'
import Layout from '../../components/Layout'
// import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function Home() {
  return (
    <Layout>
      {/* <Jumbotron> */}

      <div className="jumbotron">
        <h1> My Next App </h1>
        <p>
          This is my Next.Js App
        </p>
        <p>
          <Link href='/posts'>
            <Button variant="primary"> Posts </Button>
          </Link>
        </p>
      </div>

      {/* </Jumbotron> */}

    </Layout>
  )
}
