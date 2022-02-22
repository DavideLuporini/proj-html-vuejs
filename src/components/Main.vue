<template>
  <div>
    <SectionLogistics/>
    <SectionCompany/>
    <SectionNews/>
    <SectionKnow/>
    <SectionHelp/>
    <SectionLinks/>
  </div>
</template>

<script>
import SectionLogistics from './SectionLogistics.vue';
import SectionCompany from './SectionCompany.vue';
import SectionNews from './SectionNews.vue';
import SectionKnow from './SectionKnow.vue';
import SectionLinks from './SectionLinks.vue';
import SectionHelp from './SectionHelp.vue';
export default {
  components:{
    SectionLogistics,
    SectionCompany,
    SectionNews,
    SectionKnow,
    SectionLinks,
    SectionHelp,
  },
  name: 'Main',
  props: {
    
  }
}
</script>


<style scoped lang="scss">


</style>