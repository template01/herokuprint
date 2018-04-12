<template>
<div class="">
  <div class="">
    <div v-for="item in content.slice(0, 250)" >
      <h1 class="is-size-3" v-html="item.title.rendered"></h1>
      <div class="is-size-5" v-html="item.content.rendered"></div>
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
  data: function(){
    return{
      images: ['https://farm9.staticflickr.com/8319/29652800220_1211078d8e_k_d.jpg','https://farm3.staticflickr.com/2807/33102046353_276e9a8809_o_d.jpg','https://farm5.staticflickr.com/4075/4858564088_b13e623117_o_d.jpg','https://farm3.staticflickr.com/2822/33078988203_ff60fe8f26_k_d.jpg','https://farm6.staticflickr.com/5793/30474312970_19ccff5aec_o_d.jpg','https://farm4.staticflickr.com/3716/9467361414_98c88b0289_o_d.jpg','https://farm5.staticflickr.com/4135/4858566784_aa5e1d3003_o_d.jpg','https://farm9.staticflickr.com/8886/18279455859_28247e0a16_k_d.jpg','https://farm1.staticflickr.com/901/27334117638_d984193f4c_o_d.jpg','https://farm6.staticflickr.com/5342/9467415240_ff29751590_o_d.jpg','https://farm8.staticflickr.com/7341/9458071103_2cabc5aeff_o_d.jpg','https://farm8.staticflickr.com/7288/9457398131_1f267a3b5c_o_d.jpg']
  }
},
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

      let { data } = await axios.get('http://reinvented.wdka.nl/backend/wp-json/wp/v2/posts?per_page=100')
      return { content: data }

  },


}
</script>

<style>

</style>
