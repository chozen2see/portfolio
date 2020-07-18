import React from 'react';
// npm i react-markdown
// import ReactMarkdown from 'react-markdown';
// npm i @contentful/rich-text-html-renderer
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const RichText = (props) => {
  return (
    <div>
      {/* <ReactMarkdown escapeHtml={false} source={documentToHtmlString(props.content)} /> */}
      <div>{documentToReactComponents(props.content)}</div>
    </div>
  )
}

export default RichText;