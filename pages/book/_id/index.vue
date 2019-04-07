<template>
    <book-profile :book="getSelectedBook" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from 'vuex-class';
import { BookInterface } from "types";
import BookProfile from '~/components/BookProfile/BookProfile.vue';
import * as MUTATIONS from '~/store/mutationTypes';
import * as ACTIONS from '~/store/actionTypes';

@Component({
    components: {
        BookProfile
    }
})
export default class extends Vue {

    @Getter getSelectedBook: BookInterface;
    @Getter getBooks: BookInterface[];

    async created() {
        if (this.getBooks.length === 0) {
            await this.$store.dispatch(ACTIONS.SET_BOOKS);
        }

        this.$store.commit(MUTATIONS.SET_SELECTED_BOOK, this.$route.params.id);
    }

};
</script>