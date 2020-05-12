<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Seed producers</h2>
        <router-link to="/seedproducers/add" class="btn btn-success">Dodaj</router-link>
        <table class="table table-hover">
            <tr>
                <th>Id</th>
                <th>Nazwa</th>
                <th>Edycja</th>
                <th>Usun</th>
            </tr>
            <tr v-for="seed_producer in seed_producers" v-bind:key="seed_producer.lp">
                <td>{{seed_producer.id}}</td>
                <td>{{seed_producer.name}}</td>
                <td><router-link v-bind:to="'/seedproducers/'+seed_producer.id+'/edit'" class="btn btn-success">Edytuj</router-link></td>
                <td><router-link v-bind:to="'/seedproducers/'+seed_producer.id+'/delete'" class="btn btn-danger">Usuń</router-link></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      seed_producers: []
    }
  },
  methods: {
    fetchSeedProducers () {
      this.$http.get('http://roslina.lh/api/seedproducers')
        .then(
          response => { this.seed_producers = response.data },
          response => { console.log(response.statusText) }
        )
    },
    deleteSeedProducer (id) {
      this.$http.delete('http://roslina.lh/api/seedproducers/' + id)
        .then(
          () => { this.fetchSeedProducers() }
        )
    }
  },
  created: function () {
    this.fetchSeedProducers()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
