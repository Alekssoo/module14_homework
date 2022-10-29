// адрес для запроса. 

//const reqUrl = "https://loremflickr.com/json/g/320/240/all";
//const reqUrl = "https://loremflickr.com/json/g/";


/*Функция-обертка над XMLHttpRequest, получающая введенные пользователем 
параметры и осуществляющая запрос
callback - функция, которая вызовется при успешном выполнении
*/

function useRequest(url, imageWidth, imageHeight, numImagesAvailable = 1) {
    //let xhr = new XMLHttpRequest();
    let randomNumber = Math.floor(Math.random() * numImagesAvailable);
    let readyURL = `https://source.unsplash.com/collection/928423/${imageWidth}x${imageHeight}/?sig=${randomNumber}`
    //`${url}${getWidth}\/${getHeight}\/all`
    console.log(readyURL)
    //xhr.open('GET', readyURL, true);
  
    // xhr.onload = function() {
    //     if (xhr.status != 200) {
    //         console.log('Статус ответа: ', xhr.status);
    //     } else {
    //         console.log('Результат: ', JSON.parse(xhr.response));
    //     }
    return fetch(readyURL, options)
        .then((response) => {
        console.log('response', response);
        return response.json();
        })
        .then((json) => { 
            console.log(json)
            return json; })
        .catch(() => { console.log('error') });
    


    //xhr.send();
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
        await useRequest(reqUrl, widthParam, heightParam);
    } else {
        divWrong.innerHTML = "Число вне диапазона от 100 до 500!"
    }
  });