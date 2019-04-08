<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6">
        <div class="card card-shadow">
          <h2 class="mt-1 ml-3">User Information</h2>
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
      <div class="col-6">
        <div class="card card-shadow">
          <div class="card-body">
            <h2>Book List</h2>
            <div v-for="(book, index) in userInfo.books" :key="index">
              <hr class="hr">
              <p><span class="font-weight-bold">ID: </span>{{ book.id }}</p>
              <p><span class="font-weight-bold">Category: </span>{{ book.category }}</p>
              <p><span class="font-weight-bold">Subcategory: </span>{{ book.subcategory }}</p>
              <p><span class="font-weight-bold">Title: </span>{{ book.title }}</p>
              <p><span class="font-weight-bold">Description: </span>{{ book.description }}</p>
              <p><button @click="deleteBookFromAccount(book, index)" class="btn btn-danger">Delete Book</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { RegisterUserInterface, BookInterface } from "~/types";

@Component
export default class UserProfile extends Vue {

  @Prop() userInfo: RegisterUserInterface;
  @Prop() isHiddenEditProfile: boolean;

  @Emit('update:isHiddenEditProfile') changeHiddenEditMode(): boolean {
    return !this.isHiddenEditProfile;
  };

  @Emit('deleteBookFromAccount') deleteBookFromAccount(book: BookInterface, index: number) {
    return { book , index };
  };

};
</script>

<style scoped>
.hr {
  background: red;
}
</style>