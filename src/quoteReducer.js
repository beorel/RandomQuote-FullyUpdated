let quote1 = "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it. - By: Maurice Switzer, Mrs. Goose, Her Book";
let quote2 = "The fool doth think he is wise, but the wise man knows himself to be a fool. - By: William Shakespeare, As You Like It";
let quote3 = "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect). - By: Mark Twain";
let quote4 = "When someone loves you, the way they talk about you is different. You feel safe and comfortable.- By: Jess C. Scott, The Intern";
let quote5 = "Knowing yourself is the beginning of all wisdom. - By: Aristotle";
let quoteArray = [];
quoteArray.push(quote1, quote2, quote3, quote4, quote5)

const randomizeQuote = () => {
    let randomDec = Math.random() * quoteArray.length;
    let randomInt = Math.floor(randomDec);

    return quoteArray[randomInt];
};
const splitQuote = (randomQuote) => {
    const splitedRandomQuotes = randomQuote.split("-")
    
    return {
        quote: splitedRandomQuotes[0],
        author: splitedRandomQuotes[1]
    };
} 
// console.log("quote =" + splitedQuote)
// console.log("authore =" + splitedAuthor)



const quoteReducer = (state = splitQuote(randomizeQuote()), action) => {
    switch (action.type) {
        case "UPDATE_QUOTE":
            state = splitQuote(randomizeQuote())
            console.log(state)
            return {
                quote: state.quote,
                author: state.author
            };
        default:
            return state;
    }
};
console.log(quoteReducer);

export default quoteReducer;