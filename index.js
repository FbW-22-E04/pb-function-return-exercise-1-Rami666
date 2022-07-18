//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
  //write your code here
  let array1 = str.split(' ');
  let newArray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newArray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newArray1.join(' ');
}

console.log(uppercase("the quick brown fox"));

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
  //write your code here 
  let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;

}
console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(country_name) {
  //write your code here 
  return country_name.reduce((lname, country) => lname.length > country.length ? lname : country, "");

}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
