import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

import Poster from './Poster';

export const article = {
  id: '1',
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

stories
  .add('standard', () =>
      <Poster content={article} {...actions} />
    )
  .add('all-properties-knobs', () =>
    <Poster content={{ 
    headline: text('headline', 'Change Me!', 'text'),
    kicker: text('kicker', 'Kicker', 'text'),
    alignment: select('alignment', ['left', 'center'], 'left', 'text'),
    background: text('background', '/images/pattern/zine1b.jpg', 'background'),
    backgroundEffect: select('backgroundEffect', ['duotone', 'duotone-hard'],'duotone-hard', 'background'),
    backgroundColor: color('BackgroundColor', '#FEE3DE', 'background'),
    backgroundColor2: color('BackgroundColor2', '#EAC6D3', 'background'),
    image: text('image', '/images/objects/password.png', 'image'),
    imageEffect:  select('imageEffect', ['', 'duotone'], '', 'image'),
    imageColor: color('imageColor', '#00FFD1', 'image'),
    imageColor2: color('imageColor2', '#11174D', 'image'),
    }}  />)
  .add('png-on-zine', () => 
    <Poster content={{ ...article,
    backgroundColor: color('BackgroundColor', '#FEE3DE', ''),
    backgroundColor2: color('BackgroundColor2', '#EAC6D3', ''),
    background: 'zine1',
    backgroundEffect: 'duotone',
    }} {...actions} />)
  .add('pngduotone-on-zine', () =>
    <Poster content={{ ...article,
    headline: 'select',
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
.add('bg-with-gif', () =>
    <Poster content={{ ...article,
      headline: 'Hello :)',
      background: 'https://66.media.tumblr.com/f5b38458c8e1908ece9e6d85bb9d5949/tumblr_nliyi8SsO01qc0s10o1_500.gif',
      backgroundColor: color('BackgroundColor', '#00091F', ''),
      backgroundColor2: color('BackgroundColor2', '#DE0855', ''),
      colorContrast: color('contrast', '#FEFF20'),
      image: '',
    }} {...actions} />)
.add('bg-with-gif-duotone', () =>
<Poster content={{ ...article,
  headline: 'Hello :)',
  backgroundEffect: 'duotone',
  background: 'https://66.media.tumblr.com/f5b38458c8e1908ece9e6d85bb9d5949/tumblr_nliyi8SsO01qc0s10o1_500.gif',
  backgroundColor: color('BackgroundColor', '#00091F', ''),
  backgroundColor2: color('BackgroundColor2', '#DE0855', ''),
  colorContrast: color('contrast', '#FEFF20'),
  image: '',
}} {...actions} />)
  .add('black', () => <Poster content={{ ...article, state: 'TASK_ARCHIVED', backgroundColor: '#232323', image: '/images/objects/photo.png' }} {...actions} />)
  .add('black2', () => <Poster content={{ ...article, state: 'TASK_ARCHIVED', backgroundColor: '#232323', backgroundColor2: '#C5C5C5',  image: '/images/objects/photo.png' }} {...actions} />)
  .add('overscroll-gif', () => <Poster content={{ ...article, state: 'TASK_ARCHIVED', backgroundColor: color('BackgroundColor', '#003576', ''), colorContrast: color('contrast', '#50E0E3'), backgroundColor2: '#003576',  image: '/images/objects/password.png' }} {...actions} />)
  .add('external-gif', () => <Poster content={{ ...article, state: 'TASK_ARCHIVED', backgroundColor: color('BackgroundColor', '#4A90E2', ''), colorContrast: color('contrast', '#FEFF20'), backgroundColor2: '#C5C5C5',  image: 'https://media.giphy.com/media/9tXsPh8IcW68X23udg/giphy.gif' }} {...actions} />);

