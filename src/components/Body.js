import React, { useState, useEffect } from "react";
import Me from "./Me";
import {H1} from "./headers"

const Body = () => {
  const [data, setData] = useState({});

  const getData = () => {
    fetch("me.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((obj) => {
        setData(obj);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="body">
      {Object.keys(data).length === 0 ? (
        <H1>Loading...</H1>
      ) : (
        <>
          <Me data={data} />
        </>
      )}
    </div>
  );
};

export default Body;
