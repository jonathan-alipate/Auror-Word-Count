//this function accepts a string of words and returns either the single most common word or an array of them if their are multiple.
function findMostCommonWord(sentence){
    const words = sentence.split(" ")
    const uniqueWords = {}
    words.map(word => {
        if(word in uniqueWords){
            uniqueWords[word] += 1
        } else {
            uniqueWords[word] = 1
        }
    })
    console.log(uniqueWords)
}

findMostCommonWord('the cat jumped over the hat')