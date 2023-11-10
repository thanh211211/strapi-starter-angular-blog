import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
query Articles{
    articles{
      data{ 
        id, 
        attributes{ 
          title, 
          content,
          publishedAt,
          image {
            data{id, 
              attributes{url}
            }
          },
          category{
            data{ 
                id,
              attributes{
                name
              }
            }
          }
        }    
      }
    }
  }
`;

export default ARTICLES_QUERY;
