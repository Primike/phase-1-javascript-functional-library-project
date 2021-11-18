const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
  
const myEach = function(collection, callback) {
    const newCollection = standardizeInput(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      callback(newCollection[idx]);
    }
  
    return collection;
}

function myMap(collection, callback) {
    const newCollection = standardizeInput(collection);
    let array = []
    for(const element of newCollection) {
        array.push(callback(element))
    }
    return array
}

function myReduce(collection, callback, acc) {
    let newCollection = standardizeInput(collection);
    let value = acc 
    if(!acc) {
        value = newCollection[0]
        newCollection = newCollection.slice(1)
    }
    for(const element of newCollection) {
        value = callback(value, element, newCollection)
    }
    return value
}

function myFind(collection,predicate) {
    let newCollection = standardizeInput(collection);
    let value
    for(const element of newCollection) {
        if(predicate(element)) {
            value = element
            return value
        }
    }
    return value
}

function myFilter(collection, predicate) {
    let newCollection = standardizeInput(collection);
    let array = []
    for(const element of newCollection) {
        if(predicate(element)) {
            array.push(element)
        }
    }
    return array
}

function mySize(collection) {
    let newCollection = standardizeInput(collection);
    return newCollection.length
}

function myFirst(array, stop=false) {
    return (stop) ? array.slice(0, stop) : array[0];
}

function myLast(array, start=false) {
    return (start) ? array.slice(array.length-start, array.length) : array[array.length-1];
}

function myKeys(obj) {
    const keys = [];
    for (let key in obj){
        keys.push(key);
    }
    return keys;
}

function myValues(obj) {
    const values = [];
    for (let key in obj){
        values.push(obj[key]);
    }
    return values;
}