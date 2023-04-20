import { createStore } from 'vuex';
import { menuClass } from './menuClass';
import { popups } from "./popups.js";
import { catalogStore } from './catalogStore';

export default createStore({
  
  modules: {
    menuStore: menuClass,
    popups: popups,
    catalogStore: catalogStore,
  },
});
