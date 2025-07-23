let dataNumber = 1000; // Ini adalah Number
        document.write("<h3>1. Tipe Data Number</h3>");
        document.write("Nilai: " + dataNumber + "<br/>");
        document.write("Tipe: " + typeof dataNumber + "<br/><br/>");

        // --- 2. Contoh String ---
        let dataString = "Halo, dunia!"; // Ini adalah String
        document.write("<h3>2. Tipe Data String</h3>");
        document.write("Nilai: " + dataString + "<br/>");
        document.write("Tipe: " + typeof dataString + "<br/><br/>");

        // --- 3. Contoh Boolean ---
        let dataBoolean = true; // Ini adalah Boolean
        document.write("<h3>3. Tipe Data Boolean</h3>");
        document.write("Nilai: " + dataBoolean + "<br/>");
        document.write("Tipe: " + typeof dataBoolean + "<br/><br/>");

        // --- 4. Contoh Array ---
        // Array adalah 'daftar' atau 'kumpulan' nilai
        let daftarBuah = ['Apel', 'Pisang', 'Jeruk', 'Mangga'];
        document.write("<h3>4. Tipe Data Array</h3>");
        document.write("Daftar Buah: " + daftarBuah + "<br/>"); // Menampilkan seluruh array
        document.write("Buah pertama: " + daftarBuah[0] + "<br/>"); // Mengakses elemen pertama (indeks 0)
        document.write("Tipe: " + typeof daftarBuah + " (Perhatikan ini: Array adalah tipe khusus dari Object)<br/><br/>");


        // --- 5. Contoh Object ---
        // Object adalah 'benda' dengan 'properti' dan 'nilai'
        let informasiPengguna = {
            nama: 'Anton',
            umur: 17,
            alamat: 'Jl. Melati No. 5, Klaten',
            isPelajar: true,
            hobi: ['Membaca', 'Coding', 'Main Game'] // Object bisa berisi Array juga!
        };

        document.write("<h3>5. Tipe Data Object</h3>");
        document.write("Nama Pengguna: " + informasiPengguna.nama + "<br/>");
        document.write("Umur Pengguna: " + informasiPengguna.umur + " tahun<br/>");
        document.write("Alamat Pengguna: " + informasiPengguna.alamat + "<br/>");
        document.write("Apakah pelajar? " + informasiPengguna.isPelajar + "<br/>");
        document.write("Hobi Pengguna: " + informasiPengguna.hobi[1] + " (hobi ke-2)<br/>"); // Mengakses hobi dari array di dalam object
        document.write("Tipe: " + typeof informasiPengguna + "<br/><br/>");