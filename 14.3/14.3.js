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
            console.log('Результат: ', JSON.parse(xhr.response));
        }
    };
}



  const btnReq = document.querySelector('.btn-req');
  const valueParam_1 = document.querySelector('.input-1').value;
  const valueParam_2 = document.querySelector('.input-2').value;
  const divWrong = document.querySelector('.divWrong');
  

  // На кнопку вешаем обработчик запроса
  btnReq.addEventListener('click', () => {
    if (99<valueParam_1<501 && 99<valueParam_2<501) {
    useRequest(reqUrl, valueParam_1, valueParam_2);
    } else {
        divWrong.innerHTML = "Число вне диапазона от 100 до 500! "
    }
  });