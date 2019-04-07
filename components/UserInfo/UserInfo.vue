<template>
    <div class="container mt-4">
        <div class="card">
            <div class="card-body">
                Welcome {{ fullname }} !
                <div class="float-right">
                    <button @click="goToUserProfile" class="btn btn-outline-primary">Show Profile</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { RegistrationInterface } from '~/types';

@Component
export default class UserInfo extends Vue {

    @Getter getLoggedUser: RegistrationInterface;
    @Getter getRegistraitedUsers: RegistrationInterface[];

    get userInfo(): RegistrationInterface {
        return this.getRegistraitedUsers.find(user => user.login === this.getLoggedUser.login);
    };

    get fullname(): string {
        return `${this.userInfo.firstname} ${this.userInfo.lastname}`;
    };

    goToUserProfile(): void {
        this.$router.push(`/user/${this.userInfo.login}`);
    };

};
</script>