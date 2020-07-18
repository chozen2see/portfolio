import React from 'react';
import { FooterWrapper } from '../Styles/layout';

const Footer = (props) => {
  return (
    <FooterWrapper>
      <div>
        Email me:{' '}
        <a href={`mailto:${props.data.fields.email}`}>{props.data.fields.email}</a>
      </div>
      <div>
        <a
          href={props.data.fields.github}
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>{' '}
        |{' '}
        <a
          href={props.data.fields.linkedIn}
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
      </div>
    </FooterWrapper>
  )
}

export default Footer;