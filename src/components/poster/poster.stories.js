import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';

import Poster from './poster';

export const article = {
  id: '1',
  kicker: 'yooo',
  headline: 'Test Task',
  theme: 'default',
  backgroundColor: '#96D7CD',
  colorContrast: '#F46772',
  alignment: 'left',
  image: '/images/objects/mask.png',
  imageColor: '#00FFD1',
  imageColor2: '#11174D'
};

const stories = storiesOf('Poster', module);
stories.addDecorator(withKnobs);

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

stories.add('standard', () =>
    <Poster content={article} {...actions} />
   )
  .add('png-on-zine', () => <Poster content={{ ...article,
    backgroundColor: color('BackgroundColor', '#FEE3DE', ''),
    backgroundColor2: color('BackgroundColor2', '#EAC6D3', ''),
    background: 'zine1',
    backgroundEffect: 'duotone',

  }} {...actions} />)
  .add('pngduotone-on-zine', () =>
  <Poster content={{ ...article,
    headline: 'Hello :)',
    background: 'zine1',
    backgroundEffect: 'duotone-hard',
    backgroundColor: color('BackgroundColor', '#FEE3DE', ''),
    backgroundColor2: color('BackgroundColor2', '#EAC6D3', ''),
    imageEffect: 'duotone',
    imageColor: '#00FFD1',
    imageColor2: '#11174D'
 }} {...actions} />)
 .add('bg1', () =>
 <Poster content={{ ...article,
   headline: 'Hello :)',
   background: '/images/eyes.jpg',
   backgroundColor: color('BackgroundColor', '#FEE3DE', ''),
   image: '',
}} {...actions} />)
.add('bg1-duotone', () =>
<Poster content={{ ...article,
  headline: 'Hello :)',
  background: '/images/eyes.jpg',
  backgroundEffect: 'duotone',
  backgroundColor: color('BackgroundColor', '#F6F906', ''),
  backgroundColor2: color('BackgroundColor2', '#DE0855', ''),
  image: '',
}} {...actions} />)
.add('bg2', () =>
<Poster content={{ ...article,
  headline: 'Hello :)',
  background: '/images/snapchat.jpg',
  backgroundColor: color('BackgroundColor', '#00091F', ''),
  colorContrast: color('contrast', '#FEFF20'),
  image: '',
}} {...actions} />)
  .add('black', () => <Poster content={{ ...article, state: 'TASK_ARCHIVED', backgroundColor: '#232323', image: '/images/objects/photo.png' }} {...actions} />)
  .add('black2', () => <Poster content={{ ...article, state: 'TASK_ARCHIVED', backgroundColor: '#232323', backgroundColor2: '#C5C5C5',  image: '/images/objects/photo.png' }} {...actions} />)
  .add('overscroll-gif', () => <Poster content={{ ...article, state: 'TASK_ARCHIVED', backgroundColor: color('BackgroundColor', '#4A90E2', ''), colorContrast: color('contrast', '#FEFF20'), backgroundColor2: '#C5C5C5',  image: 'https://media.giphy.com/media/2wgWxPbZ3WV2RA8257/giphy.gif' }} {...actions} />)
  .add('external-gif', () => <Poster content={{ ...article, state: 'TASK_ARCHIVED', backgroundColor: color('BackgroundColor', '#4A90E2', ''), colorContrast: color('contrast', '#FEFF20'), backgroundColor2: '#C5C5C5',  image: 'https://media.giphy.com/media/9tXsPh8IcW68X23udg/giphy.gif' }} {...actions} />);

