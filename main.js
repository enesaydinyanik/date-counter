function countdown() {
  // Şu anki zamanı al
  var now = new Date();

  // Kullanıcının hesaplamak istediği zaman
  var userDate = new Date(document.getElementById('date').value)

  // Geri sayımı hesapla
  var year = userDate.getFullYear() - now.getFullYear();
  var month = userDate.getMonth() - now.getMonth();
  var day = userDate.getDate() - now.getDate();
  var hour = userDate.getHours() - now.getHours();
  var minute = userDate.getMinutes() - now.getMinutes();
  var second = userDate.getSeconds() - now.getSeconds();

  // Zaman farkı negatifse, bir üst zaman birimini azalt
  if (second < 0) {
    second += 60;
    minute--;
  }
  if (minute < 0) {
    minute += 60;
    hour--;
  }
  if (hour < 0) {
    hour += 24;
    day--;
  }
  if (day < 0) {
    // Ay farkı negatifse, ayı azalt
    var previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    day += previousMonth.getDate();
    month--;
  }
  if (month < 0) {
    month += 12;
    year--;
  }

  // Geri sayım değerlerini göster
  document.querySelector(".year").textContent = year + " Year";
  document.querySelector(".month").textContent = month + " Month";
  document.querySelector(".day").textContent = day + " Day";
  document.querySelector(".hour").textContent = hour + " Hour";
  document.querySelector(".minute").textContent = minute + " Minute";
  document.querySelector(".second").textContent = second + " Second";

  // 1 saniye sonra yeniden çağır
  setTimeout(countdown, 1000);

  
}
