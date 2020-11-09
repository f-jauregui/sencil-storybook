import { select } from '@storybook/addon-knobs';

export default {
  title: 'Demo',
};

export const MyButton = () => {
  const label = 'Colors';
  const options = {
    Primary: 'primary',
    Secondary: 'secondary',
  };
  const defaultValue = 'primary';
  const groupId = 'GROUP-ID1';
  const type = select(label, options, defaultValue, groupId);
  return `<my-button type="${type}" ></my-button>`;
};
