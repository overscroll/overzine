import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

import '../src/index.css';
import '../src/components/styles.scss';
const req = require.context('../src', true, /.stories.js$/);

addDecorator(withOptions({ name: 'overzine', downPanelInRight: true }));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}


configure(loadStories, module);
