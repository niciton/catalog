// import getURLAttribute from './getURLAttribute';

// ====getURL==== \\
export default function (params, urlParams = '') {
  let url = '';

  // console.log(params);

  if (urlParams) url += '&' + urlParams;

  // if (getURLAttribute('find').split('=')[1])
  //   url += '&' + getURLAttribute('find').replace(/[&?]/, '');

  if (Object.keys(params).length) {
    for (const name in params) {
      const value = params[name]?.value;

      if (typeof value === 'object') {
        delete value.text
        // console.log(delete value.text);
        const val = Object.keys(value);
        if (val.length) url += `&${name}=${String(val)}`;
      } else {
        if (value) url += `&${name}=${value}`;
      }
    }
  }

  // function encoder(val){
  //   return encodeURI(JSON.stringify(val))
  // }

  // console.log(url);
  if (url) {
    return url.replace('&', '?');
  } else {
    return (location.origin + location.pathname);
  }
}
