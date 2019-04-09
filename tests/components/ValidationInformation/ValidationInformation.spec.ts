import ValidationInformation from '~/components/ValidationInformation/ValidationInformation.vue';
import { mount } from '@vue/test-utils';

describe('ValidationInformation', () => {
  const wrapper = mount(ValidationInformation, {
    propsData: {
      text: 'ValidationText'
    }
  });
  test('ValidationInformation is a Vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(typeof wrapper.props().text === 'string').toBeTruthy();
    expect(wrapper.props().text).toBe('ValidationText');
  });
  test('renders the correct markup', () => {
    expect(wrapper.contains('div')).toBe(true);
  });
});