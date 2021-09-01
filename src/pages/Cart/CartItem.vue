<template>
  <li class="position">
    <div class="position__img">
      <img :src="position.img" alt="" />
    </div>
    <div class="position__descr">
      <h3 class="position__title">{{ position.title }}</h3>
      <div class="position__row">
        <div class="position__prices">
          <span class="position__newprice">{{ position.newPrice }} ₽</span>
          <span class="position__oldprice" v-if="position.oldPrice">
            {{ position.oldPrice }} ₽</span
          >
        </div>
        <div class="position__count">
          <span class="position__count-number">{{ position.count }}</span>
          <div class="position__count-arrows">
            <div class="position__count-plus" @click="addCount">&plus;</div>
            <div class="position__count-minus" @click="deleteCount">
              &minus;
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["position"],
  methods: {
    ...mapMutations(["deletePosition"]),
    addCount() {
      return this.position.count++;
    },
    deleteCount() {
      if (this.position.count > 1) {
        this.position.count--;
      } else {
        this.deletePosition(this.position);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.position {
  display: flex;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  &__title {
    margin: 0 0 10px;
    font-size: 14px;
    font-weight: 400;
  }
  &__img {
    width: 164px;
    height: 152px;
    margin-right: 30px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__prices {
    font-size: 18px;
  }
  &__newprice {
    font-weight: 700;
    margin-right: 15px;
  }
  &__oldprice {
    text-decoration: line-through;
  }
  &__row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__descr {
    width: 67%;
  }
  &__count {
    padding: 8px 0;
    border: 2px solid #eeeeee;
    border-radius: 5px;
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    width: 70px;
    position: relative;
    &-number {
      padding-left: 14px;
      /* margin-right: 15px; */
      display: block;
    }
    &-arrows {
      background-color: #cac9c9;
      padding-right: 5px;
      padding-left: 5px;
      position: absolute;
      right: 10px;
      cursor: pointer;
    }
    &-plus,
    &-minus {
      line-height: 15px;
      text-align: center;
      color: #505050;
    }
  }
}
</style>