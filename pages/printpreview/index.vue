<template>
<div class="">
  <div class="">
    <div v-for="item in content.slice(0, 5)" >
      <h1 class="is-size-3" v-html="item.title"></h1>
      <p class="is-size-5" v-html="item.body"></p>
      <img :src="'https://picsum.photos/2000?'+Math.random()" />
    </div>
  </div>

</div>
</div>
</template>

<script>
import genericcomp from '~/components/_genericComp.vue'
import postlistcomp from '~/components/postListComp.vue'

import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  components: {
    genericcomp,
    postlistcomp
  },


  async asyncData({
    params,
    query,
    error,
    store,
    route,
    redirect
  }) {

      let { data } = await axios.get(store.state.apiRoot + '/posts')
      return { content: data }

  },


}
</script>

<style>

</style>
