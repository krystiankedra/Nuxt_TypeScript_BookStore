<template>
    <div class="container mt-4">
        <div class="card card-shadow">
            <div class="card-header">
                Welcome!
            </div>
            <div class="card-body">
                <h5 class="card-title">Log in or register and join!</h5>
                <p class="card-text">Start the startup process</p>
            </div>
            <div class="card-footer">
                <button @click="goToRegistration" class="float-right btn btn-danger">Sing Up</button>
                <button @click="goToLogin" class="float-left btn btn-danger">Sing in</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StartingInformation extends Vue {

    goToRegistration():void {
        this.$router.push(`/registration`);
    };

    goToLogin():void {
        this.$router.push(`/login`);
    };

};
</script>