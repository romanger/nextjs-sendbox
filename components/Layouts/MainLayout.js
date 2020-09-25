import Head from "next/head";
import Link from "next/link";

export function MainLayout(props) {
    const {title, children} = props;
    const menu = [
        {text: "Home", link: "/"},
        {text: "About", link: "/about"},
        {text: "Blog", link: "/blog"},
    ];
    return (
        <>
            <Head>
                <title>{title || "Next try project"}</title>
            </Head>
            <header className="relative p-6 flex justify-between bg-gray-200 mb-4">
                <Link href="/"><a className=" logo">Next.Js Sendbox</a></Link>
                <nav>
                    <ul className="flex">
                        {
                            menu.map((item, index) => {
                                return (
                                    <li className="px-3" key={index}>
                                        <Link href={item.link}>
                                            <a>{item.text}</a>
                                        </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </nav>
            </header>
            <main className="container mx-auto px-4">
                {children}
            </main>
        </>
    )
}
