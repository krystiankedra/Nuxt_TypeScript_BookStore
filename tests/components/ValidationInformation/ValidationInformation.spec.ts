import ValidationInformation from '~/components/ValidationInformation/ValidationInformation.vue';
import { mount } from '@vue/test-utils';

describe('ValidationInformation', () => {
    it('ValidationInformation is a Vue component', () => {
        const wrapper = mount(ValidationInformation, {
            propsData: {
              text: 'ValidationText'
            }
          })
        expect(wrapper.isVueInstance()).toBeTruthy();
        expect(typeof wrapper.props().text === 'string').toBeTruthy();
        expect(wrapper.props().text).toBe('ValidationText');
    });
});