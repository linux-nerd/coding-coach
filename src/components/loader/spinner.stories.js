import React from 'react';
import { storiesOf } from '@storybook/react';

import Spinner from './Spinner';

storiesOf('Components/Spinner', module).add('Render Spinner', () => {
  return <Spinner />;
});
