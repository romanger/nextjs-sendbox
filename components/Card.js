import Link from "next/link";

export function Card(props) {
    const {id, title, body} = props;
    return (
        <div className="card w-full md:w-1/2 lg:w-1/3 px-4 mb-8 pb-4">
            <div className="card-wrap bg-gray-100 p-4">
                <div className="card-content mb-4 ">
                    <h2 className="card-title text-2xl leading-7 pb-4">{title}</h2>
                    <p>{body}</p>
                </div>
                <Link href={`/blog/[id]`} as={`/blog/${id}`}>
                    <a className="text-indigo-600 hover:text-indigo-800">Read more...</a>
                </Link>
            </div>
        </div>
    )
}
