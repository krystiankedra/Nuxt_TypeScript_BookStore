import { mount } from '@vue/test-utils';
import NewValueEmiter from '~/components/NewValueEmiter/NewValueEmiter.vue';

describe('NewValueEmiter', () => {
    it('NewValueEmiter', () => {
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
});