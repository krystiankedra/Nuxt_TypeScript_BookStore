<template>
    <tr>
        <td class="text-center">{{ index + 1 }}</td>
        <td class="text-center">{{ book.id }}</td>
        <td class="text-center">{{ book.category }}</td>
        <td class="text-center">{{ book.subcategory }}</td>
        <td class="text-center">{{ book.title }}</td>
        <td class="text-justify">{{ shortedDescription }}</td>
        <td>
            <button @click="deleteBook(book.id)" class="btn btn-outline-danger">Delete</button>
        </td>
        <td>
            <button @click="changeModalState" class="btn btn-outline-primary">Update</button>
        </td>
        <td>
            <button @click="viewBookProfile(book.id)" class="btn btn-outline-primary">View</button>
        </td>
        <Modal
            v-if="isOpenModal"
            :is-open-modal.sync="isOpenModal"
            :item="book"
            :title-header="titleHeader"
            :description-header="descriptionHeader"
            @updateBook="updateBook" />
    </tr>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { BookInterface } from '~/types';
import Modal from '~/components/Modal/Modal.vue';
import * as ACTIONS from '~/store/actionTypes';

@Component({
    components: {
        Modal
    }
})
export default class Book extends Vue {

    titleHeader: string = 'Title';
    descriptionHeader: string = 'Description';
    isOpenModal: boolean = false;

    @Prop() book: BookInterface;
    @Prop() index: number;

    @Emit("deleteBook") deleteBook(bookId: BookInterface['id']) {
        return bookId;
    };

    @Action(ACTIONS.UPDATE_BOOK) updateBook;

    changeModalState(): void {
        this.isOpenModal = !this.isOpenModal;
    };

    viewBookProfile(bookId): void {
        this.$router.push(`/book/${bookId}`);
    };

    sliceDescription(value: string) {
        return `${value.slice(0, 120)}...`;
    }

    get shortedDescription(): BookInterface['description'] {
        return this.book.description.length > 120
            ? this.sliceDescription(this.book.description)
            : this.book.description;
    };

};
</script>