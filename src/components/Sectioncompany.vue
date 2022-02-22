<template>
  <section id="company" class="clearfix">
    <div class="dot-bgc-top"></div>
    <div class="dot-bgc-bot"></div>
    <div class="container h-100 py-5">
      <div class="row h-100 d-flex justify-content-center">
        <div
          class="
            col-6
            text-white
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <!-- description -->
          <div>
            <!-- section title/subtitle/description -->
            <div id="subtitle" class="text-uppercase my-3">
              about the network
            </div>
            <div id="title" class="h1 font-weight-bold my-3">
              <span class="bgc-text my-3">The</span>Company
            </div>
            <div class="my-3 description">
              with all of this expertise and capability comes an unrivalled
              <br />
              commitment to customer service
            </div>

            <!-- grafics -->
            <div
              class="
                row
                d-flex
                justify-content-center
                align-items-center
                flex-wrap
                my-4
              "
            >
              <!-- circle with percentage -->
              <div class="col-3 d-inline-flex">
                <div role="progressbar" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100" style="--value:22"></div>
              </div>
              <!-- description -->
              <div class="col-9 d-inline-flex flex-column">
                <span class="col h4 px-2"> Leadership </span>
                <span class="col description px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
                >
              </div>
            </div>
            <div
              class="
                row
                d-flex
                justify-content-center
                align-items-center
                flex-wrap
                my-4
              "
            >
              <!-- circle with percentage -->
              <div class="col-3 d-inline-flex">
                <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="--value:10"></div>
              </div>
              <!-- description -->
              <div class="col-9 d-inline-flex flex-column">
                <span class="col h4 px-2"> Psicology </span>
                <span class="col description px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
                >
              </div>
            </div>
            <div
              class="
                row
                d-flex
                justify-content-center
                align-items-center
                flex-wrap
                my-4
              "
            >
              <!-- circle with percentage -->
              <div class="col-3 d-inline-flex">
                <div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="--value:50"></div>
              </div>
              <!-- description -->
              <div class="col-9 d-inline-flex flex-column">
                <span class="col h4 px-2"> Flexibility </span>
                <span class="col description px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- image -->
        <div class="col-6"></div>
      </div>
    </div>
      <CompanyFooter />
  </section>

</template>

<script>
import CompanyFooter from './CompanyFooter.vue'
export default {
  name: "SectionCompany",
  components:{
    CompanyFooter,
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/colors.scss";
#company {
  background-color: #111117;
  background-image: url("../assets/img/about-5.jpg");
  background-size: 50% 100%;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  &::after {
    display: table;
    content: "";
    clear: both;
  }
  .dot-bgc-top {
    height: 80px;
    width: 180px;
    position: absolute;
    background-image: radial-gradient(
      $blue-lagoon-trasparent 25%,
      transparent 25%
    );
    background-color: transparent;
    background-repeat: repeat;

    background-size: 20px 20px;
    top: -40px;
    right: calc(50% + -90px);
    &:hover{
      background-image: radial-gradient(
      $blue-lagoon 25%,
      transparent 25%
    );
    }
  }
  .dot-bgc-bot {
    height: 80px;
    width: 180px;
    position: absolute;
    background-image: radial-gradient(
      $blue-lagoon-trasparent 25%,
      transparent 25%
    );
    background-color: transparent;
    background-repeat: repeat;
    background-size: 20px 20px;
    bottom: 160px;
    right: calc(50% + -90px);
    &:hover{
      background-image: radial-gradient(
      $blue-lagoon 25%,
      transparent 25%
    );
    }
  }
  #subtitle {
    font-size: 0.7rem;
    color: $blue-lagoon;
  }
  .description {
    font-size: 0.7rem;
    color: grey;
  }
  .bgc-text {
    color: $blue-lagoon;
    background-color: $blue-lagoon-trasparent;
    padding: 5px 10px 5px 10px;
  }
  .dot-perc {
    border: 4px rgba(55, 55, 55, 0.5) solid;
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }
  .perc {
    font-size: 0.7rem;
  }
@keyframes growProgressBar {
  0%, 33% { --pgPercentage: 0; }
  100% { --pgPercentage: var(--value); }
}


div[role="progressbar"] {
  --size: 4rem;
  --fg: #048383;
  --bg: transparent;
  --pgPercentage: var(--value);
  animation: growProgressBar 3s 1 forwards;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: 
    radial-gradient(closest-side, rgba(17,17,23,255) 80%, transparent 0 101%, rgba(17,17,23,255) 0),
    conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0)
    ;
  font-family: Helvetica, Arial, sans-serif;
  font-size: calc(var(--size) / 5);
  color: var(--fg);
}

div[role="progressbar"]::before {
  counter-reset: percentage var(--value);
  content: counter(percentage) '%';
}

}
</style>