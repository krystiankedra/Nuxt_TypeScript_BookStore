<template>
  <div class="container" v-if="getIsLogged">
    <user-profile :is-hidden-edit-profile.sync="isHiddenEditProfile" :user-info="userInfo" />
    <edit-profile
      v-if="isHiddenEditProfile"
      :is-hidden-edit-profile.sync="isHiddenEditProfile"
      :user-data="UserInfoWithoutReference"
      @editAccount="editAccount" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import { LoginInterface, RegisterUserInterface } from '~/types';
import UserProfile from '~/components/UserProfile/UserProfile.vue';
import EditProfile from '~/components/EditProfile/EditProfile.vue';
import * as MUTATIONS from '~/store/mutationTypes';

@Component({
  components: {
    UserProfile,
    EditProfile
  }
})
export default class extends Vue {

  isHiddenEditProfile: boolean = false;

  @Getter getIsLogged: boolean;
  @Getter getLoggedUser: LoginInterface;
  @Getter getRegistraitedUsers: RegisterUserInterface[];

  get userInfo(): RegisterUserInterface {
    return this.getRegistraitedUsers.find(user => user.login === this.getLoggedUser.login);
  };

  get UserInfoWithoutReference(): RegisterUserInterface {
    return Object.assign({}, this.userInfo);
  }

  @Mutation(MUTATIONS.EDIT_ACCOUNT) editAccount;

};
</script>