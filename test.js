let c = 0;
let w = "1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1"
for(let i = 0 ; i< w.length ;i++){
    if (w.charAt(i) === '0'){
        c +=1
    }
}
console.log(c)