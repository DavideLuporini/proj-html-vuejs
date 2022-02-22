<template>
  <header>
    <div class="container">
      <div class="row d-flex justify-content-between">
        <div class="col-3">
          <div class="hours py-3 "> 
            Open hours: Mon - Sat - 9:00 - 18:00
          </div>
        </div>
        <div class="col-7 d-flex align-items-center justify-content-end">
          <div id="cellphone" class="col-3 py-3 d-inline-flex justify-content-end">
           <i class="fas fa-phone-alt"></i>
           <span class="ps-2">+1(305) 1234-5678</span>
          </div>
          <div id="mail" class="col-3 hours py-3 d-inline-flex justify-content-end"> 
            <i class="fas fa-envelope"></i>
            <span class="ps-2">hello@example.it</span>
          </div>
          <div id="social" class="col-2 hours py-3 d-inline-flex justify-content-between justify-content-end">
            <i class="fab fa-facebook-f ps-5"></i> 
            <i class="fab fa-twitter"></i>
            <i class="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </div>

  </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
    
  },
  data(){
    return{
    icons:[
      {
      classIcon : 'fa-facebook-f',
    },
      {
      classIcon : 'fa-twitter',
    },
      {
      classIcon : 'fa-linkedin-in',
    },
    ]
  }
  }
}
</script>


<style scoped lang="scss">
@import '../assets/sass/colors.scss';
header{
  background-color: $blue-navy;
  color: $secondary-color;
  font-size: 0.7rem;
}
  span{
    line-height: 1;
  }

</style>