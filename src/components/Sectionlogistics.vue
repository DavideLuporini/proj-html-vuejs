<template>
  <section id="logistics" class="py-5">
    <div class="container h-100">
      <div class="row h-100 d-flex justify-content-center align-items-center">
        <div class="col-3 gx-1">
          <div class="card" style="width: 18rem">
            <img src="" class="card-img-top" alt="" />
            <div class="card-body">
              <p id="subtitle" class="text-uppercase">our business area</p>
              <h5 class="card-title h1 text-capitalize">Logistics services</h5>
              <p class="card-text">
                we're leaders in providing logistics services witha set of
                cutting edge technologies and a team of expirienced and renowned
                professionals.
              </p>
              <div class="pillss mb-4">
                <span class="badge rounded text-capitalize">tradition</span>
                <span class="badge rounded mx-3 text-capitalize">quality</span>
                <span class="badge rounded text-capitalize">security</span>
              </div>
              <a href="#" class="btn button-full text-white text-uppercase"
                >read more</a
              >
            </div>
          </div>
        </div>
        <div class="col-3 gx-1">
          <div class="card bg-light rounded" style="width: 18rem">
            <img
              src="../assets/img/gallery-3.jpg"
              class="card-img-top img-fuild px-4 pt-4"
              alt=""
            />
            <div class="card-body px-5">
              <h5 class="card-title text-capitalize h4">tecnology</h5>
              <p class="card-text">
                Focused on developing technologu solutions adapted to our
                client's needs.
              </p>
            </div>
          </div>
        </div>
        <div class="col-3 gx-1">
          <div class="card bg-light rounded" style="width: 18rem">
            <img
              src="../assets/img/gallery-5.jpg"
              class="card-img-top img-fluid px-4 pt-4"
              alt=""
            />
            <div class="card-body px-5">
              <h5 class="card-title text-capitalize h4">transport</h5>
              <p class="card-text">
                We develop operational strategies to improve logistical
                efficiency
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
  name: "Sectioncompany",
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/colors.scss";
#logistics {
  height: 500px;
  background-color: #eef4ed;
  font-size: 0.7rem;
  #subtitle{
    color: $blue-lagoon;
    font-weight: bold;
  }
  .card {
    border: 0;
  }
  .pillss span {
    color: $blue-lagoon;
    background-color: #cce3de;
    font-weight: 400;
    padding: 7px;
  }
}
</style>