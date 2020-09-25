import Link from "next/link";

export function Card(props) {
    const {id, title, body} = props;
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title">{title}</span>
                <p>{body}</p>
            </div>
            <Link href={`/blog/[id]`} as={`/blog/${id}`}>
                <a>Read more...</a>
            </Link>
        </div>
    )
}
