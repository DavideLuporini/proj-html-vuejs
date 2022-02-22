<template>
  <header class="my-3">
    <div class="row">
      <div class="col-3">
        <a
          class="text-uppercase logo-nav text-decoration-none text-white h5"
          href="#"
          ><span id="colorized-title">nex</span>gen</a
        >
      </div>
      <div class="links text-uppercase col-9 d-flex justify-content-end">
        <a v-for="link in links" :key="link" href="">{{ link }}</a>
        <ButtonFull text="get in touch" />
      </div>
    </div>
  </header>
</template>

<script>
import ButtonFull from "./microcomponents/ButtonFull.vue";
export default {
  name: "Navjumbo",
  components:{
    ButtonFull,
  },
  data() {
    return {
      links: ["home", "services", "skills", "partners", "blog"],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/sass/colors.scss";
.logo {
  font-weight: bold;
}
#colorized-title {
  background-color: $blue-lagoon-trasparent;
  padding: 5px 0px 5px 15px;
  border-radius: 25px 0px 0px 25px;
  color: $blue-lagoon;
}
.links {
  a {
    text-decoration: none;
    margin-left: 40px;
    font-weight: bold;
    color: white;
    transition: 0.3s linear;
    &:hover{
      color: white;
      background-color: $blue-lagoon;
      transition: 0.3s linear;
    }
  }
}
a {
  font-size: 0.8rem;
  padding: 10px;
  color: white;
}
</style>