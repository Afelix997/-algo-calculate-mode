const calculateMode = (inputArr) => {
    let answer=[]
    let obj={}
    let mostRep=inputArr[0];
    inputArr.forEach(value => {
        if (obj[value]){
        obj[value] +=1
    }else{
        obj[value]=1
    }})
    for (let key in obj)
        if (obj[key] > obj[mostRep]){
            mostRep = key;
        }
    for (let key in obj){
        if (obj[key] >= obj[mostRep]){
            answer.push(key)
    }}
    return answer
}

