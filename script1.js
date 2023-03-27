const squadre = [
    {
        nome : "lazio",
        punti: 0,
        falli: 0,
    },
    {
        nome : "roma",
        punti: 0,
        falli: 0,
    },
    {
        nome : "juvenus",
        punti: 0,
        falli: 0,
    },
    {
        nome : "inter",
        punti: 0,
        falli: 0,
    },
]

squadre.forEach((elem) => {
   elem.punti = getRndIntegeger(0 , 100);
   elem.falli = getRndIntegeger(0, 100);

});

function getRndIntegeger(min,max){
    return Math.floor(Math.random() * (max-min + 1)) + min ;
}

const newArray = squadre.map((elem) => {
    const {nome, falli} = elem;
    return{
        nome,
        falli,
    }
})

console.log(newArray);