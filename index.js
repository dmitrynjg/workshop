'use strict';
 
document.querySelector(".registration-form").onsubmit = function(event) {
  event.preventDefault();
  const username = event.target.querySelector('input[name="username"]').value;
  const email = event.target.querySelector('input[name="email"]').value;
  const data = {
    username: username,
    email: email
  }
 
  fetch('http://localhost:80/user', {
      method: 'post',
      mode: 'no-cors',
      body: JSON.stringify({a:1})
    })
    .catch(function(error) {
      console.log('Request failed', error);
    });
};
 
















// document.querySelector(".registration-form").onsubmit = function(event) {
//   event.preventDefault();
//   const username = event.target.querySelector('input[name="username"]').value;
//   const email = event.target.querySelector('input[name="email"]').value;
//     let data = {
//       name:username,
//       emailu:email
//     };
//     fetch("http://127.0.0.1:80/user",
//     {
//       mode:'no-cors',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify(data)
//     })
//     .then(function(res){ console.log(res) })
//     .catch(function(res){ console.log(res) })
//   // TODO: сделайте POST запрос на ваш сервер для сохранения пользователя
//   // пример маршрута POST /user
//   console.log("submit", username, email);
//   }
  

// window.onload = function() {
//   // TODO: GET запрос (GET /users)
//   // полученные данные выведите в DOM (.user-list)
// };
