<template>
    <div>
        New {{ itemHeader }}:
        <input v-model="updatedValue"
            :type="valueType"
            class="form-control card-shadow"
            :placeholder="`Type ${itemHeader}`">
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NewValueEmiter extends Vue {

    @Prop() newValue: string;
    @Prop() itemHeader: string;
    @Prop() valueType: string;

    get updatedValue(): string {
        return this.newValue;
    };

    set updatedValue(value: string) {
        this.$emit('update:newValue', value);
    };

};
</script>