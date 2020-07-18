// curly braces allow you to pulled named function directly from react library
import React, { useState, useEffect } from 'react';

// use this npm i @contentful/rich-text-react-renderer to render contentful rtf nodes as react component
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// npm i uuidv4 => use to get rid of key error
import { uuid } from 'uuidv4';

// npm i react-reveal --save  ==> USE FOR COMPONENT FADE EFFECTS
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import Layout from '../Layout';
import RichText from './RichText';
import ProjectThumbnails from './ProjectThumbnail';
import { getContentfulHomepage } from '../Queries/index';
import { GridContainer, PullQuote, Project } from '../Styles/layout';


// import styled component - import everything from type under label headings
import * as headings from '../Styles/type';


const HomepageSections = () => {
  // function that will let me update state
  // [name of state variable, function that will update state]
  // useState('initialvalue)
  const [data, setData] = useState({});

  // use async function to fetch api data using query function, the set state for data var
  const getData = async () => {
    const homepageData = await getContentfulHomepage();
    console.log(homepageData);
    setData(homepageData);
  };

  // use effect hook w/ cleanup -> life cycle method replaces ComponentDidMount/UnMount
  useEffect(() => {
    getData();
  }, []); // empty array says run on mount ONLY one time

  // check to see if data exists on an object
  if (Object.entries(data).length > 0) {
    return (
      <main>
        {
          data.fields.homepageSections.map((section, index) => {
            if (section.fields) {
              const { sectionTitle, textContent, projects } = section.fields;
              // console.log(textContent);
              return (
                <Fade bottom>
                  <section key={uuid()}>
                    <headings.HeaderTwo align="center">{sectionTitle}</headings.HeaderTwo>
                    <headings.ParagraphBase>
                      {textContent && <RichText content={textContent} />}
                    </headings.ParagraphBase>
                    {/* {documentToReactComponents(textContent)} */}
                    {projects &&
                      <GridContainer>
                        {projects.map((project, p) => {
                          return (
                            <Fade left>

                              <Project>
                                <ProjectThumbnails project={project} key={uuid()} />
                              </Project>
                            </Fade>
                          )
                        })}
                      </GridContainer>
                    }
                  </section>
                </Fade>
              )
            } else {
              return <div>Coming Soon!</div>
            }
          })
        }

        <PullQuote>
          <RichText content={data.fields.pullQuote} />
        </PullQuote>
      </main>

    );
  } else {
    return (
      <Layout>
        {/* make loading component */}
        <h1>Homepage Sections Coming Soon</h1>
      </Layout>
    );
  }
}

export default HomepageSections;