const message = "Hello World";
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let char of message) {
    if (vowels.includes(char.toLowerCase())) {
        console.log(char);
    }
}
