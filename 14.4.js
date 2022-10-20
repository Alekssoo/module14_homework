
// Создаем promise
const myPromise = new Promise((resolve, reject) => {
let randNumber = Math.ceil(Math.random()*100);
  
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
});

// Выполняем promise
myPromise
  .then((result) => {
    console.log(`${result.message} Сгенерированное число — ${result.number}`);
  })
  .catch((error) => {
    console.log(`${error.message} Сгенерированное число — ${error.number}`);
  });