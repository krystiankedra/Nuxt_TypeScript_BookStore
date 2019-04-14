<template>
    <div class="container card mt-5 mb-5 card-shadow">
        <h2 class="mt-3">Edit Your Profile</h2>
        <div class="row">
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="userData.password" :item-header="passwordHeader" valueType="password" class="mb-2 mt-2" />
            </div>
        </div>
        <div class="row">
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="userData.email" :item-header="emailHeader" valueType="text" class="mb-2 mt-2" />
            </div>
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="userData.age" :item-header="ageHeader" valueType="text" class="mb-2 mt-2" />
            </div>
        </div>
        <div class="row">
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="userData.firstname" :item-header="firstnameHeader" valueType="text" class="mb-2 mt-2" />
            </div>
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="userData.lastname" :item-header="lastnameHeader" valueType="text" class="mb-2 mt-2" />
            </div>
        </div>
        <div class="mb-5">
            <button @click="editAccount(userData)" class="btn btn-outline-success float-right">Save</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { RegisterUserInterface } from "types";
import NewValueEmiter from '~/components/NewValueEmiter/NewValueEmiter.vue';

@Component({
    components: {
        NewValueEmiter
    }
})
export default class extends Vue {

    @Prop() userData: RegisterUserInterface;
    @Prop() isHiddenEditProfile: boolean;

    passwordHeader: string = 'Password';
    emailHeader: string = 'Email';
    ageHeader: string = 'Age';
    firstnameHeader: string = 'Firstname';
    lastnameHeader: string = 'Lastname';

    @Emit('editAccount') editAccount(userData): RegisterUserInterface {
        this.$emit('update:isHiddenEditProfile', !this.isHiddenEditProfile);
        return userData;
    };

};
</script>