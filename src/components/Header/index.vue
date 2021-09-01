<template>
  <header class="header">
    <div class="header__container">
      <div class="burger__menu"><span></span></div>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__list-item">
            <router-link class="nav__list-link" to="/catalog"
              >Каталог</router-link
            >
          </li>

          <li class="nav__list-item">
            <router-link class="nav__list-link" to="/comments"
              >Отзывы</router-link
            >
          </li>
          <li class="nav__list-item">
            <router-link class="nav__list-link" to="/delivery"
              >Оплата и доставка</router-link
            >
          </li>
          <li class="nav__list-item">
            <router-link class="nav__list-link" to="/"
              ><img class="logo" src="@/assets/icons/logo.png" alt=""
            /></router-link>
          </li>

          <li class="nav__list-item card-item">
            <router-link class="nav__list-link" to="/cart"
              ><img class="cart" src="@/assets/icons/cart.png" alt=""
            /></router-link>
            <div class="cart-count" v-if="allCount > 0">{{ allCount }}</div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["allCount"]),
};
</script>

<style scoped lang="scss">
.header {
  background-color: #9ecdd6;
  padding: 15px 0;
  &__container {
    max-width: 950px;
    padding: 0 15px;
    margin: 0 auto;
  }
}
.nav {
  &__list {
    display: grid;
    grid-template: 1fr / 0.3fr 0.3fr 0.6fr 1fr 1fr;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    &-link {
      color: #fff;
      text-decoration: none;
      font-weight: 700;
      display: block;
    }
    &-item {
      &:last-child {
        /* justify-self: center; */
        justify-self: end;
        position: relative;
      }
    }
  }
  &__mobile {
    display: none;
  }
}
.cart-count {
  width: 20px;
  height: 20px;
  background-color: #00a9c8;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: -10px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
}
.burger__menu {
  width: 30px;
  height: 16px;
  margin-right: 20px;
  position: relative;
  display: none;
  &:before {
    position: absolute;
    content: "";
    background-color: #fff;
    width: 100%;
    height: 2px;
    top: 0;
    left: 0;
    border-radius: 10px;
  }
  &:after {
    position: absolute;
    content: "";
    background-color: #fff;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 2px;
    border-radius: 10px;
  }
  & span {
    position: absolute;
    background-color: #fff;
    width: 100%;
    height: 2px;
    top: 7px;
    left: 0;
    border-radius: 10px;
  }
}
</style>
