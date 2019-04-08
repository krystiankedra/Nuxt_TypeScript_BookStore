<template>
  <div :style="isOpenModal ? 'display: block;' : 'display:none'" class="modal" id="myModal">
    <div class="modal-dialog card-shadow">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Update Your Book</h4>
          <button @click="closeModal" type="button" class="close">&times;</button>
        </div>
        <div class="modal-body">
          <new-value-emiter :new-value.sync="propWithoutReference.title" :item-header="titleHeader" class="mb-5 mt-5" />
          <new-value-emiter :new-value.sync="propWithoutReference.description" :item-header="descriptionHeader" class="mb-5 mt-5" />
        </div>
        <div class="modal-footer">
          <button @click="closeModal" type="button" class="btn btn-outline-danger">Close</button>
          <button @click="updateBook(propWithoutReference)" type="button" class="btn btn-outline-success">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { BookInterface } from "types";
import NewValueEmiter from '~/components/NewValueEmiter/NewValueEmiter.vue';

@Component({
  components: {
    NewValueEmiter
  }
})
export default class Modal extends Vue {

  @Prop() isOpenModal: boolean;
  @Prop() item: BookInterface;
  @Prop() titleHeader: string;
  @Prop() descriptionHeader: string;

  @Emit('updateBook') updateBook(newValues: BookInterface) {
    this.$emit('update:isOpenModal', !this.isOpenModal);
    return newValues;
  };

  get propWithoutReference() {
    return Object.assign({}, this.item);
  };

  closeModal(): void {
    this.$emit('update:isOpenModal', !this.isOpenModal);
  };

};
</script>