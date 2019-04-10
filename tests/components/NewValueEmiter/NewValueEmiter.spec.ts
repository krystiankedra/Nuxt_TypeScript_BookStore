import { shallowMount } from '@vue/test-utils';
import NewValueEmiter from '~/components/NewValueEmiter/NewValueEmiter.vue';

describe('NewValueEmiter', () => {
    const wrapper = shallowMount(NewValueEmiter, {
        propsData: {
            newValue: 'loginValue',
            itemHeader: 'Login'
        }
    });
    test('Check props from parent', () => {
        expect(wrapper.props().newValue).toBe('loginValue');
        expect(wrapper.props().itemHeader).toBe('Login');
    });

    test('isExist', () => {
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.find('.form-control').exists()).toBe(true);
        expect(wrapper.is(NewValueEmiter)).toBe(true);
    });

    test('Find and Set Value', () => {
        const wrapper = shallowMount(NewValueEmiter);
        const input = wrapper.find('.form-control');
        input.setValue('KrystianTesting');
    });

});