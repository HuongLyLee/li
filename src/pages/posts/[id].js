import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Layout from '../../../components/Layout'
import { getPostByid, getPostById } from '../../../lib/post'


const Post = ({ post }) => {
    return (
        <layout>
            <Card className='my-3 shadow'>
                <Card.Body>
                    <Card.Title> {post.title} </Card.Title>
                    <Card.texxt> {post.body} </Card.texxt>
                    <Link href='./posts'>
                        <Button> Back </Button>
                    </Link>
                </Card.Body>
            </Card>
        </layout>
    )
 } 

// dung getStaticPaths khi can lay du lieu tĩnh
// du lieu tinh con phu thuoc vap path pấm ( id ) 
// lay ra id can 
export const getStaticPaths = async() => {
    const paths = await getPostsIds()
    console.log(paths)

    return {
        paths,
        fallback: false // bat ky path nao k returned boi getStaticPaths se toi trang 404 
    }
}


export const getStaticProps = async ({params}) => {
    const post = await getPostByid(params.id)

    return {
        props: {
            post
        }
    }
}

export default Post