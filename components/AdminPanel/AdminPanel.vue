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
                <user
                    v-for="(user, index) in getRegistraitedUsers"
                    :key="index"
                    :index="index"
                    :user="user"
                    @deleteAccount="deleteAccount"
                    :get-logged-user="getLoggedUser" />
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { RegisterUserInterface, LoginInterface } from '~/types';
import { Mutation, Getter } from 'vuex-class';
import * as MUTATIONS from '~/store/mutationTypes';
import User from '~/components/User/User.vue';

@Component({
    components: {
        User
    }
})
export default class AdminPanel extends Vue {

    @Getter getLoggedUser: LoginInterface;

    @Prop() getRegistraitedUsers: RegisterUserInterface[];

    @Mutation(MUTATIONS.DELETE_ACCOUNT) deleteAccount;

};
</script>