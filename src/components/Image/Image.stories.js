import React from 'react';
import { storiesOf,addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

import Image from './Image';

const stories = storiesOf('Image', module);
stories.addDecorator(withKnobs);

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
  .add('standard', () => <Image data={{
    url: 'https://static.highsnobiety.com/wp-content/uploads/2019/06/26131713/balmain-new-sneaker-collection-film-vitali-gelwich-10.jpg',
    width: 1200,
    height: 920,
    caption: 'Photo by XY',
    copyrightOwner: 'Highsnobiety / Vitali Gelwich',
    copyrightUrl: 'https://www.instagram.com/vitali_gelwich/',
  }}

  />);
