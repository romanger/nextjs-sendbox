import {useEffect, useState} from "react";
import {MainLayout} from "../../components/Layouts/MainLayout";
import {Card} from "../../components/Card";

export default function Blog({posts: serverPosts}) {
    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        async function load() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data = await response.json();
            setPosts(data);
        }

        if (!serverPosts) {
            load();
        }
    }, []);

    if (!posts) {
        return (
            <MainLayout>
                <p>Loading ..</p>
            </MainLayout>)
    }

    return (
        <MainLayout title={'Blog | Next try project'}>
            <h1 className="main-title mb-4">Blog</h1>

            <div className="posts-wrap flex flex-wrap -mx-4">
            {posts.map((post) => {
                return (
                    <Card
                        id={post.id}
                        key={post.id}
                        title={post.title}
                        body={post.body}/>
                )
            })}
            </div>
        </MainLayout>
    )
};

Blog.getInitialProps = async ({req}) => {
    if (!req) {
        return {posts: null}
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return {posts}
};
