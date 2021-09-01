<template>
  <li class="comment">
    <div class="comment__inner">
      <div class="comment__img">
        <img :src="comment.img" alt="" />
      </div>
      <span class="comment__author">{{ comment.name }}</span>
      <div class="comment__assessment">
        <svg
          v-for="(star, i) in comment.assessment"
          :key="i"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="1280.000000pt"
          height="1216.000000pt"
          viewBox="0 0 1280.000000 1216.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,1216.000000) scale(0.100000,-0.100000)"
            fill="#000000"
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
      <div class="comment__worth" v-if="comment.worth">
        <span>Достоинства:</span> {{ comment.worth }}
      </div>
      <div class="comment__limitations" v-if="comment.limitations">
        <span>Недостатки:</span> {{ comment.limitations }}
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: ["comment"],
};
</script>
<style scoped lang="scss">
.comment {
  &.short {
    grid-column: 1/5;
    & > .comment__inner {
      border: none;
      padding-bottom: 0;
    }
    & .comment__img {
      display: none;
    }
    & .comment__assessment {
      margin-bottom: 10px;
    }
  }
  &__inner {
    background: #ffffff;
    border: 2px solid #e5e5e5;
    border-radius: 20px;
    padding-bottom: 30px;
    min-height: 100%;
  }
  &__author,
  &__assessment,
  &__worth,
  &__limitations {
    padding: 0 15px;
  }
  &__author {
    font-weight: 800;
    margin-bottom: 5px;
  }
  &__img {
    max-width: 100%;
    height: 340px;
    margin-bottom: 20px;
    & img {
      width: 100%;
      height: 100%;
      border-radius: 20px 20px 0 0;
      object-fit: cover;
    }
  }
  &__assessment {
    margin-bottom: 15px;
    & svg {
      width: 23px;
      height: 23px;
      & g {
        fill: rgb(75, 74, 74);
      }
    }
  }
  &__worth span,
  &__limitations span {
    font-weight: 700;
  }
}
</style>
