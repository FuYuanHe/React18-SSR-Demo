import React from "react";
import { Helmet } from "react-helmet";

function Home() {
    return (
        <>
            <Helmet>
                <title>我是标题</title>
                <meta name="desccript" content="我是首页的描述"></meta>
            </Helmet>
            <div>
                Home页面
            </div>
        </>
    )
}
export default Home