
<template>
  <TemplateModal @close="$emit('close')">
    <h1 class="new-comment__title">Оставьте комментарий о Вашей покупке</h1>
    <form action="new-comment__form">
      <input
        type="text"
        class="new-comment__input"
        placeholder="Ваше имя"
        v-model="newComment.name"
      />
      <input
        type="text"
        class="new-comment__input"
        placeholder="Достоинства"
        v-model="newComment.worth"
      />
      <input
        type="text"
        class="new-comment__input"
        placeholder="Недостатки"
        v-model="newComment.limitations"
      />
      <label for="assessment">
        Оценка товара
        <div class="new-comment__assessment" id="assessment">
          <div class="new-comment__stars">
            <svg
              ref="star"
              v-for="star in 5"
              :key="star"
              class="new-comment__star"
              @click="setStar(star)"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="1280.000000pt"
              height="1216.000000pt"
              viewBox="0 0 1280.000000 1216.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,1216.000000) scale(0.100000,-0.100000)"
                fill="#adadad"
                stroke="none"
              >
                <path
                  d="M5890 10598 c-332 -755 -736 -1674 -898 -2043 -161 -368 -295 -671
-297 -673 -2 -2 -308 -25 -682 -52 -373 -27 -1054 -76 -1513 -109 -459 -34
-1087 -79 -1395 -101 -308 -22 -585 -43 -615 -46 l-54 -6 49 -47 c28 -25 336
-300 684 -611 349 -311 806 -718 1016 -905 1267 -1130 1560 -1391 1572 -1400
17 -13 74 228 -542 -2265 -256 -1036 -464 -1887 -463 -1890 2 -4 869 499 1928
1117 1058 618 1931 1122 1940 1120 8 -2 398 -242 865 -532 468 -291 1165 -724
1550 -963 385 -239 811 -504 947 -588 135 -85 249 -154 253 -154 4 0 4 17 0
38 -6 34 -411 1897 -776 3568 -87 402 -159 738 -159 747 0 13 649 563 2997
2542 258 217 261 220 230 227 -18 4 -1011 104 -2207 223 -1196 119 -2184 220
-2196 225 -15 6 -62 111 -199 446 -98 242 -412 1013 -697 1714 -285 701 -564
1388 -620 1525 -56 138 -104 253 -108 258 -3 4 -278 -610 -610 -1365z"
                />
              </g>
            </svg>
          </div>
        </div>
      </label>
      <label for=""
        >Загрузить фото
        <input type="file" class="new-comment__file" ref="file" />
      </label>
    </form>
    <PaleButton class="new-comment__btn" @clickBtn="setNewPost"
      >Добавить отзыв</PaleButton
    >
  </TemplateModal>
</template>
<script>
import PaleButton from "../../components/Buttons/PaleButton.vue";
import { mapMutations } from "vuex";
export default {
  // props: ["show"],
  data() {
    return {
      newComment: {
        name: "",
        worth: "",
        limitations: "",
        assessment: null,
      },
    };
  },
  methods: {
    ...mapMutations(["updateComments"]),
    setStar(count) {
      this.newComment.assessment = count;
      const currentArray = this.$refs.star;
      const currentStars = currentArray.slice(0, count);
      currentStars.forEach((item) => item.classList.add("yellow"));
    },
    setNewPost() {
      const reader = new FileReader();
      reader.onload = () => {
        this.updateComments({
          name: this.newComment.name,
          worth: this.newComment.worth,
          limitations: this.newComment.limitations,
          assessment: this.newComment.assessment,
          id: Date.now(),
          img: reader.result,
        });
      };
      reader.readAsDataURL(this.$refs.file.files[0]);
      this.$emit("close");
    },
  },
  components: {
    PaleButton,
    TemplateModal: () => import("../../components/TemplateModal"),
  },
};
</script> 
<style scoped lang="scss">
.new-comment {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &__wrapper {
    position: relative;
    width: 500px;
    background-color: #fff;
    border-radius: 30px;
    padding: 50px;
  }
  &__input {
    display: block;
    background: #ffffff;
    border: 3px solid #e5e5e5;
    border-radius: 10px;
    padding: 10px 8px;
    margin-bottom: 10px;
    width: 100%;
    &::placeholder {
      font-family: "Montserrat", sans-serif;
      color: rgb(161, 161, 161);
    }
  }
  &__title {
    font-size: 16px;
    margin: 0 0 10px;
    text-align: center;
  }
  &__stars {
    display: flex;
  }
  &__star {
    width: 21px;
    height: 21px;
  }
  &__assessment {
    margin-bottom: 10px;
  }
  &__file {
    display: block;
    margin-bottom: 10px;
  }
  &__btn {
    margin-top: 10px;
    width: 100%;
  }
}
.yellow g {
  fill: rgb(235, 212, 8);
}
</style>
