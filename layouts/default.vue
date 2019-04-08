<template>
  <div>
    <div class="row m-0">
      <Navigation class="col-6" v-if="getIsLogged" />
      <UserInfo class="col-5" v-if="getIsLogged" />
    </div>
    <StartingInformation v-if="!getIsLogged" />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import Navigation from '~/components/Navigation/Navigation.vue';
import StartingInformation from '~/components/StartingInformation/StartingInformation.vue';
import UserInfo from '~/components/UserInfo/UserInfo.vue';

@Component({
  components: {
    Navigation,
    StartingInformation,
    UserInfo
  }
})
export default class extends Vue {

  @Getter getIsLogged: boolean;

};
</script>

<style>
.card-shadow {
    box-shadow: 0 1px 15px 1px rgba(39, 39, 39, 0.1);
}
</style>