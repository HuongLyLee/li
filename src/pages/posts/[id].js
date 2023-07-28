import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Layout from '../../../components/Layout'
import { getPostByid, getPostIds } from '../../../lib/post'
import { useRouter } from 'next/router'


const Post = ({ post }) => {
    const router = useRouter()

    // Neu trang chua tao ra, isFallback cuar router === true 
    // va trang tam thoi sau day se duoc render

    if (router.isFallback) {
        return (
            <Spinner animation='border' role='status' variant='dark' >   
                <span className='sr-only'> LOADING... </span>
            </Spinner>
        )
    }

    // khi getStaticProps() chay xong lan dau tien 
    // cac lan sau thi trang so 6 ( vi du ) se duoc dua vao danh sach pre-render
    return (
        <Layout>
            <Card className='my-3 shadow'>
                <Card.Body>
                    <Card.Title> {post.title} </Card.Title>
                    <Card.Text> {post.body} </Card.Text>
                    <Link href='/posts'>
                        <Button> Back </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Layout>
    )
 } 

// dung getStaticPaths khi can lay du lieu tĩnh
// du lieu tinh con phu thuoc vap path params ( id ) 
// lay ra id can 
export const getStaticPaths = async() => {
    const paths = await getPostIds(5)
    console.log(paths)

    return {
        paths,
        // fallback: false // bat ky path nao k returned boi getStaticPaths se toi trang 404 
        fallback: true    // path nao k return ngay lap tuc se show trang tam thoi 
                          // => doi getStaticProps chay => return trang hoan chinh 
    }
}
 

export const getStaticProps = async ({params}) => {
    const post = await getPostById(params.id)

    return {
        props: {
            post
        },
        revalidate: 1
    }
}

export default Post