import lodash from 'lodash'
import _ from 'underscore'

const arr = ['a', 'b', 'c']
const index = lodash.findIndex(arr, 'a')
const index1 = _.findIndex(arr, 'a')
console.log(index)
function checkEven(number) {
  return number % 2 == 0;

}

checkEven(4)
