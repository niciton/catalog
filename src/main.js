import { createApp } from 'vue'
import App from './App.vue'
import UIComponents from './UI/index.js';
import router from './router';
import * as Maska from 'maska';
// import * as vue from 'Vue'
import store from './store';

const app = createApp(App);

UIComponents.forEach((item) => app.component(item.name, item));

app.use(router);
app.use(store);

app.directive('maska', Maska.maska);

app.mount('#app');

// let xhr = new XMLHttpRequest();

// // 2. Настраиваем его: GET-запрос по URL /article/.../load
// xhr.open('GET', 'http://localhost:3000/cards');

// // 3. Отсылаем запрос
// xhr.send();

// // 4. Этот код сработает после того, как мы получим ответ сервера
// xhr.onload = function () {
//   if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//     console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
//   } else { // если всё прошло гладко, выводим результат
//     console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
//   }
// };

// xhr.onprogress = function (event) {
//   if (event.lengthComputable) {
//     console.log(`Получено ${event.loaded} из ${event.total} байт`);
//   } else {
//     console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
//   }

// };

// xhr.onerror = function () {
//   console.log("Запрос не удался");
// };