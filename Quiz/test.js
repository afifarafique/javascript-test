                                              //Section 1 :Stings and String Method 
// 1: Easy
function extractFirstWord(message){
    return message.split('')[0];
}
let message = "Welcome to javascript programming!";
let firstWord = extractFirstWord(message);
console.log(firstWord);

// 2: Medium
function maskEmail(emsil){
    let [username, domain] = email.split('@');
    let maskedUsername = username[0] + '*'.repeat(username.length - 1);
    let [domainName, domainExtension] = domain.split('.');
    let maskedDomain = domainName[0] + '*'.repeat(domainName.length - 1) + '.' + domainExtension;
    return `${maskedUsername}@${maskedDomain}`;
}
let email = "abcd.ghj@gmail.com";
let maskedEmail = maskEmail(email);
console.log(maskedEmail);

                                        //Section 2: Arrays and Array Method
// 1: Easy
function doubleNumbers(numbers){
    return numbers.map(num => num * 2);
}
let numbers = [1,2,3,4,5];
let doubled = doubleNumbers(numbers);
console.log(doubled);

// 2:Medium
function removeDuplicates(array){
    const mySet = new Set(array);
    return Array.from(mySet);
}
const string = ['apple','guava','banana','guava','apple','kivi','banana'];
const myStrings = removeDuplicates(string);
console.log(myStrings);

                            //Section 3:Objects
// 1:Easy
const student ={
    name: "Afifa",
    age: 18,
    subjects: ['math','computer','stats']
};
function addSubject(stuudent, newsubject){
    if(!student.subjects.includes(newsubject)){
        student.subjects.push(newsubject);
    } else{
        console.log('Subject already exists');
    }
}                            
addSubject(student,'English');
console.log(student.subjects);
addSubject(student,'science');          //subject already exists

// 2:Medium
function mergeObjects(obj1,obj2){
    return{...obj1,...obj2};
}
const object1 = {name:'Afifa',age:17,city:'karachi'};
const object2 = {age:20,city:'lahore'};
const mergedObj = mergeObjects(object1,object2);
console.log(mergedObj);

                          //Section 4:Loops
// 1:Easy
function sumOfNumbers(number){
    let total= 0;
    for(i = 0; i < number.length; i++){
        total += number[i];
    }
    return total;
}                
const myNumbers =[11,20,30,40,50];
const sum = sumOfNumbers(myNumbers);
console.log(sum);

// 2:Medium
function findLongestWord(words){
    let longestWord = '';
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }       
    }
    return longestWord;
}
const wordArray =['Apple','banana','kivi','mango'];
const longest = findLongestWord(wordArray);
console.log(longest);

                                //Section 5:Arrow Functions
// 1:Easy
const multiply =    (a,b) => a * b;

// 2:Medium
const filterEvenNumbers =(numbers) => numbers.filter(number => number % 2 ===0);
const myNumber = [1,2,3,4,5,6];
const evenNumbers = filterEvenNumbers(myNumber);
console.log(evenNumbers);

                             //Section 6:Async JS and fetch 
// 1:Easy

function fetchData(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with fetch operation:', error);
    });
}
const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';
fetchData(apiURL);

// 2:Medium
async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
const URL = 'https://jsonplaceholder.typicode.com/posts/1';
fetchData(URL);

                           //Section 7:Promises
// 1:Easy
function Delay(milisecond) {
    return new Promise(resolve => setTimeout(resolve, milisecond));
  }
async function waitAndLog() {
    await Delay(2000); 
    console.log("Done!");
  }  
waitAndLog();

// 2:Medium
function fetchUserData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const Data = {
            id: 1,
            name: 'Afifa',
            email: 'abcd.gth@example.com'
          };
          resolve(Data);
        }, 2000);
      });
    }
    fetchUserData()
    .then(data => {
        console.log('User Data:', data);
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
  });

                          //Section 8:AJAX and API's
// 1:Easy
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = JSON.parse(xhr.responseText);
      console.log('Response:', response);
    } else {
      console.error('Error:', xhr.statusText);
    }
};
xhr.onerror = function() {
    console.error('Request failed');
 };
xhr.send();                            

// 2:Medium
function getWeatherData(city) {
    const apiKey = 'YOUR_API_KEY'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${YOUR_API_kEY}`; // API Url with query parameters
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        const weather = response.weather[0].description;
        const temperature = response.main.temp;
        console.log(`Current weather in ${city}: ${weather}, Temperature: ${temperature}°C`);
      } else {
        console.error('Error:', xhr.statusText);
      }
    };
    xhr.onerror = function() {
      console.error('Request failed');
    };
    xhr.send();       //sending request
  }
  getWeatherData('London');  