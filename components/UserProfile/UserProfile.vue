<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <p><span class="font-weight-bold">Login: </span>{{ userInfo.login }}</p>
        <p><span class="font-weight-bold">Password: </span>{{ userInfo.password }}</p>
        <p><span class="font-weight-bold">Email: </span>{{ userInfo.email }}</p>
        <p><span class="font-weight-bold">Age: </span>{{ userInfo.age }}</p>
        <p><span class="font-weight-bold">Firstname: </span>{{ userInfo.firstname }}</p>
        <p><span class="font-weight-bold">Lastname: </span>{{ userInfo.lastname }}</p>
      </div>
      <div class="card-footer">
        <div class="float-right">
            <button @click="changeHiddenEditMode" class="btn btn-outline-primary">Edit Profile</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { RegisterUserInterface } from "~/types";

@Component
export default class UserProfile extends Vue {

  @Prop() userInfo: RegisterUserInterface;
  @Prop() isHiddenEditProfile: boolean;

  @Emit('update:isHiddenEditProfile') changeHiddenEditMode(): boolean {
    return !this.isHiddenEditProfile;
  };

};
</script>