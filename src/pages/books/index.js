import Card from "react-bootstrap/Card"
import  {Button}  from "react-bootstrap"
import Layout from "../../../components/Layout"
import Link from "next/link"
import { getBooks } from '../../../lib/book'

const Books = ({books}) => {
  return (
      <Layout>
            {books.map(book => (
               <Card key={book.bookName}>
                  <Card.Title>  {book.bookName} </Card.Title>
                  <Card.Text> {book.bookContent} </Card.Text>
                  <Link href='/'>
                        <Button> Back </Button>
                  </Link>
            </Card> 
            ))}
     
      </Layout>
  )
}

// lay du lieu kieu dong : du lieu phu thuoc vao moi lan request 
// van tao ra HTML tinh cho front-end, nen van tot cho SEO 
export const getStaticProps = async () => {
    const books = await getBooks()
    console.log(books)
    return {
        props: {
            books
        }
    }
} 

export default Books