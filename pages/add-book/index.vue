<template>
    <div class="container card mt-5 card-shadow">
        <h2 class="mt-2">Add new book</h2>
        <div class="row">
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="title" :item-header="titleHeader" valueType="text" class="mb-2 mt-2" />
            </div>
            <div class="form-group col-6">
                <new-value-emiter :new-value.sync="description" :item-header="descriptionHeader" valueType="text" class="mb-2 mt-2" />
            </div>
        </div>
        <div class="mb-3">
            <button
                @click="addBook({ title, description, category, subcategory, id })"
                class="btn btn-outline-success float-right">
                    Submit
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import NewValueEmiter from '~/components/NewValueEmiter/NewValueEmiter.vue'
import * as ACTIONS from '~/store/actionTypes';

@Component({
    components: {
        NewValueEmiter
    }
})
export default class extends Vue {

    titleHeader: string = 'Title';
    descriptionHeader: string = 'Description';
    title: string = '';
    description: string = '';
    category: string = '1';
    subcategory: string = '20';
    id: string = String(Math.floor((Math.random() * 10) + 1));

    @Action(ACTIONS.ADD_BOOK) addBook;

};
</script>