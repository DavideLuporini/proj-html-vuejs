<template>
  <header class="my-3 ">
    <div class="row ">
      <div class="col-3">
        <a class="text-uppercase logo-nav text-decoration-none text-white" href="#"
          ><span id="colorized-title">nex</span>gen</a
        >
      </div>
      <div class="links text-uppercase col-9 d-flex justify-content-end">
        <a v-for="link in links" :key="link" href="">{{ link }}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navjumbo",
  data() {
    return {
      links: ["home", "services", "skills", "partners", "blog", "get in touch"],
    };
  },
};
</script>

<style lang="scss">
@import '../assets/sass/colors.scss';
.logo-nav {
  font-weight: bold;
}
#colorized-title {
  background-color: $blue-lagoon-trasparent;
  padding: 5px 0px 5px 15px;
  border-radius: 25px 0px 0px 25px;
  color:  $blue-lagoon;
}
.links {
  a {
    text-decoration: none;
    margin-left: 40px;
    font-weight: bold;
    color: white;
    &:last-child{
        background-color: $blue-lagoon;
    } 
  }
}
a {
  font-size: 0.8rem;
  padding:10px;
  color: white;
}
</style>