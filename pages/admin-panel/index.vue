<template>
    <admin-panel v-if="isAdmin" :get-registraited-users="getRegistraitedUsers" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { RegistrationInterface } from '~/types';
import AdminPanel from '~/components/AdminPanel/AdminPanel.vue';

@Component({
    components: {
        AdminPanel
    }
})
export default class extends Vue {

    @Getter getRegistraitedUsers: RegistrationInterface[];
    @Getter getLoggedUser: RegistrationInterface;

    get isAdmin(): boolean {
        return this.getRegistraitedUsers.find(user => user.login === this.getLoggedUser.login).role === 'admin';
    };

};
</script>