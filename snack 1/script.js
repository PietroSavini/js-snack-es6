const bikes = [
   {
    modello : "a",
    peso : 10 ,

   },
   {
    modello : "b",
    peso : 18,
   },
   {
    modello : "c",
    peso: 12,
   },
];

let lowestWeight = bikes[0];

bikes.forEach((element) => {
    if(element.peso < lowestWeight.peso){
        lowestWeight = element;
    }
});

console.log(lowestWeight);