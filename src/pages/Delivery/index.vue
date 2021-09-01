<template>
  <main class="delivery">
    <div class="delivery__wrapper">
      <h1 class="delivery__title title">Оплата и доставка</h1>
      <ul class="delivery__descr">
        <li class="delivery__descr-point">
          Выберите понравившийся товар, внимательно ознакомьтесь с его
          характеристиками и после этого добавьте его в вашу корзину при помощи
          кнопки «Добавить в корзину».
        </li>
        <li class="delivery__descr-point">
          Корзина доступна с любой страницы сайта, таким образом, вы в любой
          момент можете приступить к оформлению заказа.
        </li>
        <li class="delivery__descr-point">
          Оформить заказ на доставку выбранного товара вы можете: Заполнив
          специальную форму заказа на нашем сайте в любое время суток.
        </li>
        <li class="delivery__descr-point">
          В интернет-магазине «Кроха» вы можете осуществить оплату товара двумя
          способами:
          <ul class="delivery__descr-subpoint">
            <li>Наличными курьеру при получении заказа;</li>
            <li>Безналичным расчетом посредством банковской карты (online).</li>
          </ul>
        </li>
        <li>
          После выбора способа оплаты перейдите на следующий шаг, чтобы
          подтвердить ваши данные и завершить оформление заказа.
        </li>
      </ul>
    </div>
  </main>
</template>
<style scoped lang="scss">
.delivery {
  margin-top: 44px;
  &__wrapper {
    max-width: 970px;
    padding: 0 15px;
    margin: 0 auto;
  }
  &__title {
    margin-bottom: 25px;
  }
  &__descr {
    list-style: none;
    padding: 0 0 40px;
    margin: 0;
    &-subpoint {
      padding-left: 16px;
    }
    &-point {
      margin-bottom: 15px;
    }
  }
}
</style>