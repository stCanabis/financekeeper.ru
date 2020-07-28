<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>{{getDate.Date||date}}</h1>
    </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex"

  export default {
    name: 'Home',

    components: {},

    data: () => ({
      date: 'Sorry, we has no dateTime'
    }),

    computed: {
      ...mapGetters({
        getDate: 'getDate'
      })
    },

    created() {
      this.fetchDate();
    },

    methods: {
      ...mapActions([
        'fetchDate'
      ])
    }


  }
</script>
