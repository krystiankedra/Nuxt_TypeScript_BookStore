<template>
    <div>
        New {{ itemHeader }}: <input v-model="updatedValue" type="text" class="form-control" :placeholder="`Type ${itemHeader}`">
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NewValueEmiter extends Vue {

    @Prop() newValue: string;
    @Prop() itemHeader: string;

    get updatedValue(): string {
        return this.newValue;
    };

    set updatedValue(value: string) {
        this.$emit('update:newValue', value);
    };

};
</script>