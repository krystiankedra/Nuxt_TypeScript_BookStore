<template>
    <thead>
        <tr>
            <th class="text-center">
                <span>Index</span>
            </th>
            <th v-for="header in getTableHeaders" :key="header.name" class="text-center">
                <span class="cursor-pointer" @click="setPropertyToSort(header.name)">{{ header.name }}</span>
            </th>
            <th class="text-center">
                <span>Delete</span>
            </th>
            <th class="text-center">
                <span>Update</span>
            </th>
            <th class="text-center">
                <span>Profile</span>
            </th>
        </tr>
    </thead>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { TableHeaderInterface } from '~/types';

@Component
export default class TableHeaders extends Vue {

    @Prop() getTableHeaders: TableHeaderInterface[];

    @Emit('setPropertyToSort') setPropertyToSort(property: TableHeaderInterface['name']) {
        return property;
    };

};
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>