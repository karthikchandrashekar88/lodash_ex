/**
 * Created by root on 27/6/17.
 */
console.log('###');
var _ = require('lodash');
var objArr = [
    {
        name : 'sakura'
    },
    {
        name : 'rourin'
    },
    {
        name : 'miazaki'
    },
    {
        name : 'hiyate'
    }
];

var resArr = _.remove(objArr,function(obj){
    return (obj.name === 'miazaki');
});

console.log('resArr :',resArr);
console.log('original arr :',objArr);/**
 * Created by root on 27/6/17.
 */
