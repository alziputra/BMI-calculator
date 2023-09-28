// Menambahkan event listener pada input untuk memastikan hanya angka yang diterima
document.getElementById("weight").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
document.getElementById("height").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// Fungsi untuk menghitung BMI dan menampilkan hasil
function calculateBMI() {
    // Ambil value dari input
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    // Menyimpan pesan error
    let error = "";

    // Validasi input
    if (isNaN(weight) || weight === 0) {
        error = "Please fill your weight";
    } else if (isNaN(height) || height === 0) {
        error = "Please fill your height";
    } else {
        // Hitung BMI
        let bmi = weight / ((height / 100) ** 2);
        // Batasi 2 angka di belakang koma
        bmi = bmi.toFixed(2);

        // Tentukan kategori BMI
        let category;
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }

        // Tampilkan hasil
        let result = "Your BMI is <strong>" + bmi + "</strong> which means you are <strong>" + category + "</strong>.";
        document.getElementById("result").innerHTML = result;
    }

    // Tampilkan pesan error jika ada
    if (error !== "") {
        document.getElementById("result").innerHTML = error;
    }
}

// Fungsi untuk mereset form
function refreshForm() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
}