<template>
    <div class="container card mt-5">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Index</th>
                    <th scope="col">Login</th>
                    <th scope="col">Password</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Role</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in getRegistraitedUsers" :key="index">
                    <th>{{ index + 1 }}</th>
                    <td>{{ user.login }}</td>
                    <td>{{ user.password }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <button class="btn btn-outline-danger" @click="deleteAccount(user.login)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { RegistrationInterface } from '~/types';
import { Mutation } from 'vuex-class';
import * as MUTATIONS from '~/store/mutationTypes';

@Component
export default class AdminPanel extends Vue {

    @Prop() getRegistraitedUsers: RegistrationInterface[];

    @Mutation(MUTATIONS.DELETE_ACCOUNT) deleteAccount;

};
</script>