import { mount } from '@vue/test-utils';
import NewValueEmiter from '~/components/NewValueEmiter/NewValueEmiter.vue';

describe('NewValueEmiter', () => {

    test('Check props from parent', () => {
        const wrapper = mount(NewValueEmiter, {
            propsData: {
                newValue: 'loginValue',
                itemHeader: 'Login'
            },
            computed: {
                updateValue: {
                    get(): string {
                        return this.newValue;
                    },
                    set (value: string) {
                        this.$emit('update:newValue', value);
                    }
                }
            }
        });
        expect(wrapper.props().newValue).toBe('loginValue');
        expect(wrapper.props().itemHeader).toBe('Login');
    });

    test('Find and Set Value', () => {
        const wrapper = mount(NewValueEmiter);
        const input = wrapper.find('.form-control');
        input.setValue('KrystianTesting');
    });

});