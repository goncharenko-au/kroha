<template>
  <TemplateModal @close="$emit('closeModal')">
    <div class="modal__body">
      <div class="modal__img">
        <img :src="currentItem.img" alt="" />
      </div>
      <div class="modal__descr">
        <h1 class="modal__descr-title">{{ currentItem.title }}</h1>
        <div class="modal__descr-prices">
          <span class="modal__descr-new-price"
            >{{ currentItem.newPrice }} ₽</span
          >
          <span class="modal__descr-old-price" v-if="currentItem.oldPrice"
            >{{ currentItem.oldPrice }} ₽</span
          >
        </div>
        <select name="" id="" class="modal__descr-sizes">
          <option value="" class="modal__descr-size">Размер 1</option>
        </select>
        <PaleButton style="width: 100%" @clickBtn="addPositions(currentItem)"
          >В корзину</PaleButton
        >
        <div class="modal__descr-text">
          <span>Описание:</span>
          {{ currentItem.descr }}
        </div>
      </div>
    </div>
  </TemplateModal>
</template>
<script>
import { mapMutations } from "vuex";
import TemplateModal from "../../components/TemplateModal";
import PaleButton from "../../components/Buttons/PaleButton.vue";
export default {
  props: {
    currentItem: {
      type: Object,
      require: true,
    },
  },
  components: {
    TemplateModal,
    PaleButton,
  },
  methods: mapMutations(["addPositions"]),
};
</script>
<style scoped lang="scss">
.modal {
  &__body {
    display: flex;
    max-width: 100%;
    border: 2px solid #eeeeee;
    border-radius: 30px;
  }
  &__img {
    max-width: 495px;
    width: 100%;
    height: 580px;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 30px 0 0 30px;
    }
  }
  &__descr {
    padding-left: 58px;
    padding-right: 36px;
    &-title {
      margin: 0 0 25px;
      // font-size: 14px;
    }
    &-prices {
      font-size: 18px;
      border-bottom: 2px solid #c4c4c4;
      padding-bottom: 25px;
      margin-bottom: 35px;
    }
    &-new-price {
      font-weight: 700;
      margin-right: 40px;
    }
    &-old-price {
      text-decoration: line-through;
    }
    &-sizes {
      width: 100%;
      display: block;
      background-color: #ffffff;
      border: 1.5px solid #eeeeee;
      border-radius: 5px;
      padding: 10px;
      color: rgba(196, 196, 196, 0.9);
      font-family: "Montserrat", sans-serif;
      margin-bottom: 30px;
    }
    &-text {
      margin-top: 35px;
      & span {
        display: block;
        margin-bottom: 20px;
      }
    }
  }
}
</style>