import Router from "next/router";
import {MainLayout} from "../components/Layouts/MainLayout";

export default function About() {
    return (
        <MainLayout title={'About page | Next try project'}>
            <div className="container">
                <h1>About page</h1>
                <button onClick={() => Router.back()} className="btn waves-effect waves-light"> Go back </button>
            </div>
        </MainLayout>
    )
}
