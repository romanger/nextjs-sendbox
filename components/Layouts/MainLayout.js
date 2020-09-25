import Head from "next/head";
import Link from "next/link";

export function MainLayout(props) {
    const {title, children} = props;
    return (
        <>
            <Head>
                <title>{title || "Next try project"}</title>
            </Head>
            <header>
                <nav>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="/about"><a>About</a></Link></li>
                        <li><Link href="/blog"><a>Posts</a></Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
