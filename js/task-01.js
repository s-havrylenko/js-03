/*
Напиши скрипт, который, для объекта user, последовательно:

  добавляет поле mood со значением 'happy'
  заменяет значение hobby на 'skydiving'
  заменяет значение premium на false
  выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
*/


const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mod = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  // Ключ
  // console.log(key);

  // Значение свойства
  // console.log(user[key]);
  
  console.log(`${key}: ${user[key]}`);
}


