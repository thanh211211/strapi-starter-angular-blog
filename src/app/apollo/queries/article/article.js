import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
query Articles($id: ID! = 1) {
  article(id: $id) {
      data {
        id, 
        attributes { 
          title, 
          content,
          publishedAt,
          image {
            data {
              id, 
              attributes { url }
            }
          },
          category {
            data { 
              id,
              attributes{ name }
            }
          }
        }    
      }
    }
  }
`;

export default ARTICLE_QUERY;
