import {useEffect, useState} from "react";
import Router, {useRouter} from "next/router";
import {MainLayout} from "../../components/Layouts/MainLayout";

export default function Post({post: serverPost}) {
    const router = useRouter();
    const [post, setPost] = useState(serverPost);

    useEffect(() => {
        async function load() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${router.query.id}`);
            const data = await response.json();
            setPost(data);
        }

        if (!serverPost) {
            load();
        }
    }, []);

    if (!post) {
        return (
            <MainLayout>
                <p>Loading ..</p>
            </MainLayout>)
    }
    return (
        <MainLayout title={post.title + 'Next.js try project'}>
            <h1 className="main-title">{post.title}</h1>
            <p> {post.body}</p>
            <button onClick={() => Router.back()} className="btn waves-effect waves-light">Go back</button>
        </MainLayout>
    )
}

Post.getInitialProps = async ({query, req}) => {
    if (!req) {
        return {post: null}
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    const post = await response.json();
    return {post}
};
