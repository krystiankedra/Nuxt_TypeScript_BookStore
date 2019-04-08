<template>
    <div class="container mt-5 mb-5 card card-shadow">
        <h2 class="mt-2">Add new account</h2>
        <div class="row">
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="login" :item-header="loginHeader" class="mb-3 mt-3" />
            </div>
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="password" :item-header="passwordHeader" class="mb-3 mt-3" />
            </div>
        </div>
        <div class="row">
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="email" :item-header="emailHeader" class="mb-3 mt-3" />
            </div>
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="age" :item-header="ageHeader" class="mb-3 mt-3" />
            </div>
        </div>
        <div class="row">
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="firstname" :item-header="firstnameHeader" class="mb-3 mt-3" />
            </div>
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="lastname" :item-header="lastnameHeader" class="mb-3 mt-3" />
            </div>
        </div>
        <div class="row">
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="secretKey" :item-header="secrectKeyHeader" class="mb-3 mt-3" />
            </div>
        </div>
        <validation-information v-if="!isCorrectValidate" :text="validationText" />
        <validation-information v-if="isExistAccountValidate" :text="isExistValidationText" />
        <div class="mt-2 mb-3">
            <button
                @click="registerAccount"
                class="btn btn-outline-success float-right">
                    Submit
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { RegisterUserInterface } from '~/types';
import { numberValidator } from '~/api/validators/validators';
import NewValueEmiter from '~/components/NewValueEmiter/NewValueEmiter.vue';
import ValidationInformation from '~/components/ValidationInformation/ValidationInformation.vue';

@Component({
    components: {
        NewValueEmiter,
        ValidationInformation
    }
})
export default class Registration extends Vue {

    loginHeader: string = 'Login';
    passwordHeader: string = 'Password';
    emailHeader: string = 'Email';
    ageHeader: string = 'Age';
    firstnameHeader: string = 'Firstname';
    lastnameHeader: string = 'Lastname';
    secrectKeyHeader: string = 'Secret Key';
    login: string = '';
    password: string = '';
    email: string = '';
    age: number = null;
    firstname: string = '';
    lastname: string = '';
    secretKey: string = '';
    isCorrectValidate: boolean = true;
    validationText: string = `Please fill in all fields in the form! Remember that age must be a number!`;
    isExistAccountValidate: boolean = false;
    isExistValidationText: string = `Login or Email are exist!`;

    @Prop() getRegistraitedUsers: RegisterUserInterface[];

    validateNewAccount(newAcccountValues): boolean {
        if (newAcccountValues.login.length > 0
            && newAcccountValues.password.length > 0
            && newAcccountValues.email.length > 0
            && numberValidator(newAcccountValues.age)
            && newAcccountValues.firstname.length > 0
            && newAcccountValues.lastname.length > 0) {
                this.isCorrectValidate = true;
                return true;
        }
        this.isCorrectValidate = false;
        return false;
    };

    checkIfAccountExist(newAcccountValues): boolean {
        const check: boolean = this.getRegistraitedUsers.some((user: RegisterUserInterface) =>
            user.login === newAcccountValues.login
            || user.email === newAcccountValues.email
        );
        this.isExistAccountValidate = check;
        return check;
    };

    accountRole(key: string): RegisterUserInterface['role'] {
        return key === 'Give Me Admin' ? 'admin' : 'user;'
    };

    createNewAccount() {
        const newAcccountValues: RegisterUserInterface = {
            login: this.login,
            password: this.password,
            email: this.email,
            age: this.age,
            firstname: this.firstname,
            lastname: this.lastname,
            role: this.accountRole(this.secretKey)
        };
        return newAcccountValues;
    };

    registerAccount(): void {
        const newUser = this.createNewAccount(),
        isExistAccount = this.checkIfAccountExist(newUser),
        shouldCreate = this.validateNewAccount(newUser);

        if (!isExistAccount && shouldCreate) {
            this.$emit('createNewAccount', newUser);
            this.$router.push(`/login`);
        }
    };

}
</script>