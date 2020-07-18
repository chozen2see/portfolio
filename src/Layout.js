import React from 'react';
import { LayoutWrapper } from './Styles/layout';

// Higher Order functional component must start with uppercase letter

// functional components do not use "this" props are passed as arguments that we will wrap this component around
const Layout = (props) => {
  return (
    <LayoutWrapper>
      {props.children}
    </LayoutWrapper>
  )
}

export default Layout;