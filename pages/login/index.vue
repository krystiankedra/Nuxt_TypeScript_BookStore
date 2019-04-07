<template>
    <login @setLoggedUser="setLoggedUser" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation } from 'vuex-class';
import login from '~/components/Login/Login.vue';
import * as MUTATIONS from '~/store/mutationTypes';

@Component({
    components: {
        login
    }
})
export default class extends Vue {

    @Mutation(MUTATIONS.SET_LOGGED_USER) setLoggedUser;

};
</script>