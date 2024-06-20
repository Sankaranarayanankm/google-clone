import React, { useState, useEffect } from "react";
import key from "../keys";

const CONTEXT_KEY = "b2f3656c84e3a4914";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
