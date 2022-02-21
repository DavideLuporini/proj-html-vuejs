<template>
  <div>
    <Sectionlogistics/>
    <Sectioncompany/>
  </div>
</template>

<script>
import Sectionlogistics from './Sectionlogistics.vue'
import Sectioncompany from './Sectioncompany.vue'
export default {
  components:{
    Sectionlogistics,
    Sectioncompany,
  },
  name: 'Main',
  props: {
    
  }
}
</script>


<style scoped lang="scss">


</style>
