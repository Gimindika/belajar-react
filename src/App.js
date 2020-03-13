import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";
import "./App.css";

const App = () => {
  const { error, data } = useQuery(queries);
  console.log(useQuery(queries).data);
  if (error) {
    console.log("error", error);
    return;
  }

  return (
    <div className="App">
      <ul>
        {data &&
          data.getBrandList.map(brand => {
            return <li key={brand.attribute_id}>{brand.name}</li>;
          })}
      </ul>
    </div>
  );
};

const queries = gql`
  query {
    getBrandList {
      name
      attribute_id
      logo
      sort_order
    }
  }
`;

export default App;
