<template>
  <section id="link">
    <div class="container h-100">
      <div class="row h-100 d-flex justify-content-center align-items-center">
        <!-- contacts -->
      <div class="col-3">
        <a class="text-uppercase logo text-decoration-none text-white h5" href="#"
          ><span id="colorized-title">nex</span>gen</a
        >
                <div class="my-2">
          A functional HTML Template for Corporate and Business.
        </div>
                  <div id="mail" class="col-12 hours py-3">
            <i class="fas fa-envelope"></i>
            <span class="ps-2">hello@example.it</span>
          </div>
          <div id="cellphone" class="col-12 py-3">
            <i class="fas fa-phone-alt"></i>
            <span class="ps-2">+1(305) 1234-5678</span>
          </div>
          <div id="cellphone" class="col-12 py-3">
            <i class="fas fa-map-marker-alt"></i>
            <span class="ps-2">main evenue</span>
          </div>
                    <ButtonFull text="get in touch"/>
      </div>

        <!-- v-for links -->
        <div
          v-for="(item, index) in links"
          :key="`col${index}-${item}`"
          class="col-3 gx-5"
        >
          <ul class="text-container d-flex flex-column">
            <li role="button"
              class="text-capitalize text-white d-inline-flex"
              v-for="title in 1"
              :key="`title - ${title}`"
            >
              {{ item.title }}
            </li>
            <li role="button" class="d-inline-flex text-capitalize" v-for="link in item.link" :key="`link - ${link}`" >
              {{ link }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonFull from "./microcomponents/ButtonFull.vue";
export default {
  name: "SectionLink",
  components:{
    ButtonFull,
  },
  data() {
    return {
      
      links: [
        {
          title: "about",
          link: [
            "the company",
            "institutional",
            "social & events",
            "innovation",
            "enviroment",
            "tecnology",
          ],
        },
        {
          title: "trasport",
          link: [
            "industrialized",
            "chemicals",
            "packaged liquids",
            "construction",
            "laminated wood",
            "technology",
          ],
        },
        {
          title: "support",
          link: [
            "responsability",
            "term fo use",
            "about cookies",
            "privacy policy",
            "accessibility",
            "information",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/colors.scss';
* {
  color: grey;
}
#link {
  height: 500px;
  background-image: url("../assets/img/bg-10.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  #colorized-title {
  background-color: $blue-lagoon-trasparent;
  padding: 5px 0px 5px 15px;
  border-radius: 25px 0px 0px 25px;
  color:  $blue-lagoon;
}
  ul {
      background-color: rgba(55,55,55,0.5);
      padding: 40px 25px 40px 30px;
      width: 60%;
      border-radius: 30px;

    list-style-type: none;
    li:first-of-type {
      font-size: 1.2rem;
      font-weight: bold;
      &::before {
        content: "";
      }
    }
    li {
      font-size: 0.8rem;
      margin-bottom: 5px;
      &:hover{
        color: white;
      }
      &::before {
        content: "\f054";
        font-weight: 800;
        font-family: "Font Awesome 5 Free";
        margin-right: 5px;
      }
    }
  }
}
</style>