import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CoreLayout from './CoreLayout';

storiesOf('CoreLayout', module)

  .add('with children', () => (
    <CoreLayout>
      <div>Children</div>
    </CoreLayout>
  ));
