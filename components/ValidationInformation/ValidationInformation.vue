<template>
    <div class="row">
        <div class="alert alert-warning col-6 offset-3 card-shadow" role="alert">
            {{ text }}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ValidationInformation extends Vue {

    @Prop() text: string;

}
</script>