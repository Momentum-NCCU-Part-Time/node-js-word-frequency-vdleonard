const { count } = require("console")
const fs = require("fs")
const path = require("path")
const filePath = process.argv[2]

const STOP_WORDS = ["a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", "he", "i", "in", "is", "it", "its", "of", "on", "that", "the", "to", "were", "will", "with"]

function printWordFreq(file, callback) {
  // Read in `file` and print out the frequency of words in that file.
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err)
      process.exit(1)
    }
    // TODO: write code to count the words in the file

    const textToCount = data.toLowerCase().split(/\W+/).sort()
    const countObject = {}

    for (word of textToCount) {
      if (STOP_WORDS.includes(word)) {
        continue
      }
      if (word in countObject) {
        countObject[word]++
      } else {
        countObject[word] = 1
      }
    }

    console.log("Initial data read from file: ", data)
    callback(countObject)
  })
}

printWordFreq(filePath, wordCount => {
  console.log("The results from your word counts:", wordCount)
})
