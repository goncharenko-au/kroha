<template>
  <li class="card">
    <div class="card__inner">
      <div class="card__img">
        <img :src="item.img" alt="" />
        <div class="card__sale" v-if="item.sale">-{{ item.sale }}%</div>
      </div>
      <h4 class="card__name">{{ item.title }}</h4>
      <span class="card__price_new">{{ item.newPrice }} ₽</span>
      <span class="card__price_old" v-if="item.oldPrice"
        >{{ item.oldPrice }} ₽</span
      >
      <div class="card__btns">
        <OutlineButton class="card__btn" @clickBtn="$emit('showModal')"
          >Смотреть</OutlineButton
        >
        <AccentButton class="card__btn" @clickBtn="$emit('addPosition')"
          >В корзину</AccentButton
        >
      </div>
    </div>
  </li>
</template>
<script>
import AccentButton from "../../components/Buttons/AccentButton.vue";
import OutlineButton from "../../components/Buttons/OutlineButton.vue";

export default {
  props: ["item"],
  components: { AccentButton, OutlineButton },
};
</script>
<style scoped lang="scss">
.card {
  &__inner {
    background: #ffffff;
    border: 2px solid #e5e5e5;
    border-radius: 20px;
    padding-bottom: 30px;
    transition: all 0.3s linear;
    &:hover {
      box-shadow: 2px 0 25px 5px #ccc;
      transition: all 0.3s linear;
    }
  }
  &__img {
    max-width: 100%;
    height: 340px;
    margin-bottom: 15px;
    position: relative;
    & img {
      width: 100%;
      height: 100%;
      border-radius: 20px 20px 0 0;
      object-fit: cover;
    }
  }
  &__sale {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: #494848;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    padding: 5px;
  }
  &__name {
    padding-left: 15px;
    padding-right: 15px;
    font-weight: 400;
    margin: 0 0 8px;
  }
  &__price_new {
    font-weight: 700;
    margin-right: 15px;
    padding-left: 15px;
  }
  &__price_old {
    text-decoration: line-through;
    padding-right: 15px;
  }
  &__btns {
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media screen and (max-width: 991px) {
  .card {
    &__img {
      height: 315px;
    }
  }
}
</style>