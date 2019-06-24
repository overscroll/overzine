import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import Article from './Article';

const stories = storiesOf('Article', module);
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter());

const content = { content: { headline: 'hello'} };

stories
  .add('standard', () =>
      <Article data={content} /> 
    );