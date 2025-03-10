const myHeaders = new Headers();
myHeaders.append("authorization", "edb20bef-e531-4d73-bfa7-991c7b9aca48");



functionMe(){
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/users/me", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));;
}




funcPatch(){
const raw = JSON.stringify({
  "name": "Marie Skłodowska Curie",
  "about": "Physicist and Chemist"
});

const requestOptions = {
  method: "PATCH",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/users/me?Content-Type=application/json", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));}



funcCards(){
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/cards", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}


funcPost(){
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("authorization", "edb20bef-e531-4d73-bfa7-991c7b9aca48");

const raw = "  {\r\n    \"likes\": [],\r\n    \"_id\": \"5d1f0611d321eb4bdcd707dd\",\r\n    \"name\": \"Байкал\",\r\n    \"link\": \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\",\r\n    \"owner\": {\r\n      \"name\": \"Jacques Cousteau\",\r\n      \"about\": \"Sailor, researcher\",\r\n      \"avatar\": \"https://pictures.s3.yandex.net/frontend-developer/ava.jpg\",\r\n      \"_id\": \"ef5f7423f7f5e22bef4ad607\",\r\n      \"cohort\": \"local\"\r\n    },\r\n    \"createdAt\": \"2019-07-05T08:10:57.741Z\"\r\n  },";

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://nomoreparties.co/v1/apf-cohort-202/cards", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}
