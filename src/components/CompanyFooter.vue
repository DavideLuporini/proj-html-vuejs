<template>
  <section class="margin clearfix" id="footer-company">
    <div class="container">
      <div class="text-black background-footer">
        <div class="row h-100 d-flex align-items-center">
          <div v-for="(partner , index) in partners" :key="`partner-${index}`" class="col d-flex justify-content-center">
            <img :src="require(`../assets/img/${partner.logo}`)" class="img-fluid" alt="none">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CompanyFooter",
  data() {
    return {
      partners:[
      {
      logo : 'logo-1.png',
    },
      {
      logo : 'logo-2.png',
    },
      {
      logo : 'logo-3.png',
    },
      {
      logo : 'logo-4.png',
    },
      {
      logo : 'logo-5.png',
    },
    ]
    };
  },
};
</script>

<style lang="scss" scoped>
// footer
#footer-company {
  background-color: rgba(238,244,237,255);
  .background-footer {
    height: 200px;
    img{
      max-width: 100px;
      opacity: 0.3;
      transition: linear 0.5s;
      &:hover{
        opacity: 1;
        transform: scale(1.5);
        transition: linear 0.5s;
      }
    }
  }
}
</style>