import React from "react";
import { graphql } from "gatsby";
import ArticlesComponent from "../../components/articles";
import Layout from "../../components/layout";

export const query = graphql`
  query Category($slug: String!) {
    articles: allStrapiArticle(
      filter: { status: { eq: "published" }, category: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          slug
          title
          publishedAt
          category {
            name
          }
          image {
            childImageSharp {
              fixed(width: 660, height: 400) {
                src
              }
            }
          }
          author {
            name
            picture {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    category: strapiCategory(slug: { eq: $slug }) {
      name
    }
    strapiHomepage{
      footer{
        content
      }
    }
  }
`;

const Category = ({ data }) => {
  const articles = data.articles.edges;
  const category = data.category.name;
  const seo = {
    metaTitle: category,
    metaDescription: `All ${category} articles`,
  };

  const footer = data.strapiHomepage.footer;

  return (
    <Layout seo={seo} footer={footer}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category}</h1>
          { articles.length <= 0 ? 
          <div style={{marginTop: '40px'}}> 
            <h2> No articles published in this section </h2>
          </div>:
            <ArticlesComponent articles={articles} /> }
        </div>
      </div>
    </Layout>
  );
};

export default Category;
