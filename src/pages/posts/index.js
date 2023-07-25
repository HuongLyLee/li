import Card from 'react-bootstrap/Card'
import Layout from '../../../components/Layout'
import { getPosts } from '../../../lib/post'

const Posts = (props) => {
  return (
    <Layout>
         {props.posts?.map(post => (
            <Card key={post?.id}>
                <Card.Body>
                    <Card.Title> {post?.Title} </Card.Title>
                    <Card.Text>  {post?.body}  </Card.Text>
                </Card.Body>
            </Card>
         ))}
    </Layout>
  )
}

// get static data from backend /db /api
// lay du lieu tinh 
export const getStaticProps = async() => {
    const posts = await getPosts()
    
    return {
        props: {
            posts
        }
    }
}
export default Posts