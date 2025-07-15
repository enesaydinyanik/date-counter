const dateInput = document.getElementById("date");
const calculateBtn = document.getElementById("calculate-btn");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

let timerId = null;

function updateCountdown(targetDate) {
  const now = new Date();

  let year = targetDate.getFullYear() - now.getFullYear();
  let month = targetDate.getMonth() - now.getMonth();
  let day = targetDate.getDate() - now.getDate();
  let hour = targetDate.getHours() - now.getHours();
  let minute = targetDate.getMinutes() - now.getMinutes();
  let second = targetDate.getSeconds() - now.getSeconds();

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
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    day += previousMonth.getDate();
    month--;
  }
  if (month < 0) {
    month += 12;
    year--;
  }

  if (year <= 0 && month <= 0 && day <= 0 && hour <= 0 && minute <= 0 && second <= 0) {
    clearInterval(timerId);
    timerId = null;
  }

  document.querySelector(".year").textContent = `${year} Year`;
  document.querySelector(".month").textContent = `${month} Month`;
  document.querySelector(".day").textContent = `${day} Day`;
  document.querySelector(".hour").textContent = `${hour} Hour`;
  document.querySelector(".minute").textContent = `${minute} Minute`;
  document.querySelector(".second").textContent = `${second} Second`;
}

calculateBtn.addEventListener("click", () => {
  const value = dateInput.value;
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  if (!value) {
    alert("Please select a date.");
    return;
  }

  const userDate = new Date(value);
  if (isNaN(userDate)) {
    alert("Invalid date.");
    return;
  }

  if (userDate <= new Date()) {
    alert("Please select a future date.");
    return;
  }

  updateCountdown(userDate);
  timerId = setInterval(() => updateCountdown(userDate), 1000);
});


// yeni deneme ve test değişiklikleri