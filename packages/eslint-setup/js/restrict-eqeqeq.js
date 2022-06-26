import lodash from 'lodash'
import _ from 'underscore'

let arr = ['a', 'b', 'c']
const index=lodash.findIndex(arr,'a')
const index1=_.findIndex(arr,'a')
console.log(index)
function checkEven(number){
  if(number%2==0){
    return true
  }
  return false
}

checkEven(4)
