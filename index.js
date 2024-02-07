function myEach(collection, callback){
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            callback(collection[i]);
        }
    } else if (typeof collection === 'object' && collection !== null){
        const values = Object.values(collection);
        for (let i = 0; i < values.length; i++){
            callback(values[i]);
        }
    }
        return collection;
    };
    
    function myMap(collection, callback){
        let mappedArray = [];
        if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i++){
                mappedArray.push(callback(collection[i]));
            }
        } else if (typeof collection === 'object' && collection !== null){
            const values = Object.values(collection);
            for(let i = 0; i < values.length; i++){
                mappedArray.push(callback(values[i]));
            }
        }
        return mappedArray;
    };
    
    function myReduce(collection, callback, acc) {
        if (Array.isArray(collection)) {
          let startingIndex = 0;
      
          if (acc === undefined) {
            acc = collection[0];
            startingIndex = 1;
          }
      
          for (let i = startingIndex; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
          }
        } else if (typeof collection === 'object' && collection !== null) {
          const values = Object.values(collection);
      
          if (acc === undefined) {
            acc = values[0];
            values.shift();
          }
      
          for (let i = 0; i < values.length; i++) {
            acc = callback(acc, values[i], collection);
          }
        }
      
        return acc;
      }
    
    function myFind(collection, predicate){
        let foundValue;
    
        if(Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if(predicate(collection[i])){
                    foundValue = collection[i]
                    break;
                }
            } 
        } else if (typeof collection === 'object' && collection !== null){
            const values = Object.values(collection);
            for(let i = 0; i < values.length; i++){
                if(predicate(values[i])){
                    foundValue = values[i];
                    break;
                }
            }
        }
        return foundValue;
    };
    
    function myFilter(collection, predicate){
       const myFilteredArray = [];
       if (Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(predicate(collection[i])){
                myFilteredArray.push(collection[i]);
                }
            }
        } else if(typeof collection === 'object' && collection !== null){
            const values = Object.values(collection);
            for(let i = 0; i < values.length; i++){
                if (predicate(values[i])){
                    myFilteredArray.push(values[i]);
                }
            }
        } 
        return myFilteredArray;
    };
    
    function mySize(collection){
        if (Array.isArray(collection) || typeof collection === 'string'){
            return collection.length;
        } else if (typeof collection === 'object' && collection !== null){
            return Object.keys(collection).length;
        }
        return 0;
    };
    
    function myFirst(array, n){
        if (n === undefined){
            return array[0];
        } else {
            return array.slice(0, n);
        }
    };
    
    function myLast(array, n) {
        if (n === undefined) {
            return array[array.length - 1]; // Return the last element
        } else {
            return array.slice(-n);
        }
    }
    
    function mySortBy(array, callback){
        // Bonus Function
    
    };
    
    function myFlatten(array, [shallow], newArr=[]){
        // Bonus Function
    };
    
    function myKeys(object){
        return Object.keys(object);
    };
    
    function myValues(object){
        return Object.values(object);
    };
    
    
    
    
    function myLast(array, n) {
        if (n === undefined) {
            return array[array.length - 1]; // Return the last element
        } else {
            return array.slice(-n);
        }
    }
    
    function mySortBy(array, callback){
        // Bonus Function
    
    };
    
    function myFlatten(array, [shallow], newArr=[]){
        // Bonus Function
    };
    
    function myKeys(object){
        return Object.keys(object);
    };
    
    function myValues(object){
        return Object.values(object);
    };
    
    
    