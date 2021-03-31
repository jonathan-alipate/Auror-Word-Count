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
    
    //We have a word count object uniqueWords, now we find the most common word by count
    const sortedWordCountArray = Object.values(uniqueWords).sort();
    //extract the max count
    const maxCount = sortedWordCountArray[sortedWordCountArray.length - 1]
    console.log(maxCount)

}

findMostCommonWord('the cat jumped over over the hat hat hat')