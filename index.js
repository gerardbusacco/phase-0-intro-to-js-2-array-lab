// Write your solution here!
const cats = ["Milo" , "Otis" , "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat (name) {
    cats.shift(name)
}function appendCat(name,) {
 const newArray = [...cats]
 newArray.push(name)
 return newArray 
}
function prependCat(name,) {
    const newArray = [...cats]
    newArray.unshift(name)
    return newArray 
   }
function removeLastCat(name,) {
 const newArray = [...cats]
  newArray.pop(name)
   return newArray 
}
function removeFirstCat(name,) {
 const newArray = [...cats]
  newArray.shift(name)
   return newArray 
   }