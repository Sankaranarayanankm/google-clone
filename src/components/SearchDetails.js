import React from "react";
import { useParams } from "react-router-dom";

const SearchDetails = () => {
  const params = useParams();
  const { searchId } = params;
console.log(searchId)
  return (
    <div>
      <h1>{searchId}</h1>
    </div>
  );
};

export default SearchDetails;
