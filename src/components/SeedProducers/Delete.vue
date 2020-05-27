<template>
    <div class="hello">
        <h2>Seed producers</h2>

        <errors-validation :errors="validationErrors" v-if="validationErrors"></errors-validation>
        <errors-notfound v-if="notfoundError"></errors-notfound>

        <div class="form" v-if="notfoundError===false">
            <div class="form-group">
                <label for="name">Nazwa producenta</label>
                <input v-model="seed_producer.name" class="form-control" type="text" id="name" name="name" readonly>
            </div>
            <div class="form-group">
                <label for="name">Opis</label>
                <textarea v-model="seed_producer.description" class="form-control" type="textarea" id="description" name="description" rows="3" readonly></textarea>
            </div>
            <div class="form-group">
                <button @click="deleteSeedProducer" class="btn btn-danger">Usuń</button>
                <router-link v-bind:to="'/seedproducers/'" class="btn btn-success">Anuluj</router-link>            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SeedProducersDelete',
  data () {
    return {
      validationErrors: null,
      notfoundError: false,
      seed_producer: {
        id: '',
        name: '',
        description: ''
      }
    }
  },
  methods: {
    getSeedProducer (id) {
      this.$http.get('http://roslina.lh/api/seedproducers/' + id)
        .then(
          response => response.json(),
          response => {
            if (response.status === 404) {
              this.notfoundError = true
            }
            console.log('Blad: ' + response)
          }
        )
        .then(result => { this.seed_producer = result })
    },
    deleteSeedProducer () {
      this.$http.delete('http://roslina.lh/api/seedproducers/' + this.seed_producer.id, this.seed_producer)
        .then(
          response => { this.$router.push({path: '/seedproducers'}) },
          response => {
            if (response.status === 422) {
              this.validationErrors = response.data.errors
            }
            console.log('Blad: ' + response)
          }
        )
    }
  },
  created: function () {
    this.getSeedProducer(this.$route.params.seed_producer_id)
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
