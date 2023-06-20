// // 1 no question answer

// function getDayOfWeek(dateString) {
//   const date = new Date(dateString);
//   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   const dayOfWeek = date.getDay();

//   return daysOfWeek[dayOfWeek];
// }

// const date = "2023-06-20";
// const dayOfWeek = getDayOfWeek(date);
// console.log(dayOfWeek);

// function getDayOfWeek() {
//   const date = new Date();
//   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   const dayOfWeek = date.getDay();

//   return daysOfWeek[dayOfWeek];
// }

// console.log(getDayOfWeek());

// // 2 no question answer

// const numbers = [3, 4, 5, 6, 7];
// function squareRootOfSumOfSquares(numbers) {
//   let sumOfSquares = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     // sumOfSquares += Math.pow(numbers[i], 2);

//     sumOfSquares = sumOfSquares + Math.pow(numbers[i], 2);
//   }

//   return Math.sqrt(sumOfSquares);
// }

// const result = squareRootOfSumOfSquares(numbers);

// console.log(result);

// 1 no question answer

function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = date.getDay();

  return daysOfWeek[dayOfWeek];
}

console.log(getDayOfWeek("2023-06-20"));

function getDayOfWeek() {
  const date = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = date.getDay();

  return daysOfWeek[dayOfWeek];
}

console.log(getDayOfWeek());

// 2 no question answer

const numbers = [3, 4, 5, 6, 7];
function squareRootOfSumOfSquares(number) {
  let sumOfSquares = 0;

  for (let i = 0; i < numbers.length; i++) {
    sumOfSquares += Math.pow(numbers[i], 2);
  }

  const squareRoot = Math.sqrt(sumOfSquares);
  return squareRoot;
}

console.log(squareRootOfSumOfSquares());

// 3 no question answer

function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(isPrimeNumber(17));
console.log(isPrimeNumber(10));

// 4 no question answer

function openWindow(url, width, height) {
  const windowFeatures = `width=${width},height=${height}`;

  window.open(url, "", windowFeatures);
}

openWindow("https://www.example.com", 800, 600);

// 5 no question answer

function detectBrowser() {
  const userAgent = navigator.userAgent;
  let browserName;
  let browserVersion;

  // Check for Chrome
  if (/Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor)) {
    browserName = "Google Chrome";
    browserVersion = userAgent.match(/Chrome\/(\d+)/)[1];
  }
  // Check for Firefox
  else if (/Firefox/.test(userAgent)) {
    browserName = "Mozilla Firefox";
    browserVersion = userAgent.match(/Firefox\/(\d+)/)[1];
  }
  // Check for Safari
  else if (/Safari/.test(userAgent) && /Apple Computer/.test(navigator.vendor)) {
    browserName = "Apple Safari";
    browserVersion = userAgent.match(/Version\/(\d+)/)[1];
  }
  // Check for Internet Explorer
  else if (/MSIE/.test(userAgent)) {
    browserName = "Internet Explorer";
    browserVersion = userAgent.match(/MSIE (\d+)/)[1];
  }
  // Check for Microsoft Edge (Chromium-based)
  else if (/Edg/.test(userAgent) && /Chrome/.test(userAgent) && /Google Inc/.test(navigator.vendor)) {
    browserName = "Microsoft Edge (Chromium-based)";
    browserVersion = userAgent.match(/Edg\/(\d+)/)[1];
  }
  // Default to unknown browser
  else {
    browserName = "Unknown";
    browserVersion = "Unknown";
  }

  return {
    name: browserName,
    version: browserVersion,
  };
}

const browserInfo = detectBrowser();
console.log("Browser Name:", browserInfo.name);
console.log("Browser Version:", browserInfo.version);

// 6 no question answer
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log("Latitude: " + latitude);
  console.log("Longitude: " + longitude);
}

getUserLocation();

// 7 no question answer

// Function to display coordinates on click
function displayCoordinates(event) {
  let x = event.clientX;
  let y = event.clientY;
  alert("Coordinates: (" + x + ", " + y + ")");
}
document.addEventListener("click", displayCoordinates);

// Function to display key code on key press
function displayKeyCode(event) {
  let keyCode = event.keyCode;
  alert("Key code: " + keyCode);
}
document.addEventListener("keydown", displayKeyCode);

// Function to change image source on mouseover

let imageElement = document.getElementById("myImage");
function changeImageSource() {
  let img = document.getElementById("myImage");
  img.src = "./assets/IMG_2.jpg";
}

imageElement.addEventListener("mouseover", changeImageSource);

// 8 no question answer

function changeText() {
  let paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "Button Clicked!";
}
