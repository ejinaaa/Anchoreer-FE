import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const resetStyles = {
  '*': {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section':
    {
      display: 'block',
    },
  body: {
    lineHeight: 1,
  },
  'ol, ul': {
    listStyle: 'none',
  },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: "''",
  },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
  },
};

const customConfig = defineConfig({
  globalCss: resetStyles,
});

export default createSystem(defaultConfig, customConfig);
