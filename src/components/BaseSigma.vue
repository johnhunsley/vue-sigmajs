<template>
    <div id="graph-container"></div>
</template>
<script>
import Sigma from 'sigma'
export default {
  name: 'BaseSigma',
  props: {
    nodes: {
      type: Array,
      default () {
        return []
      }
    },
    edges: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      s: ''
    }
  },
  methods: {
    renderSigma () {
      this.s = new Sigma({
        graph: {
          nodes: this.nodes,
          edges: this.edges
        },
        renderer: {
          container: document.getElementById('graph-container'),
          type: 'canvas'
        }
      })
    }
  },
  mounted: function () {
    this.renderSigma()
  }
}
</script>
<style>
  #graph-container {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
  }
</style>
