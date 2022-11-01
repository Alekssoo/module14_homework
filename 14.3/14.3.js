// адрес для запроса. 

//const reqUrl = "https://loremflickr.com/json/g/320/240/all";
const reqUrl = "https://loremflickr.com/json/g/";


/*Функция-обертка над XMLHttpRequest, получающая введенные пользователем 
параметры и осуществляющая запрос
callback - функция, которая вызовется при успешном выполнении
*/

function useRequest(url, getParam1, getParam2, callback) {
    let xhr = new XMLHttpRequest();
    let readyURL = `${url}${getParam1}\/${getParam2}\/all`
    console.log(readyURL)
    xhr.open('GET', readyURL, true);
  
    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            let data = JSON.parse(xhr.response);
            console.log(`Результат: ${data}`);
            console.log(`Результат: ${data.file}`);
        }
    };

    // происходит, только когда запрос совсем не получилось выполнить
    xhr.onerror = function() { 
        console.log(`Ошибка соединения`);
      };


    xhr.send();
}



  const btnReq = document.querySelector('.btn-req');

  const divWrong = document.querySelector('.div-wrong');
  

  // На кнопку вешаем обработчик запроса
  btnReq.addEventListener('click', () => {
    const valueParam_1 = document.querySelector('.input-1').value;
    const valueParam_2 = document.querySelector('.input-2').value;
    if (valueParam_1 >= 100 && valueParam_1 <= 500 && valueParam_2 >= 100 && valueParam_2 <= 500) {
        
        useRequest(reqUrl, valueParam_1, valueParam_2);
        divWrong.innerHTML = "Запрос отправлен"
    } else {
        divWrong.innerHTML = "Число вне диапазона от 100 до 500!"
    }
  });