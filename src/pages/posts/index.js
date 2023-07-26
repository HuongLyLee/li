import Card from 'react-bootstrap/Card'
import Layout from '../../../components/Layout'
import { getPosts } from '../../../lib/post'
import Link from 'next/link'


const Posts = (props) => {
  return (
    <Layout>
         {props.posts?.map(post => (
            <Card key={post?.id}> 
                <Card.Body>
                    <Card.Title> {post?.Title} </Card.Title>
                    <Card.Text>  {post?.body}  </Card.Text>
                    <Link href={`/posts/${post.id}`} passHref> 
                        <Card.Link> See more </Card.Link>
                    </Link>
                </Card.Body>
            </Card>
         ))}
    </Layout>
  )
}

// get static data from backend /db /api
// lay du lieu tĩnh
export const getStaticProps = async() => {
    const posts = await getPosts()
    
    return {
        props: {
            posts
        }
    }
}
export default Posts