import sum from './sum.mjs'
import sub from './sub.mjs'

/*
    .mjs -> module JS
        - nesse caso não há necessidade de definir {"type": "module"} nos scripts de package.json
    .cjs -> common JS
*/

console.log(sum(2, 2))
console.log(sub(6, 2))
