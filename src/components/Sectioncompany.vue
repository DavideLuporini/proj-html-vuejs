<template>
  <section id="company">
      <div class="dot-bgc-top"></div>
      <div class="dot-bgc-bot"></div>
    <div class="container h-100">
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
            <div class="my-3 description" >
              with all of this expertise and capability comes an unrivalled
              <br />
              commitment to customer service
            </div>

            <!-- grafics -->
            <div class="row d-flex justify-content-center align-items-center flex-wrap">
                <!-- circle with percentage -->
            <div class="col-3 d-inline-flex">
              <div class="my-5">
                <span class="col-3">
                  <span class="h1 circle dot-perc px-3 py-2"
                    >0<span class="perc">%</span></span
                  >
                </span>
              </div>
            </div>
            <!-- description -->
              <div class="col-9 d-inline-flex flex-column">
                <span class="col h4 px-2"> Leadership </span>
                <span  class="col description px-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>

            </div>
            <div class="row d-flex justify-content-center align-items-center flex-wrap">
                <!-- circle with percentage -->
            <div class="col-3 d-inline-flex">
              <div class="my-5">
                <span class="col-3">
                  <span class="h1 circle dot-perc px-3 py-2"
                    >0<span class="perc">%</span></span
                  >
                </span>
              </div>
            </div>
            <!-- description -->
              <div class="col-9 d-inline-flex flex-column">
                <span class="col h4 px-2"> Psicology </span>
                <span  class="col description px-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>

            </div>
            <div class="row d-flex justify-content-center align-items-center flex-wrap">
                <!-- circle with percentage -->
            <div class="col-3 d-inline-flex">
              <div class="my-5">
                <span class="col-3">
                  <span class="h1 circle dot-perc px-3 py-2"
                    >0<span class="perc">%</span></span
                  >
                </span>
              </div>
            </div>
            <!-- description -->
              <div class="col-9 d-inline-flex flex-column">
                <span class="col h4 px-2"> Flexibility </span>
                <span  class="col description px-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </div>

            </div>
          </div>
        </div>

        <!-- image -->
        <div class="col-6"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/sass/colors.scss";
#company {
  height: 700px;
  background-color: #111117;
  background-image: url("../assets/img/about-5.jpg");
  background-size: 50% 100%;
  background-position-x: 100%;
  background-repeat: no-repeat;
  position: relative;
  .dot-bgc-top{
      height: 80px;
      width: 180px;
      position: absolute;
      background-image: radial-gradient($blue-lagoon-trasparent 25%, transparent 25%),;
        background-color: transparent;
        background-repeat: repeat;

        background-size: 20px 20px;
        top: -40px;
        right: calc(50% + -90px);
  }
  .dot-bgc-bot{
      height: 80px;
      width: 180px;
      position: absolute;
      background-image: radial-gradient($blue-lagoon-trasparent 25%, transparent 25%),;
        background-color: transparent;
        background-repeat: repeat;

        background-size: 20px 20px;
        bottom: -40px;
        right: calc(50% + -90px);
  }
  #subtitle {
    font-size: 0.7rem;
    color: $blue-lagoon;
  }
  .description{
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
}
</style>