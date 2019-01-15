import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';

import Opener from './opener';

export const article = {
  id: '1',
  kicker: 'yooo',
  headline: 'Test Task',
  theme: 'default',
  backgroundColor: '#96D7CD',
  colorContrast: '#F46772',
  alignment: 'left',
  image: '/images/objects/mask.png'
};

const stories = storiesOf('opener', module);
stories.addDecorator(withKnobs);

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

stories.add('standard', () => 
    <Opener content={article} {...actions} />
   )
  .add('pngduotone-on-zine', () => <Opener content={{ ...article, 
    headline: 'Hello :)', 
    backgroundEffect: 'zine1', 
    backgroundColor: color('BackgroundColor', '#FEE3DE', ''), 
    backgroundColor2: color('BackgroundColor2', '#EAC6D3', ''), 
    imageEffect: 'pngduotone', 
    imageColor: '#00FFD1', 
    imageColor2: '#11174D' 
   }} {...actions} />)
  .add('png-on-zine', () => <Opener content={{ ...article, 
    backgroundColor: color('BackgroundColor', '#FEE3DE', ''), 
    backgroundColor2: color('BackgroundColor2', '#EAC6D3', ''), 

    backgroundEffect: 'zine1', 
  
  }} {...actions} />)
  .add('black', () => <Opener content={{ ...article, state: 'TASK_ARCHIVED', backgroundColor: '#232323', image: '/images/objects/photo.png' }} {...actions} />)
  .add('black2', () => <Opener content={{ ...article, state: 'TASK_ARCHIVED', backgroundColor: '#232323', backgroundColor2: '#C5C5C5',  image: '/images/objects/photo.png' }} {...actions} />);
