<template>
  <header ref="header" class="header">
    <div class="container">
      <div class="header_container">
        <router-link class="header_logo" to="/catalog/">
          <span class="logo_inner">
            <img src="@icons/logo.svg" alt="Логотип GILBER" />
          </span>
          <span class="logo_text">
            ЭЛЕКТРООБОРУДОВАНИЕ<br />
            ДЛЯ А/М КАМАЗ, ГАЗ <br />
            И ТРАКТОРОВ
          </span>
        </router-link>
        <div class="header_main">
          <div class="header_items">
            <div class="header_item catalog">
              <button class="catalog_btn header_link menu-toggle-item" @click.stop="toggleMenu('catalog')">
                <span class="icon">
                  <img src="@icons/catalog.svg" alt />
                  <img src="@icons/catalog.svg" alt />
                </span>
                <span class="text">Каталог</span>
              </button>
            </div>
            <div class="header_item menu">
              <button class="header_menu header_link menu-toggle-item" @click.stop="toggleMenu('menu')">
                <span class="icon">
                  <img class="menu_img" src="@icons/menu.svg" alt />
                  <img class="menu_line ln-1" src="@icons/menu_line.svg" alt />
                  <img class="menu_line ln-2" src="@icons/menu_line.svg" alt />
                  <img class="menu_line ln-3" src="@icons/menu_line.svg" alt />
                </span>
                <span class="text">Меню</span>
              </button>
            </div>
            <div class="header_item phone">
              <button class="header_phone header_link menu-toggle-item" @click.stop="toggleMenu('phone')">
                <span class="icon">
                  <svg class="phone" width="23" height="24" viewBox="0 0 23 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M7.25691 9.06306C8.1611 12.2911 11.1261 15.474 14.2875 16.6407C15.2375 16.9895 15.6464 15.6364 16.7967 14.8486C17.9021 14.0839 20.6862 17.4416 21.253 18.2981C21.6267 18.8639 21.6368 19.1479 21.4294 19.4777C20.7561 20.5462 19.5411 21.6518 18.455 22.249C16.2358 22.9855 11.6596 21.2295 8.45807 18.4322C6.83955 17.0032 5.69933 15.7959 4.41215 14.0654C1.85935 10.6634 1.09724 6.6634 1.99574 4.48946C2.67988 3.45051 3.87007 2.31376 4.98259 1.73374C5.3291 1.54705 5.60826 1.57891 6.15466 1.99475C6.95952 2.6239 10.1061 5.65534 9.25124 6.7031C8.37768 7.79114 6.98676 8.08488 7.27086 9.06465L7.25691 9.06306Z"
                      stroke="" stroke-width="1.5" stroke-miterlimit="22.9256" stroke-linecap="round"
                      stroke-linejoin="round">
                    </path>
                  </svg>
                  <svg class="phone_arrow" width="13" height="13" viewBox="0 0 13 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.2873 11.4898L1.29773 6.5225L6.28626 1.48977" stroke="" stroke-width="1.5"
                      stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round"></path>
                    <line x1="11.9285" y1="6.39356" x2="5.09516" y2="6.40915" stroke-width="1.5" stroke-linecap="round">
                    </line>
                  </svg>
                </span>
              </button>
            </div>
            <div class="header_item email">
              <a href="mailto:info@gilber.online" class="header_email underline header_link">
                <span class="text">info@gilber.online</span>
              </a>
            </div>
          </div>
          <form class="search_wrap" id="header_search" @click.stop="showPrompt = true" @submit.prevent="submitCatalog"
            data-filter-name="q" data-filter-text="Поиск">
            <input class="inp_search" type="text" v-model="search" @input="setPrompt" @click="setPrompt"
              placeholder="Артикул или наименование товара" />
            <button class="search_clear" type="reset">
              <span></span>
            </button>
            <button class="search_btn">
              <img src="@icons/search.svg" alt />
            </button>
          </form>
        </div>
        <div class="search_prompt">
          <ul class="search_list container" v-if="promptArr.length && showPrompt">
            <li class="search_item" v-for="item in promptArr" :key="item.Articul">
              <a :href="getURL(item)" @click.prevent="$router.push(getURL(item))" class="search_link"
                v-html="setPromptText(item.Name)"></a>
            </li>
            <li class="search_activated search_item" v-if="promptArr.length == 10">
              <a :href="`/catalog/?q=${search}`" @click.prevent="$router.push(`/catalog/?q=${search}`)"
                class="yellow_btn search_btn-activated">
                Показать все результаты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import '@/css/main.scss';

