export default {
    currency(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
    capitalizeFirstLetter(string) {
        return string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
    },
    cleanObject(obj) {
        for (var propName in obj) {
          if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
            delete obj[propName];
          }
        }
        return obj;
    },
    generateURLQuery(obj) {
        return new URLSearchParams(obj).toString() ? '?' + new URLSearchParams(obj).toString() : '';
    }
}