const CACHE_KEY = "biodata_santri";

function checkForStorage() {
    return typeof(Storage) !== "undefined"
}

function putData(data) {
    if (checkForStorage()) {
        let bioData = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            bioData = [];
        } else {
            bioData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        bioData.unshift(data);

        localStorage.setItem(CACHE_KEY, JSON.stringify(bioData));
    }
}

function showData() {
    if (checkForStorage()) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
}

function renderHistory() {
    const bioData = showData();
    let bioList = document.querySelector("#biodata");

    bioList.innerHTML = "";

    for (let bio of bioData) {
        
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + bio.namaLengkap + "</td>";
        row.innerHTML += "<td>" + bio.TTL + "</td>";
        row.innerHTML += "<td>" + bio.alamat + "</td>";
        row.innerHTML += "<td>" + bio.nilaiRata + "</td>";
        row.innerHTML += "<td>" + bio.asalSekolah + "</td>";

        bioList.appendChild(row);

    }
}

renderHistory();







