<template>
  <footer>
      <div class="container">
      <div class="row d-flex justify-content-between">
        <div class="col-6">
          <div role="button" class="hours py-3 "> 
            enjoy the low price. we are tracking any intention of piracy.
          </div>
        </div>
        <div  class="col-6 text-end">
          <div role="button" class="hours py-3 "> 
            &copy;2020<span class="text-uppercase">nexgen</span> is Proudly Powered by <span class="text-lagoon">Codings</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    
  }
}
</script>


<style scoped lang="scss">
@import '../assets/sass/colors.scss';
footer{
  background-color: $blue-navy;
  color:$secondary-color;
  font-size: 0.7rem;
}
.text-lagoon{
  color: $blue-lagoon;
}
</style>