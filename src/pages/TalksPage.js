import { useState, useEffect } from 'react';
import Talks from '../components/Talks';
import { H1 } from '../components/headers';

const TalksPage = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('talks.json')
      .then((res) => res.json())
      .then((obj) => setData(obj));
  };

  useEffect(() => {
    getData();
  }, []);

  return !data || data.length === 0 ? <H1>Loading...</H1> : <Talks data={data} />;
};

export default TalksPage;
