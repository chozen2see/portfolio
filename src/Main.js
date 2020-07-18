////////////////////////////////////
// Libraries / Helper Functions
////////////////////////////////////
import React, { useState, useEffect } from 'react';
import { getContentfulNav } from './Queries/index';

/////////////////////
// Components
/////////////////////
import HomepageSections from './Components/HomepageSections';
import Footer from './Components/Footer';

/////////////////////
// Styles
/////////////////////
import './Main.css';
import * as headings from './Styles/type';
import Layout from './Layout';

function Main() {
  let [data, setData] = useState({});

  // use async function to fetch api data using query function, the set state for data var
  const getData = async () => {
    const navData = await getContentfulNav();
    setData(navData);
  };

  // use effect hook w/ cleanup -> life cycle method replaces ComponentDidMount/UnMount
  useEffect(() => {
    getData();
  }, []);

  if (data.fields) {
    return (
      <Layout></Layout>

    );
  } else {
    return (
      <Layout>
        <h1>No data available.</h1>
      </Layout>
    );
  }
}

export default Main;