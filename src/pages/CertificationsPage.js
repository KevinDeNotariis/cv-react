import { useState, useEffect } from 'react';
import Certifications from '../components/Certifications';

const CertificationsPage = () => {
  const [data, setData] = useState({});

  const getData = () => {
    fetch('certifications.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((obj) => setData(obj));
  };

  useEffect(() => {
    getData();
  }, []);

  return <Certifications data={data} />;
};

export default CertificationsPage;
