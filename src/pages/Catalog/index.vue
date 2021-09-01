<template>
  <main class="catalog">
    <div class="catalog__wrapper">
      <div class="catalog__grid">
        <div class="catalog__search">
          <h1 class="catalog__search-title">Категории</h1>
          <ul class="catalog__search-list">
            <li
              v-for="(category, i) in getCategories"
              :key="i"
              class="catalog__search-item"
              @click="activeCategory(category, i)"
              ref="li"
            >
              {{ category }}
            </li>
          </ul>
        </div>
        <ul class="catalog__list">
          <SingleCard
            v-for="item in filterPositions(currentCategory)"
            :key="item.id"
            :item="item"
            @showModal="showModal(item)"
            @addPosition="addPositions(item)"
          />
        </ul>
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
import SingleCard from "../Main/SingleCard.vue";
import { mapGetters, mapMutations } from "vuex";
import ShowMoreInfo from "../Main/ShowMoreInfo.vue";
export default {
  data() {
    return {
      show: false,
      currentItem: "",
      currentCategory: "Платья",
      isActive: false,
    };
  },
  computed: {
    ...mapGetters([
      "allCatalog",
      "getCategories",
      "getPositions",
      "filterPositions",
    ]),
    currentIndex() {
      return this.getCategories.findIndex(
        (item) => item === this.currentCategory
      );
    },
  },
  methods: {
    ...mapMutations(["addPositions"]),
    showModal(item) {
      this.show = true;
      this.currentItem = item;
      // console.log(this.currentItem);
    },
    activeCategory(category, idx) {
      this.currentCategory = category;
      const currentLi = this.$refs.li[idx];
      const li = [
        ...this.$refs.li.slice(0, currentLi),
        ...this.$refs.li.slice(currentLi + 1),
      ];
      li.forEach((item) => item.classList.remove("active"));
      currentLi.classList.add("active");
    },
  },
  components: {
    SingleCard,
    ShowMoreInfo,
  },
  mounted() {
    this.activeCategory(this.currentCategory, this.currentIndex);
    console.log(this.currentIndex);
  },
};
</script>

<style scoped lang="scss">
.catalog {
  padding-top: 36px;
  padding-bottom: 73px;
  &__wrapper {
    max-width: 1210px;
    padding: 0 15px;
    margin: 0 auto;
  }
  &__grid {
    display: grid;
    grid-template: 1fr/ 1fr 3fr;
    column-gap: 22px;
  }
  &__search {
    border: 2px solid #e5e5e5;
    border-radius: 20px;
    padding: 25px 25px;
    max-height: 500px;
    overflow: auto;
    &-title {
      margin: 0 0 25px;
      font-size: 24px;
    }
    &-list {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    &-item {
      cursor: pointer;
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }

  &__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template: 1fr / 1fr 1fr 1fr;
    gap: 30px;
  }
}
.active {
  font-weight: 700;
}
</style>