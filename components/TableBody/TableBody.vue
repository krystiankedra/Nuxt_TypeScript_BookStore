<template>
    <tbody>
        <book v-for="(book, index) in getBooks"
            :key="book.id"
            :book="book"
            :index="index"
            @deleteBook="deleteBook" />
    </tbody>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { BookInterface } from '~/types';
import Book from '~/components/Book/Book.vue';
import * as ACTIONS from '~/store/actionTypes';

@Component({
    components: {
        Book
    }
})
export default class TableBody extends Vue {

    @Prop() getBooks: BookInterface[];

    @Action(ACTIONS.DELETE_BOOK) deleteBook;

};
</script>