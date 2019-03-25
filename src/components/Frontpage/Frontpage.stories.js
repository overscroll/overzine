import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';

import Frontpage from './Frontpage';

const stories = storiesOf('Frontpage', module);
stories.addDecorator(withKnobs);

stories.add('standard', () =>
    <Frontpage headline='Never Stop Scrolling' />);