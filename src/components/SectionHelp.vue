<template>
  <section class="py-5" id="help">
    <div class="container">
      <div class="row">
        <!-- form -->
        <!-- title -->
        <div class="col-7">
          <div
            class="
            user-select-none
              row
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
          >
            <div id="subtitle" class="col text-uppercase my-2">
              send a message
            </div>
            <div id="title" class="col text-uppercase h2 my-2">
              get in <span class="bgc-text">touch</span>
            </div>
            <div id="paragraph" class="col text-gray my-2">
              We'll respond to your message as soon as possible.
            </div>
          </div>
          <div class="row g-3 py-3">
            <div class="col">
              <input type="text" class="form-control" placeholder="Name" />
            </div>
            <!-- email -->
            <div class="col">
              <input type="email" class="form-control" placeholder="email" />
            </div>
          </div>
          <div class="row g-3">
            <div class="col">
              <input type="tel" class="form-control" placeholder="Phone" />
            </div>
            <div class="col">
              <select id="inputState" class="form-select">
                <option selected>more info</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div class="col my-2">
            <div class="form-floating">
              <textarea class="form-control" placeholder="message"></textarea>
              <label for="floatingTextarea">message</label>
            </div>
          </div>
          <ButtonFull text="send" />
        </div>
        <!-- INFO -->
        <div class="col-5">
          <div class="h3 text-capitalize mb-4">example inc.</div>
          <p  class="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p class="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
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
            <span class="ps-2">main evenue,982</span>
          </div>
              <a v-on:click="seen = !seen"
      type="button "
      class="btn btn-md button-empty rounded text-uppercase"
    >
    wiev map
    </a>
      </div>
        <div v-if="seen" class="map-container  my-5 p-2">
          <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.0613657364192!2d-74.13695488472734!3d40.87052747931497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fecf4c14be87%3A0x3e642ad368eb47f3!2s982%20Main%20Ave%2C%20Passaic%2C%20NJ%2007055%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1645535469623!5m2!1sit!2sit" class="col" width="100%" height="400"  allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
    </div>
  </section>
</template>

<script>
import ButtonFull from "./microcomponents/ButtonFull.vue";

export default {
  name: "SectionHelp",
  components:{
    ButtonFull,

  },
  data(){
    return{
      seen:false,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/colors.scss";
#subtitle {
  font-size: 0.7rem;
  color: $blue-lagoon;
  font-weight: bold;
}
#title {
  font-weight: bold;
}
.bgc-text {
  background-color: $blue-lagoon-trasparent;
  padding: 5px 10px;
  color: $blue-lagoon;
  font-weight: bold;
}
button{
    color: $blue-lagoon;
}
.text-secondary{
  font-size: 0.8rem;
  color:$secondary-color;
}
.map-container{
  border: 3px solid $blue-lagoon;
  background-color: $blue-lagoon-trasparent;
  transition: 1s linear ;
}
.button-empty{
      border: $blue-lagoon 2px solid;
      color: $blue-lagoon;
      &:hover{
        background-color: $blue-lagoon;
        color: white;
      }
    }
</style>