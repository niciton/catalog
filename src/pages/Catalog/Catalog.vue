<!-- 
	здесь чтобы всё работало нужно запустить "npm run server" из папки back
 -->

<template>
	<default id="Catalog">
		<div :class="['load_screen', { load: loadContent }]"></div>
		<div class="main-content">
			<sidebar />

			<!-- cards -->
			<div class="product-content">
				<div class="mobile_filters btns_wrap">
					<a href="#" class="catalog_btn yellow_btn hover_black link menu-toggle-item" data-link="catalog">
						<span class="icon">
							<img src="/icons/catalog.svg" alt />
							<img src="/icons/catalog.svg" alt />
						</span>
						<span class="text">Каталог</span>
					</a>
					<a href="#" class="filter_btn yellow_btn hover_black header_link link menu-toggle-item" data-link="catalog">
						<span class="icon">
							<svg>
								<use xlink:href="/icons/sprite.svg#filter"></use>
							</svg>
						</span>
						<span class="text">Фильтр по марке</span>
					</a>
				</div>
				<div class="options">
					<template v-for="(option, optionName) in storeOptions()" :key="option">
						<!-- {{ option }} -->
						<button v-if="option?.length > 1" @click="removeOption(optionName)" class="filter_btn">
							{{ option[0] }}:
							<span class="value">
								{{ option[1] }}
							</span>
							<span class="close">
								<svg width="19" height="19" viewBox="0 0 19 19" fill="none">
									<use href="/icons/sprite.svg#close"></use>
								</svg>
							</span>
						</button>
					</template>
				</div>
				<div class="products" ref="products">
					<card-list :cardList="cards" />
					<template v-if="lastPage > 1">
						<pagination :page-index="Number(storeParams()?._page)" :last-page="lastPage" />
					</template>
				</div>
			</div>
		</div>
	</default>
</template>

<script>
import '@/css/page/Catalog/Catalog.scss'
import Default from "@/components/Default.vue";
import pagination from "./pagination.vue";
import sidebar from "./sidebar.vue";
import { mapState, mapMutations } from 'vuex'

import cardList from "@/components/cardList.vue";
import scrollTo from "@/module/scrollTo.js";
import getURL from '@/module/getURL'

import axios from 'axios'

// import back from "@/mixin/back.js";

// import test, { aboba } from '@/module/test'

// const a = {
// 	penis: 'detrov',
// }

// let b = {
// 	bogdan: 'ia hochu pitcht'
// }

// const c = a.bind(b)

// console.log(Math.ceil(3/2));

