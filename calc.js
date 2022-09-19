// function tambah() {
//   //tangkap id form
//   var frm = document.getElementById("calcForm");
//   var a1 = parseFloat(frm.angka1.value);
//   var a2 = parseFloat(frm.angka2.value);
//   var total = a1 + a2; //rumus
//   frm.hasil.value = total; //penempatan hasil
// }

function hitung(tombol) {
  //tangkap id form
  let form = document.getElementById("calcForm");
  let firstNumber = parseFloat(form.angka1.value);
  let secondNumber = parseFloat(form.angka2.value);

  switch (tombol) {
    case "tambah":
      if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Harap masukkan angka!!");
      } else {
        let total = firstNumber + secondNumber;
        form.hasil.value = total;
      }
      break;

    case "kurang":
      if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Harap masukkan angka!!");
      } else {
        let total = firstNumber - secondNumber;
        form.hasil.value = total;
      }
      break;
    case "kali":
      if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Harap masukkan angka!!");
      } else {
        let total = firstNumber * secondNumber;
        form.hasil.value = total;
      }
      break;
    case "bagi":
      if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Harap masukkan angka!!");
      } else {
        let total = firstNumber / secondNumber;
        form.hasil.value = total;
      }
      break;
    case "pangkat":
      if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Harap masukan angka!!");
      } else {
        let total = Math.pow(firstNumber, secondNumber);
        form.hasil.value = total;
      }
  }
}

// function pangkat() {
//   //tangkap id form
//   var frm = document.getElementById("calcForm");
//   var a1 = parseFloat(frm.angka1.value);
//   var a2 = parseFloat(frm.angka2.value);
//   var total = Math.pow(a1, a2); //rumus
//   frm.hasil.value = total; //penempatan hasil
// }
