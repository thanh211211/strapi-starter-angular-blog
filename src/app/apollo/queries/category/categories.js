import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
query Categories {
  categories {
    	data {
        id,
        attributes { name }
      }
    }
  }
`;

export default CATEGORIES_QUERY;
