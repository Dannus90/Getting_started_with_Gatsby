import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import img from "../images/image-2.jpg";
import Image from "gatsby-image";

const getImages = graphql`
    {
        fixed: file(relativePath: { eq: "image-3.jpg" }) {
            childImageSharp {
                fixed(width: 300, height: 400) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        fluid: file(relativePath: { eq: "image-1.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
        example: file(relativePath: { eq: "image-3.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
    }
`;

const Images = () => {
    const data = useStaticQuery(getImages);
    console.log(data);
    return (
        <section className="images">
            <article className="single-image">
                <h3>Basic image</h3>
                <img src={img} width="100%" />
            </article>
            <article className="single-image">
                <h3>Fixed Image/blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed} />
            </article>
            <article className="single-image">
                <h3>Fluid image/svg</h3>
                <Image fluid={data.fluid.childImageSharp.fluid} />
                <div className="small">
                    <Image fluid={data.fluid.childImageSharp.fluid} />
                </div>
                <Image fluid={data.example.childImageSharp.fluid} />
            </article>
        </section>
    );
};

export default Images;
