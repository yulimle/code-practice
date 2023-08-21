function solution(order) {
    let money = 0
    order.map(el =>{
        if(el.includes("latte")){
            money += 5000
        }else{
            money += 4500
        }
    })
    return money
}