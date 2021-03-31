//this function accepts a string of words and returns an array of either the single most common word or multiple if they are equivalently common.
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
    //loop through unique words list and find the original word
    const results = []
    for(key in uniqueWords){
        if(uniqueWords[key] === maxCount){
            results.push(key)
        }
    }
    //return the most commonly occuring word
    console.log(results)
    return results
}

findMostCommonWord('the cat jumped over over the hat hat hat')