<template>
	<card v-for="card in cardList" :key="card" :cardData="card"/>
</template>

<script>
import lozad from 'lozad';
import card from "@/components/card.vue";

export default {
	name: "cardList",
	props: {
		cardList: {
			type: Array,
			default: [],
		}
	},
	watch: {
		cardList(val) {
			// console.log(val)
		},
	},
	// mounted(){
	// 	console.log('ssdfdsfgsgfdsd');
	// 	lozad('.card img[data-srcset]').observe()
	// },
	components: {
		card
	},
}
</script>

<style scoped>

</style>