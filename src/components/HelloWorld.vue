<template>
  <div class="wrapper">
    <div class="header">
      <h1>{{msg}}</h1>
    </div>
      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '一线生活通'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  @import "../assets/styles/mixins.scss";
  @import '../assets/styles/variables.scss';
  .wrapper{
  .header{
    @include vh-center;
    height:$headerHeight ;
    background-color: $defaultBgColor ;
    h1 {
      font-size: .16rem;
    }
  }
}
</style>
