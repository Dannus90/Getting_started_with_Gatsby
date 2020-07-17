import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>This is our blog page</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Inventore dolorum similique amet impedit harum vero quisquam
                    corrupti? Officia, aut quae asperiores in rerum consequuntur
                    temporibus!
                </p>
            </div>
        </Layout>
    )
}

export default blog
