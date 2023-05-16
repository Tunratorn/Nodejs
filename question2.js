function getHandScore(data) {
  let cards = data.toString()  
      cards = cards.split(" ")
      hearts = 0
      clubs = 0
      diamonds = 0
      spades = 0
      strscore = ""
  cards.forEach(score => {
    let result = score.substring(0,1)
    if (result === "H") {
      result = score.substring(1)
      hearts = hearts + checkScore(result)
    } else if (result === "C") {
      result = score.substring(1)
      clubs = clubs + checkScore(result)
    } else if (result === "D") {
      result = score.substring(1)
      diamonds = diamonds + checkScore(result)
    } else {
      result = score.substring(1)
      spades = spades + checkScore(result)
    }
    strscore = strscore + score.substring(1) + " "    
  })    
  strscore = strscore.trim()
  let max
      max = checkTong(strscore)
  if (max === 0) {
      max = Math.max(hearts, clubs, diamonds, spades)
  }

  return max
}

//check score
function checkScore(score) {
  let JQK = ["J", "Q", "K"]
  let n
  if (JQK.includes(score)) {
    n = 10
  } else if (score === "A") {
    n = 11
  } else {
    n = parseInt(score)
  }
  return n
}

//check dulpicap
function checkTong(score) {
  score = score.split(" ")
  let num = score[0]
      count = 0
      sumsocre = 0
  for (let i = 0; i < score.length; i++) {
    if (num === score[i]) {
      count++
    }
  }  
  if (count === 3) {
    if (num === "A") {
      sumsocre = 35
    } else {
      sumsocre = 32.5
    }
  }
  return sumsocre
}
