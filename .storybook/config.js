import { addDecorator, configure } from '@storybook/react';
import { addParameters } from '@storybook/react'; // or others
import { create, themes} from '@storybook/theming';

import '../src/index.css';
import '../src/components/styles.scss';
const req = require.context('../src', true, /.stories.js$/);

addParameters({
  options: {
    theme: create({
      base: 'dark',
      brandTitle: 'overzine',
      brandUrl: 'https://github.com/overscroll/overzine',
    }),
    isFullscreen: false,
    panelPosition: 'right',
    isToolshown: true,
  },
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);

