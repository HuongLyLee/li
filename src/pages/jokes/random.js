import Card from "react-bootstrap/Card"
import { getRandomJoke } from "../../../lib/joke"
import  {Button}  from "react-bootstrap"
import Layout from "../../../components/Layout"
import Link from "next/link"

const RandomPage = ({joke}) => {
  return (
    <Layout>
        <Card>
            <Card.Title> Here's your random joke for today. </Card.Title>
            <Card.Text> {joke?.value} </Card.Text>
            <Link href='/'>
                <Button> Back </Button>
            </Link>
        </Card>
    </Layout>
  )
}

// lay du lieu kieu dong : du liue phu thuoc vao moi lan request 
// van tao ra HTML tinh cho front-end, nen van tot cho SEO 
export const getServerSideProps = async () => {
    const joke = await getRandomJoke()
    return {
        props: {
            joke
        }
    }
} 

export default RandomPage