import React from 'react';
import { storiesOf,addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import Article from './Article';
import ArticleSingleView from './ArticleSingleView';

const stories = storiesOf('Article', module);
stories.addDecorator(withKnobs);
stories.addDecorator(StoryRouter());

const onAnimationComplete = () => {
  console.log('onAnimationComplete');
};
const newViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1250px',
      height: '950px',
    },
  },
};

const articleStyle = {
  width: "auto", 
  height: "auto",  
  opacity: 1, 
  left: "auto",
  transform: "none",
  transformOrigin: "none"
};

stories
  .addParameters({ viewport: { defaultViewport: 'iphone6', viewports: { ...INITIAL_VIEWPORTS, ...newViewports,} }})
  .add('standard', () => <ArticleSingleView data={{
    headline: 'Nicht ohne meinen (Passwort)-Manager',
    kicker: 'yo',
    colorBackground: color('BackgroundColor', '#003576', ''),
    colorContrast: color('contrast', '#50E0E3'),
    colorText: color('text', '#ffffff'),
    backgroundColor2: '#003576',
    poster: {
      image: '/images/objects/password.png',
    },
  }} 
  onAnimationComplete={onAnimationComplete}
  style={articleStyle}
  />);
