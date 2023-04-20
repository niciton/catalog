<template>
  <div v-bind="$attrs" class="wrapper"
    :style="[{ paddingBottom: footerHeight + 'px' }, { paddingTop: headerHeight + 'px' }]">
    <app-header @size="headerHeight = $event" />
    <menu-all />
    <div class="help-bar container">
      <ol class="breadcrumbs" v-if="$route.path != '/'">
        <li class="breadcrumbs_item" v-for="route in routs">
          <router-link class="breadcrumbs_link" :to="route.path">
            <span class="text">
              {{ route.name }}
            </span>
          </router-link>
        </li>
        <template v-if="$route.meta.additionalRout?.length">
          <li class="breadcrumbs_item" v-for="route in $route.meta.additionalRout">
            <router-link class="breadcrumbs_link" :to="route.path">
              <span class="text">
                {{ route.name }}
              </span>
            </router-link>
          </li>
        </template>
        <!-- <li class="breadcrumbs_item" v-if="$route.meta.additionalRout">
          <router-link class="breadcrumbs_link" :to="$route.meta.additionalRout.path">
            <span class="text">
              {{ $route.meta.additionalRout.name }}
            </span>
          </router-link>
        </li> -->
        <li class="breadcrumbs_item">
          <span class="breadcrumbs_item__text">
            {{ $route.meta.name || $route.meta.title }}
          </span>
        </li>
      </ol>
      <h1>
        {{ $route.meta.title || $route.meta.name }}
      </h1>
    </div>
    <main class="main">
      <slot></slot>
    </main>
    <app-footer @size="footerHeight = $event"></app-footer>
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';
import MenuAll from '@/components/MenuAll.vue';

const a = {}

// import {mapState, mapMutations} from 'vuex';

function adad(str){
  let ltrs = {}
  
  return false
}

// console.log(adad('aaa'));

//:style="{paddingBottom: $refs.footer.clientHeight+ 'px'}"
// console.log(window.breadcrumbs);
export default {
  // name: 'App',
  data() {
    return {
      footerHeight: 55,
      headerHeight: 150,
      routs: this.$route.meta.routs || [{
        name: 'Главная',
        path: '/',
      }],
    }
  },

  components: {
    AppHeader,
    MenuAll,
    AppFooter,
  },
  methods: {
    getRoutsArr() {
      const routs = this.$route.meta.routs
      return routs || [{
        name: 'Главная',
        path: '/',
      }]
      // return this.getRouts
    }
  },
  mounted() {
    // document.addEventListener('click', (e) => {
    //   this.closeMenu();
    // })
    // document.addEventListener('keydown', (e) => {
    //   if (e.which === 27) {
    // 		this.closeMenu();
    //
    // 	}
    // });
  },
  watch: {
    routs: {
      handler(val) {
        console.log('routs val: ', val);
      },
      deep: true,
    },
    '$route.meta': {
      handler(val) {
        // console.log(val.routs, '<- $route.meta val');
        this.routs = this.$route.meta.routs
      },

      deep: true,
    },
    '$route.meta.title'(val) {
      console.log('$route.meta.title', (val));
    },
  },
  computed: {
  },
  // components: { DefaultBtn },
}
</script>