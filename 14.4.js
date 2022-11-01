
function usePromise() {

    // Создаем promise
    const myPromise = new Promise((resolve, reject) => {
        let randNumber = 0;
        let rand = () => {
            //генерируем случайное число
            randNumber = Math.ceil(Math.random()*100)
            //если четное, то успешное выполнение
            if (randNumber %2 === 0) {  
            resolve({
                message: "Завершено успешно.",
                number: randNumber,
            });
            } else { //если нечетное, то неуспешное выполнение
                reject({
                    message: "Завершено с ошибкой.",
                    number: randNumber,
                });
            }
        }
        setTimeout(rand, 3000)
    
    });

    // Выполняем promise
    myPromise
        .then( 
        async (promiseResult) => {console.log(`${await promiseResult.message} Сгенерированное число — ${await promiseResult.number}`);
        })
        .catch(async (promiseResult) => {
        console.log(`${await promiseResult.message} Сгенерированное число — ${await promiseResult.number}`)
        });

    };

    usePromise()