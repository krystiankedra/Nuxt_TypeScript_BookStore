<template>
    <div>
        <input v-model="searchedValue" @input="setSearchedValue(searchedValue)" class="form-control card-shadow" placeholder="Type...">
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class SearchItem extends Vue {

    searchedValue: string = '';

    @Emit('setSearchedValue') setSearchedValue(value: string): string {
        return value;
    };

};
</script>