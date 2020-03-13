import gql from "graphql-tag";
import React from "react";
import { useQuery } from "react-apollo";

import "./Brands.css";

const Brands = () => {
  const { error, data } = useQuery(queries);
  console.log(useQuery(queries).data);
  if (error) {
    console.log("error", error);
    return <p>error : {error}</p>;
  }

  return (
    <ul>
      {data &&
        data.getBrandList.map(brand => {
          const { name, attribute_id, logo } = brand;
          return (
            <div key={attribute_id}>
              <li>
                <img src={logo} />
                <p>{name}</p>
              </li>
            </div>
          );
        })}
    </ul>
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

export default Brands;
