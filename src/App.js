// curly braces allow you to pulled named function directly from react library
import React, { useState, useEffect } from 'react';
import './App.css';

import Layout from './Layout';
import HomepageSections from './Components/HomepageSections';
import Footer from './Components/Footer';
import { getContentfulNav } from './Queries/index';
// import styled component - import everything from type under label headings
import * as headings from './Styles/type';

function App() {
  // function that will let me update state
  // [name of state variable, function that will update state]
  // useState('initialvalue)
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
  // console.log(data);

  if (data.fields) {
    return (
      <Layout>
        <headings.HeaderOne>{data.fields.websiteTitle}</headings.HeaderOne>
        <headings.HeaderTwo larger>
          {data.fields.websiteSubtitle}
        </headings.HeaderTwo>
        <headings.BannerImage>
          <img
            src={data.fields.bannerImage.fields.file.url}
            alt={data.fields.bannerImage.fields.title}
          />
        </headings.BannerImage>
        <HomepageSections />
        <Footer data={data} />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1>No data available.</h1>
      </Layout>
    );
  }
}

export default App;
