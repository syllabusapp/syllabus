import '@storybook/addon-console';
import {addDecorator, configure} from '@storybook/react';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import i18n from '../src/i18n';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(story => {
  return <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>;
});

configure(loadStories, module);
