<template>
<div class="mt-80 mb-80 mr-20 ml-20">
  <div v-if="appinitated" class="container">
    <input v-model="sourceUrl"/>
    <button @click="getPdf()">get pdf print</button>
    <span v-if="loadingpdf">making pdf...</span>
    <span v-if="error">Ups... Something went wrong!</span>
    <!-- <a v-if="!loadingpdf && pdf" download="my document" :href="'data:application/pdf;base64,'+pdf.result.data" >Download pdf document</a> -->
  </div>
  <div v-else class="container">
    <div>
      <div class="columns">
        <div class="column">
          <p class="is-size-3 has-text-danger">
            Loading
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import genericcomp from '~/components/_genericComp.vue'
import postlistcomp from '~/components/postListComp.vue'
import download from "downloadjs"
// require("downloadjs")(data, strFileName, strMimeType);



import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  components: {
    genericcomp,
    postlistcomp
  },
  data: function() {
    return {
      sourceUrl: 'rasl.nu',
      pdf: '',
      erros: [],
      error: false,
      loadingpdf: false
    }
  },
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
  },
  methods: {
    getPdf: function() {


      this.loadingpdf = true

      axios.post('http://template-studio.nl:3001/v1/convert', {
          headers: {
            'Accept-Encoding': 'application/gzip',
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/pdf'
          },
          "to": "pdf",
          "converter": {
            "uri": this.sourceUrl,
            "extend": {
              "javascript-delay": "1",
              "margin-top": "5mm",
              "margin-bottom": "5mm",
              "margin-left": "50mm",
              "margin-right": "10mm"
            }
          },
          "template": "render-data"

        })
        .then(response => {
          // JSON responses are automatically parsed.
          // this.pdf = response.data
          this.loadingpdf = false
          download('data:application/pdf;base64,'+response.data.result.data, this.sourceUrl+'.pdf','application/pdf');
        })
        .catch(e => {
          // this.errors.push(e)
          this.loadingpdf= false
          this.error = true
        })
    }
  },

  async asyncData({
    params,
    query,
    error,
    store,
    route,
    redirect
  }) {


    // GET POSTS START
    // if (store.state.posts.length == 0) {
    //   const postsRes = await axios.get(store.state.apiRoot + '/posts')
    //   store.commit('SET_POSTS', postsRes.data)
    // }

    // RETURN DATA DIRECTLY
    // return { title: 'blah blah blah' }


  },


}
</script>

<style>

</style>
