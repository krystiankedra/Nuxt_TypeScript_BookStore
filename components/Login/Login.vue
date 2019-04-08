<template>
    <div class="container mt-5 mb-5 card card-shadow">
        <h2 class="mt-2">Log to Your account</h2>
        <div class="row">
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="login" :item-header="loginHeader" class="mb-5 mt-5" />
            </div>
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="password" :item-header="passwordHeader" class="mb-5 mt-5" />
            </div>
        </div>
        <validation-information v-if="!isCorrectValidate" :text="validationText" />
        <validation-information v-if="!isExistAccountValidate" :text="isExistValidationText" />
        <div class="mb-3">
            <button
                @click="logToAccount({ login, password })"
                class="btn btn-outline-success float-right">
                    Submit
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { RegisterUserInterface } from '~/types';
import NewValueEmiter from '~/components/NewValueEmiter/NewValueEmiter.vue';
import ValidationInformation from '~/components/ValidationInformation/ValidationInformation.vue';

@Component({
    components: {
        NewValueEmiter,
        ValidationInformation
    }
})
export default class Login extends Vue {

    login: string = '';
    password: string = '';
    loginHeader: string = 'Login';
    passwordHeader: string = 'Password';
    isCorrectValidate: boolean = true;
    validationText: string = `Please fill in all fields in the form!`;
    isExistAccountValidate: boolean = true;
    isExistValidationText: string = `Login or Password are wrong!`;

    @Getter getRegistraitedUsers: RegisterUserInterface[];

    checkIfAccountExist(newAcccountValues): boolean {
        const check: boolean = this.getRegistraitedUsers.some((user: RegisterUserInterface) =>
            user.login === newAcccountValues.login
            && user.password === newAcccountValues.password
        );
        this.isExistAccountValidate = check;
        return check;
    };

    validationLogin(logValues): boolean {
        if (logValues.login.length > 0 && logValues.password.length > 0) {
            this.isCorrectValidate = true;
            return true;
        }
        this.isCorrectValidate = false;
        return false;
    }

    logToAccount(logValues): void {
        const isExistAccount = this.checkIfAccountExist(logValues),
        isValidate = this.validationLogin(logValues);

        if (isExistAccount && isValidate) {
            this.$emit('setLoggedUser', logValues);
            this.$router.push(`/`);
        }
    };

};
</script>