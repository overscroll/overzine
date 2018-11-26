import { configure } from '@storybook/react';
import '../src/index.css';
import '../src/components/styles.scss';
const req = require.context('../src', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
