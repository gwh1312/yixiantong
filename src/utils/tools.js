// 工具函数
export default {
    formatJSON(array, key) {
        return array.filter ((item) => {
            if (item[key]) {
             item[key] = item[key].split(',');
            }
            return item
        })
    },
    jonToArr (str) {
        return JSON.parse(str)
    },
    strToArr(str) {
        return str.split(',')
    },
    replaceToSpace (str) {
        return str.replace(/,/g,' ')
    },
    trimSpace (str) {
        return str.replace(/\s+/g, '')   // 过滤空格
    },

    //节流函数 
   throttle (fn, delay) {
    var t = null,
    begin = new Date().getTime();

    return function () {
        let _self = this,
         args = arguments,
         cur = new Date().getTime();

        clearTimeout(t)  // 清除定时器

        if(cur > begin) {
            fn.apply(_self,args)
            begin = cur
        } else {
            t = setTimeout(function (){
                fn.apply(_self, args)
            }, delay)
        }
    }
   }
}
