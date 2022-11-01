
const btnReq = document.querySelector('.btn-req');

const divResult = document.querySelector('.div-result');

// адрес для запроса. 

const reqUrl = "https://loremflickr.com/json/g/";


/*Функция-обертка над XMLHttpRequest, получающая введенные пользователем 
параметры и осуществляющая запрос
callback - функция, которая вызовется при успешном выполнении,
в данном случае она для последующих доработок и здесь не используется
*/

function useRequest(url, getWidth, getHeight, callback) {
    //создание экземпляра XHR и инициализация запроса
    let xhr = new XMLHttpRequest();
    let readyURL = `${url}${getWidth}\/${getHeight}\/all`
    console.log(readyURL)
    xhr.open('GET', readyURL, true);
    
    //при успешном выполнении запроса
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            let data = JSON.parse(xhr.response);
            divResult.innerHTML = `<img src = ${data.file} alt="result-image">`
        }
    };

    // обработка ошибки отправки запроса
    xhr.onerror = function() { 
        console.log(`Ошибка соединения`);
      };

    //отправка запроса
    xhr.send();
}




  

  // На кнопку вешаем обработчик запроса
  btnReq.addEventListener('click', () => {
    const valueWidth = document.querySelector('.input-width').value;
    const valueHeight = document.querySelector('.input-height').value;
    if (valueWidth >= 100 && valueWidth <= 500 && valueHeight >= 100 && valueHeight <= 500) {
        
        useRequest(reqUrl, valueWidth, valueHeight);
    } else {
        divResult.innerHTML = "Число вне диапазона от 100 до 500!"
    }
  });