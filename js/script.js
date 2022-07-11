'use strict';

let someObject = {
    a: 'a',
    b: 'b',
    c: 'c',
    obj: {
        d: 'd',
        e: 'e',
        f: 'f',
        obj: {
            j: 'j',
            h: 'h',
            i: 'i',
        }
    }
}

function deepFreeze (obj) {
    function recursion (object) {
        for (let key in object) {
            if (typeof object[key] === 'object') {
                Object.defineProperty(object, key, {
                    configurable: false,
                    writable: false,
                    enumerable: false
                });
                deepFreeze(object[key]);
            } else {
                Object.defineProperty(object, key, {
                    configurable: false,
                    writable: false,
                    enumerable: false
                });
            }
        }
    }
    recursion(obj);
}

deepFreeze(someObject);

console.log(Object.getOwnPropertyDescriptor(someObject.obj, `obj`));

console.log(someObject['obj']['obj']);

console.log(someObject);