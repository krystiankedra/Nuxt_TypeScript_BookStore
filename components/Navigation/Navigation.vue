<template>
    <div class="container mt-5">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <nuxt-link tag="a" class="nav-link" to="/">Book List</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link tag="a" class="nav-link" to="/add-book">Add Book</nuxt-link>
            </li>
            <li class="nav-item cursor-pointer">
                <a class="nav-link" @click="setRandomBook">Random Book</a>
            </li>
            <li class="nav-item cursor-pointer" v-if="getIsLogged">
                <a class="nav-link" @click="logOut">Log Out</a>
            </li>
            <li class="nav-item cursor-pointer" v-if="getIsLogged && isAdmin">
                <a class="nav-link" @click="goToAdminPanel">Admin Panel</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { BookInterface, RegisterUserInterface } from "types";
import * as MUTATIONS from '~/store/mutationTypes';

@Component
export default class Navigation extends Vue {

    @Getter getSelectedBook: BookInterface;
    @Getter getIsLogged: boolean;
    @Getter getRegistraitedUsers: RegisterUserInterface[];
    @Getter getLoggedUser: RegisterUserInterface;

    get isAdmin(): boolean {
        return this.getRegistraitedUsers.find(user => user.login === this.getLoggedUser.login).role === 'admin';
    };

    setRandomBook(): void {
        this.$store.commit(MUTATIONS.SET_RANDOM_BOOK);
        this.$router.push(`/book/${this.getSelectedBook.id}`);
    };

    logOut(): void {
        this.$store.commit(MUTATIONS.SET_LOGOUT_USER);
        this.$router.push('/');
    };

    goToAdminPanel(): void {
        this.$router.push('/admin-panel');
    };

};
</script>

<style scoped>
.cursor-pointer {
    cursor: pointer;
}
</style>