<template>
	<button class="yellow_btn hover_black show_btn" v-if="page != lastPage" @click="addContent()">
		Показать ещё
	</button>
	<div class="pagination_wrap">
		<div class="Pagination">
			<div class="Pagination__inner">
				<a :href="'?_page=' + Number(page - 1)" class="Pagination__item Pagination__arrow" v-if="page != 1"
					@click.prevent="page = Number(page - 1)"></a>

				<a href="/catalog/" :class="['Pagination__item', { 'Pagination__item--active': page == 1 }]"
					@click.prevent="page = 1">1</a>

				<span class="Pagination__item Pagination__--" v-if="page > 5"></span>

				<template v-if="page + 4 < lastPage" v-for="(isActive, index) in pagesAmount" :key="index">
					<a :href="'?_page=' + setPage(index)" @click.prevent="page = setPage(index)"
						:class="['Pagination__item', { 'Pagination__item--active': page == setPage(index) }]">
						{{
							setPage(index)
						}}
					</a>
				</template>
				<template v-else>
					<template v-for="(isActive, index) in pagesAmount" :key="index">
						<a :href="'?_page=' + Number(lastPage - (pagesAmount - index))"
							@click.prevent="page = Number(lastPage - (pagesAmount - index))"
							:class="['Pagination__item', { 'Pagination__item--active': page == Number(lastPage - (pagesAmount - index)) }]"
							v-if="1 < Number(lastPage - (pagesAmount - index)) < lastPage" >
							{{
								Number(lastPage - (pagesAmount - index))
							}}
						</a>
					</template>
				</template>

				<span class="Pagination__item Pagination__--" v-if="lastPage - 4 > page && pagesAmount < lastPage - 2"></span>

				<a :href="'?_page=' + lastPage" :class="['Pagination__item', { 'Pagination__item--active': page == lastPage }]"
					@click.prevent="page = lastPage">{{ lastPage }}</a>

				<a :href="'?_page=' + Number(page + 1)" class="Pagination__item Pagination__arrow" v-if="page != lastPage"
					@click.prevent="page = Number(page + 1)"></a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
	name: "pagination",
	data() {
		return {
			page: this.pageIndex || 1,
			params: this.storeParams(),
			pagesAmount: 7,
			showContent: false,
		}
	},
	props: {
		lastPage: {
			type: Number,
			default: 10,
		},
		pageIndex: {
			type: Number,
			default: 1,
		},
	},
	methods: {
		...mapState({
			storeParams: store => store.catalogStore.params
		}),

		...mapMutations({
			setParam: 'catalogStore/setParam',
			setParams: 'catalogStore/setParams',
			setShowContent: 'catalogStore/setShowContent',
		}),

		setPage(index) {
			// const  = 
			// console.log(this.pagesAmount, 'sjadbhfhjsf');
			return this.page < 5 ? index + 2 : index + this.page - 3
		},
		addContent() {
			++this.page;
			this.setShowContent()
		},

		logParams() {
			setTimeout(() => {
				this.logParams()
				// console.log(this.params);
			}, 5000);
		},
		setAmount() {
			this.pagesAmount = this.lastPage <= 8 ? this.lastPage - 2 : 7
		},
	},
	mounted() {
		// console.log(this.page);
	},
	watch: {
		page(index) {
			const val = index == 1 ? '' : index
			this.setParam({ val: { value: val }, name: '_page' })
			// console.log('from pagination: ', typeof this.params);
		},
		pageIndex(val) {
			this.page = val || 1
		},
		lastPage(val) {
			console.log(val);
			this.setAmount()
		},
		pagesAmount(val) {
			console.log(val);
		},
		// params: {
		// 	handler(val) {
		// 		console.log(val);
		// 	},
		// 	deep: true
		// }
	},
}
</script>