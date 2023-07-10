/*
 * Complete the 'jimOrders' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY orders as parameter.
 */

function jimOrders(orders) {
    let serveTimes = [];
    orders.forEach((customer, idx) => {
        let orderNumber = customer[0];
        let prepTime = customer[1];
        let serveTime = orderNumber + prepTime;
        let customerServeTime = [idx + 1, serveTime];
        serveTimes.push(customerServeTime)
    })

    let deliveryOrder = [];
    let sortedTimes = serveTimes.sort((a, b) => a[1] - b[1]);
    sortedTimes.forEach((person) => {
        deliveryOrder.push(person[0])
    })
    
    console.log(deliveryOrder)
    return deliveryOrder;
}

//////////////////////////////////////////////////////////////////////////
const jimOrders = orders => {
  let output = [];
  output = orders
    .map((client) => client.reduce((a, b) => a + b))
    .map((element, index) => ({ element, index: index + 1 }))
    .sort((a, b) => a.element - b.element)
    .map((m) => m.index);

 return output;
}

/////////////////////////////////////////////////////////////////////////
function jimOrders(orders) {
    let serveTimes = [];
    orders.forEach((customer, idx) => {
        serveTimes.push([idx + 1, customer[0] + customer[1]]);
    });

    return serveTimes.sort((a, b) => a[1] - b[1]).map((customer) => customer[0]);
}
