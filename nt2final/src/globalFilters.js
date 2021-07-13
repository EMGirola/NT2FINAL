import Vue from 'vue';




Vue.filter('uppercase', function(value) {
    if (!value) return '';
    return value.toUpperCase();
});

Vue.filter('lowercase', function(value) {
    if (!value) return '';
    return value.toLowerCase();
});


Vue.filter('intercalate', function(value, initialValue) {
    if (!value) return '';

    let arrChar = [...value];
    let capitalize = initialValue;

    for (let i = 0; i < arrChar.length; i++) {
        
        if (capitalize) {
            arrChar[i] = arrChar[i].toUpperCase();
        }
        else {
            arrChar[i] = arrChar[i].toLowerCase();
        }

        capitalize = !capitalize;
    }

    return arrChar.join('');
});

Vue.filter('encode', function(value) {
    if (!value) return '';

    let arrChar = [...value];

    const encoder = new Map();

    encoder.set('a', 'u');
    encoder.set('e', 'o');
    encoder.set('i', 'i');
    encoder.set('o', 'e');
    encoder.set('u', 'a');

    for (let i = 0; i < arrChar.length; i++) {
        
        if (encoder.has(arrChar[i])){
            arrChar[i] = encoder.get(arrChar[i]);
        } 
    }

    return arrChar.join('');
});