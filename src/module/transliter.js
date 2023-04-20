export default function (str){
	str = str.replace(/[ЪъЬь.,/()]+/g, '');
	const ru = {
			'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
			'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 'й': 'i',
			'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
			'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
			'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
			'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya', 
			' ': '', ',': '', '.': '', '-': '_', 'ь': '',
		},

		n_str = [],
		strArr = [...str],

		len = strArr.length;

	
	// console.log(str.replace(/[ЪъЬь.,()]+/g, ''));

	for ( let i = 0; i < len; ++i ) {
		n_str.push(
			ru[ strArr[i] ]
			|| ru[ strArr[i].toLowerCase() ] == undefined && strArr[i]
			|| ru[ strArr[i].toLowerCase() ].replace(/^(.)/, ( match ) => match.toUpperCase())
		);
		// n_str.push(ru[ strArr[i].toLowerCase() ])
	}

	return n_str.join('');
}