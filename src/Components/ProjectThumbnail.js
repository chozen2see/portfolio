import React from 'react';
import RichText from './RichText';
// use to get rid of key warnings
import { uuid } from 'uuidv4';
import { HeaderThree, SmallFlex } from '../Styles/type';

const ProjectThumbnails = (props) => {

  return (
    <div>

      <HeaderThree>
        <a target="_blank" rel="noopener noreferrer" href={props.project.fields.projectLink}>{props.project.fields.title}</a>
      </HeaderThree>

      <img src={props.project.fields.thumbnail.fields.file.url}
        alt={props.project.fields.thumbnail.fields.title} />

      <RichText content={props.project.fields.description} />

      <SmallFlex>
        {props.project.fields.technologies.map((tech) => <div key={uuid()}>{tech}</div>)}
      </SmallFlex>

    </div>
  );

}

export default ProjectThumbnails;