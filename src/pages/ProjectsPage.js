import React, { useState, useEffect } from "react";
import Projects from "../components/Projects";

const ProjectsPage = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("projects.json")
      .then((res) => {
        return res.json();
      })
      .then((obj) => {
        setData(obj);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !data || data.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <Projects data={data} />
  );
};

export default ProjectsPage;
