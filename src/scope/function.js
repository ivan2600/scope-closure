function greeting() {
    let userName = 'Ana'; // local/function scope
    console.log(userName);

    if (userName === "Ana") {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName);