<template>
	<ul class="AsideBlock" v-if="isLoad">
		<li v-for="category in categoryObj">
			<a :href="category.path" @click.prevent="setRout(category)" class="AsideBlock__title">
				<span></span>
				{{ category.name }}
			</a>
		</li>
	</ul>
</template>

<script>
// import '@/css/page/'; 

import getPath from '@/module/getPath.js';
import scrollTo from '@/module/scrollTo.js';
import axios from 'axios';

export default {
	data() {
		return {
			// categoryArr: [],
			categoryObj: {},
			isLoad: false,
		}
	},
	methods: {
		getCategory() {
			axios({
				method: 'get',
				url: 'http://localhost:3000/cards'
			}).then(res => {
				return res.data
			}).then(data => {
				for (let i = 0; i < data.length; i++) {
					const item = data[i]
					const id = item.Manufacturer_categoryId
					if (!(id in this.categoryObj)) {
						const name = item.Manufacturer_category

						// console.log(encodeURIComponent(btoa(transliter(name))));

						this.categoryObj[id] = {
							path: getPath('catalog', id, name),
							name,
							id,
						}
					}
				}
			}).then(() => {
				// console.log(this.categoryObj);
				this.isLoad = true
				this
			})
		},
		setRout(category) {

			// this.$router.options.routes.forEach(item => {
			// 	if (item.name == 'catalogCategory') {
			// 		console.log(item.meta);
			// 		item.meta.routs = [{
			// 			name: 'ne Главная',
			// 			path: '/',
			// 		}]
			// 	}
			// })

			// this.$router.push(`/catalog/${objId.id}/${objId.URLName}/`)
			this.$router.push(category.path)
			scrollTo(-1, -1)
			this.setRoutMeta(category)
		},
		setRoutMeta(category) {
			const categoryObj = this.categoryObj[this.$route.params.categoryId]

			this.$route.meta.title = categoryObj.name
			// this.$route.meta.title = category.name
			// this.$route.meta.routs = [{
			// 	name: 'ne Главная',
			// 	path: '/',
			// }]
		},
	},
	mounted() {
		this.getCategory()
	},
	watch: {
		categoryObj: {
			handler(val) {
			},
			deep: true,
		},
		'$route.path'() {
			if (this.$route.params.categoryId) {
				const categoryObj = this.categoryObj[this.$route.params.categoryId]
				this.$route.meta.title = categoryObj.name
			}
		},
	},
}
</script>