

/*Функция-обертка над XMLHttpRequest, получающая введенные пользователем 
параметры и осуществляющая запрос
callback - функция, которая вызовется при успешном выполнении
*/

function useRequest(imageWidth, imageHeight, numImagesAvailable = 3) {
    let xhr = new XMLHttpRequest();
    let randomNumber = Math.floor(Math.random() * numImagesAvailable);
    let readyURL = `https://source.unsplash.com/collection/928423/${imageWidth}x${imageHeight}/?sig=${randomNumber}`
    //`${url}${getWidth}\/${getHeight}\/all`
    console.log(readyURL)
    xhr.open('GET', readyURL, true);
  
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {

            if (Object.keys(localStorage)) {
                let keys = Object.keys(localStorage);
                for(let key of keys) {
                    divWrong.innerHTML +=`${key}: ${localStorage.getItem(key)}`;
                }
            } else {
                divWrong.innerHTML = `${JSON.parse(xhr.response)}`}
            }
            
            //console.log('Результат: ', JSON.parse(xhr.response));
            //console.log('Результат: ', xhr.response);
        }
    
    // Добавляем обрабочик ошибки
    xhr.onerror = function() {
        // обработаем ошибку, не связанную с HTTP (например, нет соединения)
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };


    xhr.send();
    
}

    




  const btnReq = document.querySelector('.btn-req');

  const divWrong = document.querySelector('.div-wrong');
  

  // На кнопку вешаем обработчик запроса
  btnReq.addEventListener('click', async () => {
    const widthParam = document.querySelector('.input-width').value;
    const heightParam = document.querySelector('.input-height').value;
    // Настраиваем наш запрос
  
    if (widthParam >= 100 && widthParam <= 500 && heightParam >= 100 && heightParam <= 500) {
        divWrong.innerHTML = "Запрос отправлен"
        await useRequest(widthParam, heightParam);
    } else {
        divWrong.innerHTML = "Число вне диапазона от 100 до 500!"
    }
  });