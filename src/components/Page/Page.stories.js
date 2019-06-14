import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import Page from './Page';

const stories = storiesOf('Page', module);
stories.addDecorator(StoryRouter());
stories.addDecorator(withKnobs);
stories.add('standard', () =>
    <Page headline='Never Stop Scrolling' />);