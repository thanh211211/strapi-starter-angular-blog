import gql from "graphql-tag";

const CATEGORY_ARTICLES_QUERY = gql`
query Category($id: ID! = 1) {
    category(id: $id) {
      data {
        id
        attributes {
          name
          articles {
            data {
              id
              attributes {
                title
                content
                publishedAt
                image {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                category {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
}  
`;

export default CATEGORY_ARTICLES_QUERY;
