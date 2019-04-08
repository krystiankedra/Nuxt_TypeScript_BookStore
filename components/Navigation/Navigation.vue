<template>
    <div class="container mt-5">
        <div class="d-flex justify-content-center">
            <div class="mr-1 ml-1">
                <nuxt-link to="/" tag="button" class="btn btn-outline-primary">Book List</nuxt-link>
            </div>
            <div class="mr-1 ml-1">
                <nuxt-link to="/add-book" tag="button" class="btn btn-outline-primary">Add Book</nuxt-link>
            </div>
             <div class="mr-1 ml-1">
                <button @click="setRandomBook" class="btn btn-outline-primary">Random Book</button>
            </div>
            <div class="mr-1 ml-1" v-if="getIsLogged">
                <button @click="logOut" class="btn btn-outline-danger">Log Out</button>
            </div>
            <div class="mr-1 ml-1" v-if="getIsLogged && isAdmin">
                <button @click="goToAdminPanel" class="btn btn-outline-danger">Admin Panel</button>
            </div>
        </div>
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