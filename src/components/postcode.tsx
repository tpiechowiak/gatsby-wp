import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
    language: string;
    children: any;
}

export const PostCode = ({language, children}: Props) => (
  <SyntaxHighlighter
    style={ghcolors}
    language={language}>
    {children}
  </SyntaxHighlighter>
);

export default PostCode;