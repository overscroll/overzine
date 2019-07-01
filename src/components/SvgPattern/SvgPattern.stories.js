import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, color } from '@storybook/addon-knobs';

import SvgPattern from './SvgPattern';

const stories = storiesOf('SvgPattern', module);
stories.addDecorator(withKnobs);

stories
  .add('standard', () => (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <SvgPattern
        width={number('width', 19, {
          range: true, min: 2, max: 40, step: 1,
        }, 'YES')}
        space={number('space', 15, {
          range: true, min: 2, max: 40, step: 1,
        }, 'YES')}
        rotate={number('rotate', 15, {}, 'YES')}
        color={color('color', '#DAA6B5', 'YES')}
        backgroundColor={color('backgroundColor', '#F1D9D9', 'YES')} />
      </defs>
      <rect width="200" height="200" fill="url(#dots)" />
      </svg>
  ));
