<template>
    <div class="hello">
        <h2>Seed producers</h2>

        <errors-validation :errors="validationErrors" v-if="validationErrors"></errors-validation>

        <div class="form">
            <div class="form-group">
                <label for="name">Nazwa producenta</label>
                <input v-model="seed_producer.name" class="form-control" type="text" id="name" name="name">
            </div>
            <div class="form-group">
                <label for="name">Opis</label>
                <textarea v-model="seed_producer.description" class="form-control" type="textarea" id="description" name="description" rows="3"></textarea>
            </div>
            <div class="form-group">
                <button @click="saveSeedProducer" class="btn btn-primary">Zapisz</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SeedProducersAdd',
  data () {
    return {
      validationErrors: null,
      seed_producer: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    saveSeedProducer () {
      this.$http.post('http://roslina.lh/api/seedproducers', this.seed_producer)
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
