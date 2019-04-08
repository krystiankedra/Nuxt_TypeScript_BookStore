<template>
    <div class="container card mt-5 card-shadow">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(header, index) in tableHeaders" :key="index" scope="col">{{ header }}</th>
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

    protected tableHeaders: string[] = ['Index', 'Login', 'Password', 'Email', 'Age', 'Firstname', 'Lastname', 'Role', 'Delete'];

    @Getter getLoggedUser: LoginInterface;

    @Prop() getRegistraitedUsers: RegisterUserInterface[];

    @Mutation(MUTATIONS.DELETE_ACCOUNT) deleteAccount;

};
</script>