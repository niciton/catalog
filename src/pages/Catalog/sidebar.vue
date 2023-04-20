<template>
	<div class="sidebar">
		<category-list />

		<!-- filters -->
		<div class="filters_wrap">
			<div class="filters_title">
				Фильтр по марке
				<span></span>
			</div>
			<div class="filters_wrap scroll-text" data-filter-name="Manufacturer_ID_like" data-filter-text="Фильтр по марке">
				<template v-for="filter in filters" :key="filters.id">
					<label class="filter_label">
						<input type="checkbox" :checked="isCheck(filter.id, 'Manufacturer_ID_like')" :value="filter.id" @change="setFilter" />
						<span class="filter_label__inp">
							<span>
								<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 3.15966L4.77331 7L9 1" stroke="#313131" stroke-miterlimit="22.9256" stroke-linecap="round"
										stroke-linejoin="round" />
								</svg>
							</span>
						</span>
						<span class="filter_label__text">
							{{ filter.text }}
						</span>
					</label>
				</template>
				<label class="filter_label disabled">
					<span class="filter_label__inp">
						<input type="checkbox" disabled />
						<span>
							<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 3.15966L4.77331 7L9 1" stroke="#313131" stroke-miterlimit="22.9256" stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>
						</span>
					</span>
					<span class="filter_label__text"> ГАЗ </span>
				</label>
			</div>
		</div>
		<button class="yellow_btn reset_btn hover_black">
			Сбросить фильтр
		</button>
	</div>
</template>

<script>
import categoryList from '@/components/categoryList.vue';

import { mapMutations, mapState } from 'vuex'
import axios from 'axios';

export default {
	name: "sidebar",
	data() {
		return {
			filters: {},
			params: this.storeParams()
		}
	},
	methods: {
		...mapState({
			storeParams: store => store.catalogStore.params,
			storeShowContent: store => store.catalogStore.showContent,
			storeLoadFilters: store => store.catalogStore.loadFilters
		}),

		...mapMutations({
			setParam: 'catalogStore/setParam',
			setParams: 'catalogStore/setParams',
			setShowContent: 'catalogStore/setShowContent',
		}),
		initFilters() {
			const url = `http://localhost:3000/cards${this.$route.params.categoryId ? '?Manufacturer_categoryId_like=' + this.$route.params.categoryId : ''}`
			// console.log(url, this.$route.params.categoryId);
			axios({
				method: 'get',
				url,
			}).then(res => {
				return res.data
			}).then(data => {
				this.filters = {}
				for (let i = 0; i < data.length; i++) {
					const card = data[i]
					if (!(card.Manufacturer_ID in this.filters)) {
						this.filters[card.Manufacturer_ID] = {
							text: card.Manufacturer,
							id: card.Manufacturer_ID,
						}
					}
				}
			})
		},
		setFilter(e) {
			// console.log(e);
			const inp = e.target
			const label = inp.closest('.filter_label')
			const filterId = inp.value
			const name = inp.closest('[data-filter-name]').dataset.filterName

			let newParams = this.storeParams()._page = ''
			// console.log(newParams);

			// console.log('filter: ', this.params[`${name}`]);

			let paramsObj = {
				name,
				val: {
					value: {
						...this.storeParams()[name]?.value,
						[filterId]: filterId,
					},

					text: this.getText(filterId, 1)
				},
			}

			if (typeof (this.params[name]?.value) == 'object') {
				
				// let val = {
				// 	...this.storeParams()[`${name}`].value,
				// }

				// console.log(inp.checked);

				if (!inp.checked) {
					delete paramsObj.val.value[filterId]
				}
				console.log(Object.values(paramsObj.val.value).length);
				paramsObj.val.text = this.getText(filterId, Object.values(paramsObj.val.value).length)
			} 
			this.setParam(paramsObj)
		},
		getText(filterId, lng){
			const textValue = this.filters[filterId].text
			if (lng >= 1) {
				return ['Фильтр по марке', lng > 1 ? `${lng} значения` : textValue]
			} else {
				return []
			}
		},
		isCheck(id, filterId){
			const filterObj = this.params[filterId]?.value || {}
			return typeof filterObj == 'object' ? id in filterObj : id == filterObj
		},
	},
	mounted() {
		this.initFilters()
	},
	watch: {
		params: {
			handler(val){
				// console.log('sidebar: ', val);
			},

			deep: true,
		},
		'$route.path'(){
			// console.log('sidebar');
			this.initFilters()
		}
	},
	components: {
		categoryList,
	},
}
</script>
