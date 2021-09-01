<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <div class="footer__logo">
          <img src="@/assets/icons/logo.png" alt="" />
        </div>
        <div class="footer__info">
          <p class="footer__info-point">
            Руководитель организации: генеральный директор Давыдова Мария
            Сергеевна. Юридический адрес ПАО&nbsp;"Детский Мир" - 119415, город
            Москва, проспект&nbsp;Вернадского, 37-3.
          </p>
          <p class="footer__info-point">
            Организации ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО "ДЕТСКИЙ МИР" присвоены
            ИНН&nbsp;7729355029, ОГРН&nbsp;1027700047100, ОКПО&nbsp;47568073.
          </p>
        </div>
        <a
          href="https://www.instagram.com/"
          class="footer__contacts"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
.footer {
  background-color: #9ecdd6;
  color: #fff;
  padding: 15px 0;
  &__container {
    max-width: 1050px;
    padding: 0 15px;
    margin: 0 auto;
  }
  &__grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__info {
    max-width: 550px;
    padding: 0 15px;
    font-size: 12px;
    &-point {
      margin: 0;
    }
  }
}
.fa-instagram {
  font-size: 28px;
  cursor: pointer;
  color: #fff;
}
</style>