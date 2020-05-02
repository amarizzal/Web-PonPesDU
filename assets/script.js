const biodata = {
    namaLengkap: null,
    TTL: null,
    alamat: null,
    nilaiRata: null,
    asalSekolah: null,
};

function input() {

    biodata.namaLengkap = document.getElementById("nama").value;
    biodata.TTL = document.getElementById("ttl").value;
    biodata.alamat = document.getElementById("alamat").value;
    biodata.nilaiRata = document.getElementById("nilai").value;
    biodata.asalSekolah = document.getElementById("asal").value;

    if (biodata.namaLengkap == "" || biodata.TTL == "" || biodata.alamat == "" || biodata.nilaiRata == "" || biodata.asalSekolah == "") {
        alert("Anda harus mengisi semua data tanpa terkecuali !");
        return;
    }

    const bio = {
        namaLengkap: biodata.namaLengkap,
        TTL: biodata.TTL,
        alamat: biodata.alamat,
        nilaiRata: biodata.nilaiRata,
        asalSekolah: biodata.asalSekolah
    }

    putData(bio);
    renderHistory();
}

const buttons = document.querySelector(".button");
buttons.addEventListener('click', function(event) {
    input();
});
