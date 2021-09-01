<template>
  <main class="first-screen">
    <div class="container">
      <div class="first-screen__img">
        <img src="../../assets/img/main.jpg" alt="" />
      </div>
      <div class="sale">
        <div class="sale__wrapper">
          <h2 class="sale__title title">Акции</h2>
          <ul class="sale__list">
            <SingleCard
              v-for="item in allSales"
              :key="item.id"
              :item="item"
              @showModal="showModal(item)"
              @addPosition="addPositions(item)"
            />
          </ul>
        </div>
      </div>
    </div>
    <ShowMoreInfo
      v-if="show"
      :currentItem="currentItem"
      @closeModal="show = false"
    />
  </main>
</template>
<script>
import SingleCard from "./SingleCard.vue";
import ShowMoreInfo from "./ShowMoreInfo.vue";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      show: false,
      currentItem: "",
    };
  },
  methods: {
    ...mapMutations(["addPositions"]),
    showModal(item) {
      this.show = true;
      this.currentItem = item;
      console.log(this.currentItem);
    },
  },
  computed: {
    ...mapGetters(["allCatalog"]),
    allSales() {
      return this.allCatalog.filter((item) => item.sale);
    },
  },
  components: { SingleCard, ShowMoreInfo },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 15px;
}
.nav {
  padding-top: 30px;
  padding-bottom: 30px;
  &__list {
    max-width: 930px;
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
}

.first-screen__img {
  margin-top: 40px;
  text-align: center;
  margin-bottom: 58px;
  max-width: 1228px;
  & img {
    width: 100%;
  }
}
.sale {
  border: 2px solid #eeeeee;
  border-radius: 30px;
  max-width: 1245px;
  padding: 20px 35px;
  margin: 20px auto 108px;
  position: relative;
  &__title {
    margin-bottom: 28px;
  }
  &__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template: 1fr / repeat(4, 1fr);
    -moz-column-gap: 30px;
    column-gap: 30px;
    row-gap: 20px;
  }
}

@media screen and (max-width: 1220px) {
  .sale {
    &__list {
      grid-template: 1fr / repeat(3, 1fr);
    }
  }
}
@media screen and (max-width: 991px) {
  .sale__list {
    column-gap: 10px;
    row-gap: 15px;
  }
}
@media screen and (max-width: 900px) {
  .sale {
    padding: 20px;
  }
}
</style>