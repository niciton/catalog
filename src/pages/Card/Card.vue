<template>
  <default id="Card">
    <div class="main-content container">
      <div class="card_body" data-id="55">
        <!-- slider -->
        <div v-if="cardData.Image" class="slider">
          <div class="slider_nav">
            <button class="link slider_prev card_btn">
              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.97386 1L1 6.97441L7 13" stroke-width="2" stroke-miterlimit="22.9256" stroke-linecap="round"
                  stroke-linejoin="round" />
                <line x1="1" y1="-1" x2="9" y2="-1" transform="matrix(-1 0 0 1 17 8)" stroke-width="2"
                  stroke-linecap="round" />
              </svg>
            </button>

            <!-- slider pagination -->
            <div class="slider_pagination card_pagination" aria-label="Carousel Pagination">
              <button class="slider_nav__item">
                <img :src="cardData.Image" alt="" />
              </button>
              <button class="slider_nav__item">
                <img src="/public/img/card_slide01.png" alt="" />
              </button>
              <!-- <button class="slider_nav__item">
                <img src="/public/img/card_slide03.png" alt="" />
              </button>
              <button class="slider_nav__item">
                <img src="/public/img/card_slide02.png" alt="" />
              </button>
              <button class="slider_nav__item">
                <img src="/public/img/card_slide03.png" alt="" />
              </button>
              <button class="slider_nav__item">
                <img src="/public/img/card_slide01.png" alt="" />
              </button> -->
            </div>
            <button class="slider_next card_btn">
              <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0261 1L16 6.97441L10 13" stroke-width="2" stroke-miterlimit="22.9256" stroke-linecap="round"
                  stroke-linejoin="round" />
                <line x1="1" y1="7" x2="9" y2="7" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <div class="card_slider" data-baguettebox-trigger>
            <div class="slide card_slide">
              <a :href="getSlideImage()" data-link="card_popup" class="slide_link popup_link">
                <img :src="getSlideImage('')" alt="" />
              </a>
            </div>
            <div class="slide card_slide">
              <a href="/public/img/card_slide01-big.png" class="slide_link popup_link">
                <img src="/public/img/card_slide01.png" alt="" />
              </a>
            </div>
            <!--             
            <div class="slide card_slide">
              <a href="/public/img/card_slide03-big.png" data-link="card_popup" class="slide_link popup_link">
                <img src="/img/card_slide03.png" alt="" />
              </a>
            </div>
            <div class="slide card_slide">
              <a href="/public/img/card_slide02-big.png" data-link="card_popup" class="slide_link popup_link">
                <img src="/img/card_slide02.png" alt="" />
              </a>
            </div>
            <div class="slide card_slide">
              <a href="/public/img/card_slide03-big.png" data-link="card_popup" class="slide_link popup_link">
                <img src="/img/card_slide03.png" alt="" />
              </a>
            </div>
            <div class="slide card_slide">
              <a href="/public/img/card_slide01-big.png" data-link="card_popup" class="slide_link popup_link">
                <img src="/img/card_slide01.png" alt="" />
              </a>
            </div> -->
          </div>
        </div>
        <div v-else class="no-photo"></div>

        <!-- card_inf -->
        <div class="card_inf">
          <!-- price -->
          <div class="card_price card_item">
            <div class="price_title item_title">Розничная цена</div>
            <span class="dots"></span>
            <div class="price_value item_value">
              <div class="text">{{ showPrice(cardData.Price) }}</div>
              <div class="icon">
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M3.76927 7.04658L3.77033 1.66983C5.13449 1.61522 7.10191 1.57815 8.2874 1.94291C11.1471 2.82262 11.496 5.68313 8.36307 6.76375C7.28372 7.13631 5.04515 7.1207 3.77033 7.04658H3.76927ZM1.9532 8.72407L2.01625 8.94644C2.02046 9.02544 2.01205 9.14637 2.01205 9.23122C2.011 9.44188 2.03097 10.5017 1.97842 10.7056L0.771904 10.7456C0.164442 10.8158 -0.240182 11.4448 0.160238 11.9949C0.570117 12.5576 1.2028 12.268 1.98472 12.3811C1.98472 13.216 1.98472 12.4016 1.98472 13.2365C1.98472 14.0294 1.88278 14.9793 2.86229 14.9998C3.24904 15.0076 3.57064 14.7813 3.6894 14.518C3.84284 14.1776 3.77033 12.858 3.77033 12.3675C4.6048 12.3285 5.52019 12.3597 6.36412 12.3597C7.2091 12.3597 8.08036 12.4035 8.06144 11.519C8.03307 10.2677 5.7987 10.8265 3.77033 10.6919V8.73285C6.35467 8.61387 8.72566 9.13174 11.0189 7.14801C12.8749 5.54367 12.7666 2.9299 10.8665 1.46015C8.67626 -0.233926 6.78031 0.0167222 3.46029 0.0089199C1.61268 0.00501876 1.98578 0.6253 1.98578 2.82945C1.98578 4.22996 1.98578 5.62949 1.98578 7.03C1.21752 7.16167 0.0845682 6.80861 0.018357 7.83266C-0.0510071 8.90743 1.35309 8.73285 1.9553 8.72407H1.9532Z"
                    fill="#737373" />
                </svg>
              </div>
            </div>
          </div>

          <button class="yellow_btn order_btn hover_black menu-toggle-item" data-link="order">
            Заказать
          </button>

          <!-- article -->
          <div class="card_article card_item">
            <div class="article_title item_title">Артикул</div>
            <span class="dots"></span>
            <div class="article_value item_value">{{ cardData.Articul }}</div>
          </div>

          <!-- oem -->
          <div class="card_oem-number card_item">
            <div class="oem-number_title item_title">OEM-номер</div>
            <span class="dots"></span>
            <a href="#" class="oem-number_value pointer item_value link">
              <span class="text"> 124.3778.007 </span>
              <span class="arrow">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.02614 1L7 6.97441L1 13" stroke-width="2" stroke-miterlimit="22.9256" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </span>
              <ul class="oem-number_list">
                <li class="oem-number_item">124.3778.007</li>
                <li class="oem-number_item">4001.3771-42</li>
                <li class="oem-number_item">5702.3701-20</li>
                <li class="oem-number_item">Г1000.10.1</li>
              </ul>
            </a>
          </div>

          <!-- weight -->
          <div class="card_weight card_item">
            <div class="weight_title item_title">Вес</div>
            <span class="dots"></span>
            <div class="weight_value item_value">10,5 кг</div>
          </div>

          <!-- length -->
          <div class="card_length card_item">
            <div class="length_title item_title">Длина</div>
            <span class="dots"></span>
            <div class="length_value item_value">240 мм</div>
          </div>

          <!-- width -->
          <div class="card_width card_item">
            <div class="width_title item_title">Ширина</div>
            <span class="dots"></span>
            <div class="width_value item_value">180 мм</div>
          </div>

          <!-- height -->
          <div class="card_height card_item">
            <div class="height_title item_title">Высота</div>
            <span class="dots"></span>
            <div class="height_value item_value">220 мм</div>
          </div>

          <!-- manufacturer -->
          <div class="card_manufacturer card_item">
            <div class="manufacturer_title item_title">Производитель</div>
            <span class="dots"></span>
            <div class="manufacturer_value item_value">{{ cardData.Manufacturer }}</div>
          </div>

          <!-- text -->
          <div class="card_text">
            Вся продукция торговой марки GILBER прошла испытания в аттестованной
            лаборатории, что подтверждается
            <button data-link="popup" class="popup_link">
              сертификатами соответствия
            </button>
          </div>

          <!-- popup -->
          <div id="popup" class="popup">
            <a href="#" class="btn_close link close_popup">
              <!-- <img src="img/icon/x.svg" alt=""> -->
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 18L18 1.00001" stroke-width="2" stroke-linecap="round" />
                <path d="M18 18L1.00001 1.00001" stroke-width="2" stroke-linecap="round" />
              </svg>
            </a>

            <div class="popup_wrap certificat_popup">
              <div class="slider_pagination certificate_popup popup_content round"></div>

              <a href="#" class="prev_btn link certificate_btn popup_content round btn">
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.97386 1L1 6.97441L7 13" stroke-width="2" stroke-miterlimit="22.9256" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <line x1="1" y1="-1" x2="9" y2="-1" transform="matrix(-1 0 0 1 17 8)" stroke-width="2"
                    stroke-linecap="round" />
                </svg>
              </a>
              <a href="#" class="next_btn link certificate_btn popup_content round btn">
                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0261 1L16 6.97441L10 13" stroke-width="2" stroke-miterlimit="22.9256"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <line x1="1" y1="7" x2="9" y2="7" stroke-width="2" stroke-linecap="round" />
                </svg>
              </a>
              <div class="popup_body popup_content">
                <div class="slider_body certificate_slider">
                  <div class="slide certificate_slide">
                    <img class="tns-lazy-img" src="/public/icons/1x2.png" data-src="img/certificate04.jpg"
                      alt="Сертификат GILBER" />
                  </div>
                  <div class="slide certificate_slide">
                    <img class="tns-lazy-img" src="/public/icons/1x2.png" data-src="img/certificate04.jpg"
                      alt="Сертификат GILBER" />
                  </div>
                  <div class="slide certificate_slide">
                    <img class="tns-lazy-img" src="/public/icons/1x2.png" data-src="img/certificate04.jpg"
                      alt="Сертификат GILBER" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="table_title">
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.02614 1L7 6.97441L1 13" stroke-width="2" stroke-miterlimit="22.9256" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        <span>применяеМОСТЬ</span>
      </div>
      <table class="table_body">
        <tbody>
          <tr>
            <th class="table_title">Модель</th>
            <th class="table_title">Схема</th>
          </tr>
          <tr>
            <th>ГАЗ-3111</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Электрооборудование</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/cars/gaz/gaz-3111-400/100835-400-74/75/76/" class="breadcrumbs_link"><span
                      class="text">Аккумуляторная батарея, генератор, стартер, жгуты и провода</span></a>
                </li>
              </ul>
            </th>
          </tr>
          <tr>
            <th>ГАЗ-3110</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Электрооборудование</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/cars/gaz/gaz-3110-19/100815-19-124/125/126/" class="breadcrumbs_link"><span
                      class="text">Генератор двигателя ЗМЗ.-4062.10</span></a>
                </li>
              </ul>
            </th>
          </tr>
          <tr>
            <th>ГАЗ-3110</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Двигатель</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/cars/gaz/gaz-3110-19/100815-19-38/39/46/" class="breadcrumbs_link"><span
                      class="text">Клапаны и толкатели клапанов, крышка клапанов, катушки зажигания, провода и свечи,
                      крышка маслоналивного патрубка двигателя ЗМЗ-4062.10</span></a>
                </li>
              </ul>
            </th>
          </tr>
          <tr>
            <th>ГАЗ-3110</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Электрооборудование</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/cars/gaz/gaz-3110-19/100815-19-124/125/135/" class="breadcrumbs_link"><span
                      class="text">Приборы электрооборудования и провода автомобиля с двигателем ЗМЗ-4062.10 (моторный
                      отсек)</span></a>
                </li>
              </ul>
            </th>
          </tr>
          <tr>
            <th>ГАЗ-3110</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Электрооборудование</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/cars/gaz/gaz-3110-19/100815-19-124/125/136/" class="breadcrumbs_link"><span
                      class="text">Приборы электрооборудования и провода автомобиля с двигателями ЗМЗ-4062.10 и
                      ЗМЗ-4021.10 (моторный отсек)</span></a>
                </li>
              </ul>
            </th>
          </tr>
          <tr>
            <th>ГАЗ-2217 (Соболь)</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Электрооборудование</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/cars/gaz/gaz-2217-sobol-21/100817-21-147/148/149/" class="breadcrumbs_link"><span
                      class="text">Генератор двигателя ЗМЗ-4063</span></a>
                </li>
              </ul>
            </th>
          </tr>
          <tr>
            <th>ГАЗ-2705 (ГАЗель)</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Электрооборудование</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/cars/gaz/gaz-2705-gazel-75/100820-75-135/136/137/" class="breadcrumbs_link"><span
                      class="text">Генератор двигателей ЗМЗ-4061.10, ЗМЗ-4063.10</span></a>
                </li>
              </ul>
            </th>
          </tr>
          <tr>
            <th>ГАЗ-3302 (2004)</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Электрооборудование</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/cars/gaz/gaz-3302-2004-294/100826-294-137/138/139/" class="breadcrumbs_link"><span
                      class="text">Генератор двигателей ЗМЗ-406</span></a>
                </li>
              </ul>
            </th>
          </tr>
          <tr>
            <th>ГАЗ-31105</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Электрооборудование</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/cars/gaz/gaz-31105-296/100827-296-42/43/46/" class="breadcrumbs_link"><span
                      class="text">Электропровода (моторный отсек)</span></a>
                </li>
              </ul>
            </th>
          </tr>
          <tr>
            <th>ГАЗ-2705 (дв. ЗМЗ-402)</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Электрооборудование</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/cars/gaz/gaz-2705-dv-zmz-402-783/100838-783-150/151/152/" class="breadcrumbs_link"><span
                      class="text">Генератор двигателей ЗМЗ-406</span></a>
                </li>
              </ul>
            </th>
          </tr>
          <tr class="none">
            <th>ГАЗ-2705 (дв. ЗМЗ-406)</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Электрооборудование</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/cars/gaz/gaz-2705-dv-zmz-406-784/100839-783-150/151/152/" class="breadcrumbs_link"><span
                      class="text">Генератор двигателей ЗМЗ-406</span></a>
                </li>
              </ul>
            </th>
          </tr>
          <tr class="none">
            <th>ГАЗ-2705 (дв. УМЗ-4215)</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Электрооборудование</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/cars/gaz/gaz-2705-dv-umz-4215-785/100840-783-150/151/152/" class="breadcrumbs_link"><span
                      class="text">Генератор двигателей ЗМЗ-406</span></a>
                </li>
              </ul>
            </th>
          </tr>
          <tr class="none">
            <th>ЗМЗ-402</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Электрооборудование</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/engines/zmz/zmz-402-787/101327-787-44/45/46/" class="breadcrumbs_link"><span
                      class="text">Генератор двигателей ЗМЗ-406</span></a>
                </li>
              </ul>
            </th>
          </tr>
          <tr class="none">
            <th>ЗМЗ-406</th>
            <th>
              <ul class="breadcrumbs table_breadcrumbs">
                <li class="breadcrumbs_item">
                  <span class="breadcrumbs_item__text">Электрооборудование</span>
                </li>
                <li class="breadcrumbs_item">
                  <a href="/acat/engines/zmz/zmz-406-788/101328-787-44/45/46/" class="breadcrumbs_link"><span
                      class="text">Генератор двигателей ЗМЗ-406</span></a>
                </li>
              </ul>
            </th>
          </tr>
        </tbody>
      </table>

      <button class="yellow_btn show_btn hover_black">Показать ещё</button>
      <div v-if="otherCard.length" class="other-goods">
        <div class="other-goods_title">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.02614 1L7 6.97441L1 13" stroke-width="2" stroke-miterlimit="22.9256" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>

          <span>другие товары</span>
        </div>
        <div class="other-goods_cards">
          <card-list :cardList="otherCard" />
        </div>
      </div>
    </div>
    <!-- netcat_files/multifile/2288/preview_1663028383_0_e73b5d30-55b5-11e7-98b8-005056c00008.jpg -->
    <!-- netcat_files/multifile/2288/preview_1663028383_1_e73b5d2f-55b5-11e7-98b8-005056c00008.jpg -->
    <!-- netcat_files/multifile/2288/preview_1663028383_1_e73b5d31-55b5-11e7-98b8-005056c00008.jpg -->

  </default>
