<template>
  <section class="jumbo">
    <div class="container h-100 text-white">
      <Navjumbo />
      <div class="row h-100 d-flex justify-content-end align-items-center py-5">
        <div class="col-5 d-flex flex-column">
          <div class="col title-jumbo">
            <span class="text-capitalize">logistics</span><br />
            that goes <br />further.
          </div>
          <div class="col">
            For 20 year woring with the most<br> innovatein the field of transport.
          </div>
          <div class="col-7 d-flex justify-content-between my-5">
            <button type="button " class="btn btn-md button-full rounded text-white text-uppercase">
              get in touch
            </button>
            <button type="button " class="btn btn-md button-empty rounded text-white text-uppercase">
              read more
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navjumbo from "./Navjumbo.vue";
export default {
  name: "Jumbo",
  components: {
    Navjumbo,
  },
  props: {},
  data() {
    return {};
  },
};
</script>


<style scoped lang="scss">
@import "../assets/sass/colors.scss";
.jumbo {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/img/jumbo.jpg");
  padding-top: 10px;
  padding-bottom: 10px;
  .title-jumbo {
    font-size: 4rem;
    font-weight: 800;
    span {
      background: linear-gradient(
        transparent 50%,
        $blue-lagoon 50%,
        $blue-lagoon 85%,
        transparent 85%
      );
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 20%;
      padding: 10px;
    }
  }
  button{
    font-weight: bold;
  }
}
</style>