import { mapState, mapMutations } from 'vuex';
import axios from 'axios';
import getPath from '@/module/getPath.js';

export default {
  data() {
    return {
      search: this.getURLSearch() || 'амор',
      promptArr: [],
      showPrompt: false,
    }
  },
  methods: {
    ...mapState({
      deleteParam: store => store.catalogStore.deleteParam,
      storeParams: store => store.catalogStore.params,
      menuClass: state => state.menuStore.menuClass,
    }),
    ...mapMutations({
      toggleMenuClass: 'menuStore/toggleMenuClass',
      closeMenu: 'menuStore/closeMenu',
      setParams: 'catalogStore/setParams',
    }),
    getURLSearch() {
      const val = decodeURIComponent(location.search.split('q=')[1]?.split('&')[0])
      // console.log(typeof val);
      if (val == 'undefined') {
        return ''
      } else {
        return val
      }
    },
    getSearch() {
      return this.search.trim()
    },
    isFilled(num = 2) {
      return this.getSearch().length > num
    },
    getURL(obj) {
      // console.log(obj);
      return getPath('product', obj.Articul, obj.Name)
    },
    toggleMenu(className) {
      this.closeMenu();
      this.toggleMenuClass(className);
    },
    setHeightHeader() {
      setTimeout(() => {
        // console.log(this.$refs.header.offsetHeight);
        this.$emit('size', this.$refs.header.offsetHeight)
      }, 300)
    },
    submitCatalog(e) {
      // this.setParams({
      //   q: this.search
      // })
      // for (const item in this.setParams()) {
      //   this.deleteParam(item)
      // }
      let newParams = {}

      for (const param in this.storeParams()) {
        if (this.storeParams()[param]) {
          // isChange = true
        }
        // console.log(param);
        newParams[param] = {}
        newParams[param].value = ''
        newParams[param].text = []
      }

      this.showPrompt = false

      newParams.q = {
        value: this.getSearch(),
        text: ['Поиск', this.getSearch()],
      }
      // newParams.text = 'Поиск'
      console.log(newParams);
      this.$router.push(`/catalog/`)
      this.setParams(newParams)
    },
    setPrompt() {
      if (this.isFilled()) {
        axios({
          url: `http://localhost:3000/cards?q=${this.search}&_limit=10`,
          method: 'get',
        }).then(res => {
          // console.log(res);
          if (this.isFilled()) this.promptArr = res.data
        })
      } else {
        this.promptArr = []
      }
    },
    setPromptText(str) {
      // let text = 'Lorem ipsum dolor, lorem ipsum dolor.';
      // console.log(str.replace(/\b(this.search)\b/ig, '<span style="background: yellow">$&</span>'))
      // console.log(str.replace(/\b(ipsum)\b/ig, ``));
      return str.replace(this.search, `<span>$&</span>`)
    },
  },
  mounted() {
    // console.log('undefined' || '');
    this.setHeightHeader()
    window.addEventListener('resize', this.setHeightHeader)
    document.addEventListener('click', (e) => {
      // console.log(this.showPrompt);
      this.showPrompt = false
    })
  },
  watch: {
    promptArr(val) {
      // console.log(val);
      this.showPrompt = this.isFilled()
    }
  }
}
</script>