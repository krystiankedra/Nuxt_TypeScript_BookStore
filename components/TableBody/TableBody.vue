<template>
    <tbody>
        <book v-for="(book, index) in getBooks"
            :key="book.id"
            :book="book"
            :index="index"
            @deleteBook="deleteBook"
            @addBookToAccount="addBookToAccount"
            class="card-shadow" />
    </tbody>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { BookInterface, LoginInterface } from '~/types';
import Book from '~/components/Book/Book.vue';
import * as ACTIONS from '~/store/actionTypes';
import * as MUTATIONS from '~/store/mutationTypes';

@Component({
    components: {
        Book
    }
})
export default class TableBody extends Vue {

    @Getter getLoggedUser: LoginInterface;

    @Prop() getBooks: BookInterface[];

    @Action(ACTIONS.DELETE_BOOK) deleteBook;

    addBookToAccount(book: BookInterface): void {
        this.$store.commit(MUTATIONS.ADD_BOOK_TO_ACCOUNT, { book, loggedUser: this.getLoggedUser });
    };

};
</script>