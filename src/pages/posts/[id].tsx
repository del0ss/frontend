import {Inter} from 'next/font/google'
import {withLayout} from "../../../../frontend/src/components/Layout/Layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {Post} from "../../../types/post";
import axios from "axios";
import {ParsedUrlQuery} from "querystring";


function Post({post}: PostProps) {
    return (
        <>
            {post.id}
        </>
    );
}


export default withLayout(Post)

export const getStaticPaths: GetStaticPaths = async () => {
    const {data: posts} = await axios.get<Post[]>(process.env.NEXT_PUBLIC_DOMAIN + "/posts")
    return {
        paths: posts.map(p => "/posts/" + p.id),
        fallback: true
    }
}
export const getStaticProps: GetStaticProps<PostProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        }
    }
    const {data: post} = await axios.get<Post>(process.env.NEXT_PUBLIC_DOMAIN + "/posts/" + params.id)
    return {
        props: {
            post
        }
    }
}

interface PostProps extends Record<string, unknown> {
    post: Post
}
