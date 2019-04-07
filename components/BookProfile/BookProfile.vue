<template>
    <div class="container card mt-5 mb-5">
        <div class="mt-2">
            <h2 class="float-left">Book Profile</h2>
            <button @click="goBack" class="btn btn-outline-danger float-right mt-2">Go Back</button>
        </div>
        <p class="font-weight-bold">All information about selected book with {{ book.id }} ID</p>
        <div class="card mb-4">
            <div class="card-body">
                <h4 class="card-title"><span class="font-weight-bold">Book title: </span>{{ book.title }}</h4>
                <p class="card-text"><span class="font-weight-bold">Book created by user with ID: </span>{{ book.user }}</p>
                <p class="card-text"><span class="font-weight-bold">Book description: </span>{{ book.description }}</p>
                <p class="card-text"><span class="font-weight-bold">Book category: </span>{{ book.category }}</p>
                <p class="card-text"><span class="font-weight-bold">Book inserted: </span>{{ book.inserted }}</p>
                <p class="card-text"><span class="font-weight-bold">Book last modified: </span>{{ book.modified }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { BookInterface } from "types";

@Component
export default class BookProfile extends Vue {

    @Prop() book: BookInterface;

    goBack(): void {
        this.$router.push(`/`);
    };

};
</script>