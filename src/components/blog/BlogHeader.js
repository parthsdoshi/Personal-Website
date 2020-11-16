import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import ReactMarkdown from "react-markdown";

const BlogHeader = () => {
    const data = useStaticQuery(graphql`
        query {
            strapiBlog {
                title
                blogHeader
            }
        }
    `)

    return (
        <section class="hero is-dark is-bold box">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        {data.strapiBlog.title}
                    </h1>
                    <h2 class="subtitle">
                        <ReactMarkdown>
                            {data.strapiBlog.blogHeader}
                        </ReactMarkdown>
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default BlogHeader