import React from 'react';
import ReactMarkdown from 'react-markdown';

import { H1, H2, H3, H4, H5 } from './headers';

const MarkdownParse = (props) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => <H1 {...props} />,
        h2: ({ node, ...props }) => <H2 {...props} />,
        h3: ({ node, ...props }) => <H3 {...props} />,
        h4: ({ node, ...props }) => <H4 {...props} />,
        h5: ({ node, ...props }) => <H5 {...props} />,
      }}
    >
      {props.children}
    </ReactMarkdown>
  );
};

export default MarkdownParse;
