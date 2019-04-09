<template>
<div class="container" v-if="getIsLogged">
  <h2 class="mt-5 mb-5">Books: {{ countOfBookList }}</h2>
  <serach-item @setSearchedValue="setSearchedValue" class="card-shadow" />
  <table class="table table-bordered card-shadow">
    <table-headers :get-table-headers="getTableHeaders" @setPropertyToSort="setPropertyToSort" />
    <table-body :get-books="getBooks" />
  </table>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Getter, Mutation } from 'vuex-class';
import { BookInterface, TableHeaderInterface } from '~/types';
import TableHeaders from '~/components/TableHeaders/TableHeaders.vue';
import TableBody from '~/components/TableBody/TableBody.vue';
import SerachItem from '~/components/SearchItem/SearchItem.vue';
import * as ACTIONS from '~/store/actionTypes';
import * as MUTATIONS from '~/store/mutationTypes';

@Component({
  components: {
    SerachItem,
    TableHeaders,
    TableBody,
  }
})
export default class extends Vue {

  @Getter getTableHeaders: TableHeaderInterface[];
  @Getter getBooks: BookInterface[];
  @Getter getIsLogged: boolean;

  get countOfBookList(): number {
    return this.getBooks.length;
  };

  @Mutation(MUTATIONS.SET_SEARCHED_VALUE) setSearchedValue;
  @Mutation(MUTATIONS.SET_PROPERTY_TO_SORT) setPropertyToSort;

  async mounted() {
    await this.$store.dispatch(ACTIONS.SET_BOOKS);
  };

  beforeDestroy() {
    this.$store.commit(MUTATIONS.SET_SEARCHED_VALUE, '');
  };

};
</script>