<template>
  <section class="py-5" id="know">
    <div class="container h-100">
      <div class="row h-100">
        <div
          class="
            col
            text-white
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <!-- description -->
          <div class="user-select-none">
            <!-- section title/subtitle/description -->
            <div id="subtitle" class="text-uppercase my-3">
              about the network
            </div>
            <div id="title" class="h1 font-weight-bold my-3">
              <span class="bgc-text my-3">know</span><span>First</span>
            </div>
            <div class="my-3 description">
              with all of this expertise and capability comes an unrivalled
              <br />
              commitment to customer service
            </div>
          </div>
        </div>
          <div
            class="
              col-6
              h-100
              d-flex
              justify-content-center
              flex-column
              align-items-start
            "
          >

          <!-- form -->
            <div class="my-2 form-group w-50 text-gray">
              <input
                type="text"
                class="form-control"
                name="firstName"
                placeholder="Name"
                required
              />
            </div>
            <div class="my-2 form-group w-50 text-gray">
              <input
                type="email"
                class="form-control"
                name="lastName"
                placeholder="email"
                required
              />

            </div>
              <!-- button -->
            <ButtonFull text="subscribe" />
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonFull from "./microcomponents/ButtonFull.vue";
export default {
  name: "SectionKnow",
  components:{
    ButtonFull,
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/colors.scss";
#know {
  height: 300px;
  background-image: url("../assets/img/bg-1.jpg");
  background-size: cover;
  background-position: center;
}
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
  color: white;
  font-weight: bold;
}
.form-control{
  opacity: 0.5;
  color: white;
}
.text-gray {
  color: gray;
}
</style>