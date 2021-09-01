
 <template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__close" @click="$emit('close')">&times;</div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  // props: {
  //   visible: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  name: "TemplateModal",
  data() {
    return {
      // show: this.visible,
      // showModal: "",
    };
  },
  computed: {},

  methods: {},
};
</script>


<style scoped lang="scss">
.modal {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  /* display: none; */
  &__wrapper {
    position: relative;
    max-width: 950px;
    background-color: #fff;
    border-radius: 30px;
    /* border: 2px solid #e5e5e5; */
    padding: 30px;
  }
  &__close {
    position: absolute;
    top: -20px;
    right: -20px;
    color: #00a9c8;
    font-size: 40px;
    font-weight: 700;
    cursor: pointer;
  }
}
.show {
  /* display: flex; */
}
</style> 
