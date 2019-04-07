<template>
    <registration :get-registraited-users="getRegistraitedUsers" @createNewAccount="createNewAccount" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";
import { RegistrationStateInterface } from '~/types';
import Registration from '~/components/Registration/Registration.vue';
import * as MUTATIONS from '~/store/mutationTypes';

@Component({
    components: {
        Registration
    }
})
export default class extends Vue {

    @Getter getRegistraitedUsers: RegistrationStateInterface[];

    @Mutation(MUTATIONS.CREATE_NEW_ACCOUNT) createNewAccount;

};
</script>