/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
`;

/* Этап 2. Получение данных */

const data = JSON.parse(jsonString);
const list = data.list;

let listObj = []
let studentsObject = {
    list: listObj
}

for (let obj of list) {
    listObj.push({
      name: obj.name,
      age: Number(obj.age),
      prof: obj.prof
  })
}

console.log(studentsObject)
