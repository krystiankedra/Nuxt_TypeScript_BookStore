<template>
    <tr>
        <th>{{ index + 1 }}</th>
        <td>{{ user.login }}</td>
        <td>{{ user.password }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.firstname }}</td>
        <td>{{ user.lastname }}</td>
        <td>{{ user.role }}</td>
        <td>
            <button
                v-if="chckIfCanDeleteAccounts"
                @click="deleteAccount(user.login)"
                class="btn btn-outline-danger">
                    Delete
            </button>
        </td>
    </tr>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { RegisterUserInterface, LoginInterface } from '~/types';

@Component
export default class User extends Vue {

    @Prop() user: RegisterUserInterface;
    @Prop() index: number;
    @Prop() getLoggedUser: LoginInterface;

    @Emit('deleteAccount') deleteAccount(userLogin: RegisterUserInterface['login']) {
        return userLogin;
    };

    get chckIfCanDeleteAccounts(): boolean {
        return this.user.role === 'user' && this.getLoggedUser.login !== this.user.login;
    };

};
</script>