</template>

<script>
import '@/css/page/Card/Card.scss';
import Default from '@/components/Default.vue';
import cardList from "@/components/cardList.vue";

import slider from '@/module/slider';
import getPath from '@/module/getPath.js';
import axios from 'axios';

export default {
  data() {
    return {
      cardData: {},
      otherCard: [],
      slides: {},
    }
  },
  methods: {
    getCardInfo() {
      this.otherCard = []
      axios({
        method: 'get',
        url: `http://localhost:3000/cards?Articul_like=${this.$route.params.cardArticul}`
      }).then(res => {
        // this.cardData = res.data[0]
        // this.otherCard = res.data.slice(1, res.data.length)
        console.log(res.data);

        res.data.forEach(item => {
          // console.log(item.Articul, this.$route.params.cardArticul);
          if (item.Articul == this.$route.params.cardArticul) {
            this.cardData = item
          } else {
            this.otherCard.push(item)
          }
        })
        // console.log(res.data, res.data.slice(1, res.data.length));
      }).then(() => {
        this.setHelpBar()
        // this.getSliders()
        this.getOtherCard()
        this.initSliders()
      })
    },
    setHelpBar() {
      // this.$route.meta.routs = [
      //   {
      //     name: 'Главная',
      //     path: '/',
      //   },
      //   {
      //     name: 'Каталог запчастей GILBER',
      //     path: '/catalog/',
      //   },
      //   {
      //     name: this.cardData.Manufacturer_category,
      //     path: getPath('catalog', this.cardData.Manufacturer_categoryId, this.cardData.Manufacturer_category),
      //   },
      // ]
      this.$route.meta.title = this.cardData.Name
      this.$route.meta.additionalRout = [{
        name: this.cardData.Manufacturer_category,
        path: getPath('catalog', this.cardData.Manufacturer_categoryId, this.cardData.Manufacturer_category),
      }]
    },
    showPrice(str) {
      // проверка для того что бы, когда объект пустой это ни чего не ломало
      const price = str?.toLocaleString('ru-RU')
      return price
    },
    getOtherCard() {
      axios({
        method: 'get',
        url: `http://localhost:3000/cards?_limit=3&Manufacturer_like=${this.cardData.Manufacturer}`
      }).then(res => {
        // console.log(res);
        this.otherCard = res.data
      })
    },
    initSliders() {
      if (this.cardData.Image) {
        this.cardSlider = slider({
          container: '.card_slider',
          items: 1,
          loop: false,
          autoplay: false,
          nav: true,
          axis: 'vertical',
          navAsThumbnails: true,
          prevButton: '.slider_prev.card_btn',
          nextButton: '.slider_next.card_btn',
          navContainer: '.slider_pagination.card_pagination',
          // arrowKeys: true,
          speed: 500,
        });
        this.sliderPagination = slider({
          container: '.slider_pagination.card_pagination',
          items: 3,
          slideBy: 1,
          gutter: 4,
          loop: false,
          axis: 'vertical',
          autoplay: false,
          // arrowKeys: false,
          speed: 500,
        });
      }
    },
    getSlideImage(imgType = 'original_') {
      // 
      return this.cardData.Image.replace('preview_', imgType)
    }
  },
  mounted() {
    this.getCardInfo()
  },
  watch: {
    cardData: {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
    '$route.path'() {
      this.getCardInfo()
    }
  },
  components: {
    Default,
    cardList,
  }
}
</script>