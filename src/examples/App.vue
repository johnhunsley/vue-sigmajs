<template>
  <div class="container">
    <div class="Sigma">
      <h1 style="text-align:center;">Basic Example</h1>
      <base-sigma :nodes='nodes' :edges='edges'></base-sigma>
    </div>
  </div>
</template>

<script>
import BaseSigma from './../components/BaseSigma.vue'

export default {
  components: {
    BaseSigma
  },
  data () {
    return {
      N: 50,
      E: 100,
      nodes: [],
      edges: []
    }
  },
  methods: {
    populate: function () {
      // Generate a random graph:
      for (var i = 0; i < this.N; i++) {
        this.nodes.push({
          id: 'n' + i,
          label: 'Node ' + i,
          x: Math.random(),
          y: Math.random(),
          size: Math.random(),
          color: '#666'
        })
      }

      for (var j = 0; j < this.E; j++) {
        this.edges.push({
          id: 'e' + j,
          source: 'n' + (Math.random() * this.N | 0),
          target: 'n' + (Math.random() * this.N | 0),
          size: Math.random(),
          color: '#ccc'
        })
      }
    }
  },
  mounted: function () {
    this.populate()
  }
}
</script>

<style>
.container {
    max-width: 800px;
    height: 800px;
    margin: 0 auto;
}
h1 {
    font-family: 'Helvetica', Arial;
    color: #464646;
    text-transform: uppercase;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 15px;
    font-size: 28px;
    margin-top: 0;
}
.Sigma {
    padding: 20px;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4);
    border-radius: 20px;
    margin: 50px 0;
}
</style>
