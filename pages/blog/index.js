import {MainLayout} from "../../components/Layouts/MainLayout";
import {Card} from "../../components/Card";

export default function Blog({posts}) {

    return (
        <MainLayout title={'Blog | Next try project'}>
            <div className="container">
                <h1>Blog</h1>
                <div className="row">
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
            </div>

        </MainLayout>
    )
};

Blog.getInitialProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return {posts}
};
