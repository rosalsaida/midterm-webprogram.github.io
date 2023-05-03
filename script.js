function pesanMieAyam() {
    var nama = document.getElementById('nama').value;
    var alamat = document.getElementById('alamat').value;
    var no_hp = document.getElementById('no_hp').value;
    var pilihan_mie = document.getElementById('pilihan_mie').value;
    var jumlah_porsi = parseInt(document.getElementById('jumlah_porsi').value);
    var keterangan = document.getElementById('keterangan').value;

    var harga_porsi = 0;
    switch (pilihan_mie) {
        case 'Mie Ayam Bakso':
            harga_porsi += 13000;
            break;
        case 'Mie Ayam Bakso Pangsit':
            harga_porsi += 15000;
            break;
        case 'Mie Ayam Pangsit':
            harga_porsi += 12000;
            break;
        case 'Mie Ayam Pecel':
            harga_porsi += 15000;
            break;
    }
    var total_harga = harga_porsi * jumlah_porsi;

    alert("Apakah Anda yakin pesanan Anda sudah benar?");

    var status = "Terima kasih, <b>" + nama + "</b>! Pesanan Anda masuk ke dalam antrian.";
    var status1 = "Mohon tunggu proses pesanan hingga selesai!"

    document.getElementById('status_pembelian').innerHTML = status;
    document.getElementById('status_pembelian1').innerHTML = status1;
    document.getElementById('nama_pembeli').innerHTML = nama;
    document.getElementById('alamat_pembeli').innerHTML = alamat;
    document.getElementById('no_hp_pembeli').innerHTML = no_hp;
    document.getElementById('pilihan_mie_pembeli').innerHTML = pilihan_mie;
    document.getElementById('jumlah_porsi_pembeli').innerHTML = jumlah_porsi;
    document.getElementById('keterangan_pembeli').innerHTML = keterangan;
    document.getElementById('total_pembayaran').innerHTML = "Rp " + total_harga;
}