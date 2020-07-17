import React from "react";
import Header from "../examples/Header";
import HeaderStatic from "../examples/HeaderStatic";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const examples = ({ data }) => {
    const {
        site: {
            info: { author },
        },
    } = data;
    return (
        <Layout>
            <p>Hello from examples page</p>
            <Header />
            <HeaderStatic />
            <h5>{author}</h5>
        </Layout>
    );
};

export const data = graphql`
    query MyQuery {
        site {
            info: siteMetadata {
                person {
                    name
                    age
                }
                title
                description
                data
                author
            }
        }
    }
`;

export default examples;