export default {
	name: "Catalog",
	data() {
		return {
			cards: [],
			load: false,
			limit: 21,
			lastPage: 14,
			categoryId: null,
			showContent: false,
			loadContent: false,
			params: this.storeParams(),
			options: {},
		}
	},
	methods: {
		...mapState({
			storeParams: store => store.catalogStore.params,
			storeOptions: store => store.catalogStore.options,
			storeShowContent: store => store.catalogStore.showContent,
		}),

		...mapMutations({
			setParam: 'catalogStore/setParam',
			setParams: 'catalogStore/setParams',
			setOptions: 'catalogStore/setOptions',
			deleteParam: 'catalogStore/deleteParam',
			setShowContent: 'catalogStore/setShowContent',
		}),

		getProduct() {
			let url = 'http://localhost:3000/cards'
			url += editURL(getURL(this.params, `_limit=${this.limit}${this.$route.params.categoryId ? '&Manufacturer_categoryId_like=' + this.$route.params.categoryId : ''}`))

			axios({
				method: 'get',
				url
			}).then(res => {
				const lastPage = (res.headers['x-total-count'])
				this.lastPage = Math.ceil(lastPage / this.limit)

				return res.data
			}).then(data => {
				if (this.storeShowContent()) {
					this.setShowContent()
					this.cards = [...this.cards, ...data]
				} else {
					this.cards = data;
				}

				if (this.load) window.history.replaceState(null, null, getURL(this.params));
				this.load = true
			})

			// console.log(editURL((url)));

			// this.setSession()

			// костыль
			function editURL(url) {
				if (url.includes(',')) {
					let ajaxURL = url.replace('?', '')
					// console.log(url);
					return ajaxURL.split('&').map(item => {
						if (item.includes(',')) {
							const itemArr = item.split('=')
							return `&${itemArr[0]}=[${itemArr[1]}]`
						} else {
							return `&${item}`
						}
					}).join('').replace('&', '?')
				}
				return url
			}
		},
		logParams() {
			setTimeout(() => {
				this.logParams()
				// console.log(this.params);
			}, 5000);
		},

		initRout() {
			// console.log(this.$route);

			// this.categoryId = 
			// this.$route.meta.title = this.$route || this.$root.meta.title
		},

		initParams() {
			const search = decodeURIComponent(location.search.replace('?', ''))

			if (search) {
				let loadParams = {}
				let loadOptions = {}

				const searchItems = search.split('&')
				searchItems.forEach(searchItem => {
					const [name, value] = searchItem.split('=')

					let val = {
						value: value,
					}

					if (name == 'Manufacturer_ID_like') {
						const paramsArr = val.value.split(',')
						val = {
							value: {},
						}
						paramsArr.forEach(item => {
							val.value[item] = item
						})
					}

					// console.log('init val: ', val);

					const filterBody = document.querySelector(`[data-filter-name="${name}"]`)
					if (name == 'Manufacturer_ID_like') {
						const optionLng = value.split(',').length

						val.text =  axios({
							method: 'get',
							url: `http://localhost:3000/cards?_limit=1&Manufacturer_ID=${value}`,
						}).then((res) => {
							
							const text = filterBody.dataset.filterText

							console.log(res.data);

							console.log(this.storeOptions());
							this.setOptions({
								...this.storeOptions(),
								[name]: [text, (+optionLng > 1) ? `${optionLng} значения` : res.data[0]?.Manufacturer],
							})
							
							// console.log(this);
							// a.f = res.data
						})
					} else {
						loadOptions[name] = [filterBody.dataset.filterText, value]
					}

					loadParams[name] = val
				})
				this.setOptions(loadOptions)
				this.setParams(loadParams)
				// console.log(this.storeParams());
				// this.getProduct()
			} else {
				this.getProduct()
			}
		},

		removeOption(name) {
			// console.log(val);
			const filterBody = document.querySelector(`[data-filter-name="${name}"]`)
			const filterInps = filterBody.querySelectorAll('input')
			// console.log(filterBody, filterInps[0]);

			let newOptions = this.storeOptions()
			console.log(newOptions);
			newOptions[name] = []

			filterInps.forEach(inp => {
				// console.log(inp.getAttribute('type'));
				// console.log(inp.checked);
				if (inp.type == 'checkbox') {
					inp.checked = false
				} else {
					inp.value = ''
				}
			})

			this.setOptions(newOptions)
			this.deleteParam(name)
			// console.log(this.storeParams());
		}
	},
	mounted() {
		// this.initRout()
		// console.log(this.$watch());
		// console.log(this.$parent);
		this.initParams()
	},
	watch: {
		params: {
			handler(val) {
				this.getProduct()
				if (!(this.storeShowContent())) scrollTo()
				console.log(this.storeParams());
			},
			deep: true,
		},
		cards(val) {
			// console.log(val);
		},
		'$route.path'() {
			// console.log('Совершён переход по ссылке')
			// this.getProduct()
			let isChange = false
			let newParams = {}

			for (const param in this.params) {
				if (this.params[param]) {
					isChange = true
				}
				newParams[param] = ''
			}
			if (isChange) {
				this.setParams(newParams)
			} else {
				this.getProduct()
			}
		}
	},
	components: {
		Default,
		cardList,
		sidebar,
		pagination,
	}
}
</script>