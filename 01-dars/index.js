// sintaksisi: fetch(url, configuration);

// 1 - usul:

const getDate = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  console.log(data);
};

// 2 - usul:
const loading = document.querySelector(".text");
const dataList = document.querySelector(".data");
const single = document.querySelector(".single-data");

const getData = () => {
  loading.textContent = "Loading...";
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      loading.textContent = null;
      dataList.textContent = null;

      res.forEach((value) => {
        let div = document.createElement("div");
        div.innerHTML = `<b>${value.id}</b> - <span>${value.name} </span><button onclick="onSelect(${value.id})">select</button><hr>`;
        dataList.appendChild(div);
      });
    });
};

function onSelect(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      let one = document.createElement("div");
      one.innerHTML = `${res.name}`;
      single.appendChild(one);
    });
}
