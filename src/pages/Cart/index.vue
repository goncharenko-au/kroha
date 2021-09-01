<template>
  <main class="cart">
    <div class="cart__wrapper" v-if="getPositions.length > 0">
      <div class="cart__inner">
        <span class="cart__title">Корзина заказа</span>
        <ul class="card__list">
          <CartItem
            v-for="position in getPositions"
            :key="position.id"
            :position="position"
          />
        </ul>
      </div>
      <div class="cart__result" v-if="getPositions.length > 0">
        <span class="cart__result-title">Итого: {{ allAmount }} ₽</span>
        <span class="cart__result-positions">{{ allCount }} товара </span>
        <span class="cart__result-sale">Сумма скидки: {{ allSale }} ₽</span>
        <AccentButton class="cart__result-btn" @clickBtn="order = true"
          >Оформить заказ</AccentButton
        >
      </div>
      <div class="cart__order" v-if="order">
        <span class="cart__order-title">Оформление заказа</span>
        <form class="cart__form">
          <input
            type="text"
            class="cart__input"
            placeholder="Имя"
            v-model="deliveryData.name"
            required
          />
          <input
            type="text"
            class="cart__input"
            placeholder="Телефон"
            v-model="deliveryData.phone"
            required
          />
          <input
            type="text"
            class="cart__input"
            placeholder="Город"
            v-model="deliveryData.city"
            required
          />
          <textarea
            class="cart__textarea"
            placeholder="Адрес"
            v-model="deliveryData.address"
            required
          ></textarea>
        </form>
        <div class="cart__receipt">
          <span class="cart__receipt-title">Способ получения:</span>
          <label for="delivery" class="cart__receipt-label delivery">
            <input
              type="radio"
              id="delivery"
              name="receipt"
              v-model="deliveryData.delivery"
              value="Доставка"
            />
            Доставка
          </label>
          <label for="shop" class="cart__receipt-label">
            <input
              type="radio"
              id="shop"
              name="receipt"
              v-model="deliveryData.delivery"
              value="Забрать в магазине"
            />
            Забрать в магазине
          </label>
        </div>
      </div>
      <div class="cart__bottom" v-if="order">
        <div class="">
          <span class="cart__bottom-sum">Сумма заказа: {{ allAmount }} ₽</span>
          <span
            class="cart__bottom-delivery"
            v-if="deliveryData.delivery === 'Доставка'"
            >Доставка: {{ deliveryRent }} ₽</span
          >
          <span class="cart__bottom-res">Итого: {{ resultSum }}₽</span>
        </div>
        <div class="cart__bottom-btns">
          <OutlineButton class="cart__bottom-btn"
            ><router-link :to="{ path: '/catalog' }"
              >Продолжить покупки</router-link
            >
          </OutlineButton>
          <AccentButton
            class="cart__bottom-btn"
            @clickBtn="sendData(deliveryData)"
            >Заказать</AccentButton
          >
        </div>
      </div>
    </div>
    <div class="empty-cart" v-else-if="getPositions.length <= 0">
      Корзина пуста
    </div>
  </main>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import CartItem from "./CartItem.vue";
import AccentButton from "../../components/Buttons/AccentButton.vue";
import OutlineButton from "../../components/Buttons/OutlineButton.vue";
export default {
  data() {
    return {
      deliveryData: {
        name: "",
        phone: "",
        city: "",
        address: "",
        delivery: "Доставка",
      },
      order: false,
      deliveryRent: 500,
    };
  },
  computed: {
    ...mapGetters(["getPositions", "allCount"]),
    allAmount() {
      let pricePositions = this.getPositions.map((item) => {
        return +item.newPrice * item.count;
      });
      return pricePositions.reduce((sum, cur) => sum + cur);
    },
    allSale() {
      let count = 0;
      this.getPositions.map((item) => {
        if (item.oldPrice) {
          return (count += (item.oldPrice - item.newPrice) * item.count);
        }
      });
      return count;
    },
    resultSum() {
      return this.deliveryData.delivery === "Доставка"
        ? this.allAmount + this.deliveryRent
        : this.allAmount;
    },
  },
  methods: {
    ...mapMutations(["sendData"]),
  },
  components: { CartItem, AccentButton, OutlineButton },
};
</script>

<style scoped lang="scss">
.cart {
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px 137px;

  &__wrapper {
    margin-top: 60px;
    border: 2px solid #eeeeee;
    border-radius: 30px;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__inner {
    padding: 35px 25px 25px;
    border: 2px solid #eeeeee;
    border-radius: 25px;
    width: 60%;
    margin-bottom: 50px;
  }
  &__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  &__result {
    padding: 35px 20px;
    border: 2px solid #eeeeee;
    border-radius: 25px;
    width: 38%;
    height: 235px;
    &-positions {
      margin-bottom: 15px;
      display: block;
    }
    &-sale {
      margin-bottom: 20px;
      display: block;
    }
    &-btn {
      display: block;
      margin: 0 auto;
      font-family: "Montserrat", sans-serif;
    }
  }
  &__order {
    width: 60%;
    padding-top: 40px;
    padding-bottom: 40px;
    border-top: 2px solid#EEEEEE;
    border-bottom: 2px solid#EEEEEE;
  }
  &__form {
    width: 265px;
    margin-bottom: 28px;
  }
  &__input {
    margin-bottom: 10px;
    &::placeholder {
      color: rgba(196, 196, 196, 0.9);
      font-family: "Montserrat", sans-serif;
    }
  }
  &__input,
  &__textarea {
    width: 100%;
    border: 1.5px solid #eeeeee;
    border-radius: 5px;
    padding: 10px;
  }
  &__textarea {
    resize: none;
    height: 70px;
    &::placeholder {
      color: rgba(196, 196, 196, 0.9);
      font-family: "Montserrat", sans-serif;
    }
  }
  &__receipt {
    &-title {
      font-weight: 700;
      margin-right: 55px;
    }
    &-label {
      &.delivery {
        margin-right: 20px;
      }
    }
  }
  &__bottom {
    padding-top: 32px;
    display: grid;
    grid-template: 1fr / 1.2fr 1fr;
    align-items: center;
    &-btns {
      display: flex;
      align-items: center;
    }
    &-btn {
      padding: 5px;
      width: 166px;
      height: 47px;
      font-family: "Montserrat", sans-serif;
      &:first-child {
        margin-right: 29px;
      }
      & a {
        color: rgba(196, 196, 196, 0.9);
        text-decoration: none;
      }
    }
    &-sum,
    &-delivery {
      display: block;
      margin-bottom: 17px;
    }
    &-res {
      font-weight: 700;
    }
  }
}
.cart__title,
.cart__result-title,
.cart__order-title {
  font-size: 24px;
  display: block;
  font-weight: 700;
  margin-bottom: 20px;
}
.empty-cart {
  padding-top: 40px;
  text-align: center;
  font-size: 16px;
}
</style>