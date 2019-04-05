import {withA11y} from '@storybook/addon-a11y';
import {withConsole} from '@storybook/addon-console';
import {withKnobs} from '@storybook/addon-knobs';
import {addDecorator, addParameters} from '@storybook/react';

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addParameters({
  backgrounds: [
    {
      name: 'Green',
      value: '#00ff00',
    },
    {
      name: 'Red',
      value: '#ff0000',
    },
  ],
});

const req = require.context('./', true, /.story.tsx$/);

req.keys().forEach(filename => req(filename));
