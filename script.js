const checkButton = document.getElementById("CHECK");
const inputField = document.getElementById("inputt");
const resultPara = document.getElementById("para");

function isPalindrome(word) {
    let cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = cleanWord.length - 1;

    while (left < right) {
        if (cleanWord[left] !== cleanWord[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

checkButton.addEventListener("click", function () {
    let word = inputField.value;

    if (word === "") {
        resultPara.textContent = "Please enter a word!";
        resultPara.style.color = "red";
    } else if (isPalindrome(word)) {
        resultPara.textContent = `"${word}" is a palindrome!`;
        resultPara.style.color = "green";
    } else {
        resultPara.textContent = `"${word}" is NOT a palindrome.`;
        resultPara.style.color = "red";
    }
});
