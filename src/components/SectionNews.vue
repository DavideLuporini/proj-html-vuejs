<template>
  <section id="news" class="my-5">
    <div class="container">
      <div
        class="row d-flex flex-column justify-content-center align-items-center"
      >
        <div id="subtitle" class="col text-uppercase my-2">
          our editorial content
        </div>
        <div id="title" class="col text-uppercase h2 my-2">
          lastest <span class="bgc-text">news</span>
        </div>
        <div id="paragraph" class="col text-gray my-2 d-flex justify-content-between">
          every week we publish content about what is best in the business
          world.
              <a @click="changeCardShowed()"
      type="button "
      class="btn btn-md button-full rounded text-white text-uppercase"
    >
    See all
    </a>
        </div>
      </div>

      <!-- card sections -->
      <div class="row">
          <div v-for="(card , index) in cards" :key="`card number ${index}`" class="col-3 user-select-none" :class="cardShowed <= index ? '  news-hidden ' : ' d-block '">
            <div class="card my-5">
                 <img class="img-fluid" :src="require(`../assets/img/${card.img}`)" alt="none"> 
              <div class="card-body">
                <p class="card-text text-center">
                  {{card.text}}
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionNews",

  data() {
    return {
        cardShowed:3,
      cards: [
        {
          img: "news-1.jpg",
          text: "Incrising creativity is possible for everyone",
        },
        {
          img: "news-2.jpg",
          text: "Becouse market research is part of the business plan",
        },
        {
          img: "news-3.jpg",
          text: "Working from home is now a trend",
        },
        {
          img: "news-4.jpg",
          text: "Working from home is now a trend",
        },
        {
          img: "news-5.jpg",
          text: "Working from home is now a trend",
        },
        {
          img: "news-3.jpg",
          text: "Working from home is now a trend",
        },
        {
          img: "news-2.jpg",
          text: "Working from home is now a trend",
        },
        {
          img: "news-1.jpg",
          text: "Working from home is now a trend",
        },
      ],
    };
  },
  methods:{
    changeCardShowed(){
      if(this.cardShowed === 3){
      this.cardShowed = 8;
      } else{
        this.cardShowed = 3;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/colors.scss";
section {
  background-color: #ffffff;
  #subtitle {
    font-size: 0.7rem;
    color: $blue-lagoon;
    font-weight: bold;
  }
  .bgc-text {
    background-color: $blue-lagoon-trasparent;
    padding: 5px 10px;
    color: $blue-lagoon;
  }
  .text-gray {
    color: gray;
  }
.button-full{
      background-color: $blue-lagoon;
    }
  // cards
  .card{
      max-width: 300px;
      border-radius:25px;
      overflow: hidden;
      transition: 0.3s linear;
      &:hover{
        filter: brightness(1.5);
        box-shadow: 5px 5px 15px 5px $blue-lagoon;
        transition: 0.3s linear;
      }
img{
          filter: brightness(0.5);
}
      .card-body{
          position:absolute;
          bottom: 20px;
          color: white;

      }
      .card-text{
          font-weight: bold;
      }
  }
  .news-hidden{
    display:none;
  }
}
</style>