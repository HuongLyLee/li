import axios from 'axios'

export const getPosts = async() => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getPostsIds = async () => {
    const posts = await getPosts()

    //return : de tra ra id ( nhung post id can lay ve )
    // [
    //     {
    //         params: {
    //             id: '1'
    //         }
    //     },
    //     {
    //         params: {
    //             id: '2'
    //         }
    //     },
    //     ...
    // ]

    return posts.map(post => ({
        params: {
            id: `${post.id}`
        }
    }))

    // return posts.,map(post => `/posts/${post.id}`) : cach viet khac 
}

export const getPostByid = async id => {
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response.data 
    }catch (error) {
        conssole.log(error)
    }
}