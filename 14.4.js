
// Создаем promise
const myPromise = new Promise((resolve, reject) => {
    let randNumber = 0;
    let rand = () => {
        randNumber = Math.ceil(Math.random()*100)
        if (randNumber %2 === 0) {
            resolve({
                message: "Завершено успешно.",
                number: randNumber,
            });
        } else {
            reject({
                message: "Завершено с ошибкой.",
                number: randNumber,
            });
        }
    }
    setTimeout(rand, 3000)
    
});

// Выполняем promise
 const getMyPromise = async() => {
    const promiseResult = await myPromise;
    try {
        console.log(`${await promiseResult.message} Сгенерированное число — ${await promiseResult.number}`);
    }
    catch(promiseResult) {
        console.log(`${promiseResult.message} Сгенерированное число — ${promiseResult.number}`)
    };
}

getMyPromise()