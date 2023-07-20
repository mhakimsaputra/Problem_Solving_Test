const getDenseRanking = (playerScores, gitsScores) => {
    let scoreMap = new Map(); 
    let rank = 1;
    let prevScore;
    
    for (let i = 0; i < playerScores.length; i++) {
      let score = playerScores[i];
      if (score !== prevScore) {  
        scoreMap.set(score, rank); 
        rank++;
      }
      prevScore = score;
    }
  
    let rankings = [];
  
    for (let i = 0; i < gitsScores.length; i++) {
      let score = gitsScores[i];
      if (scoreMap.has(score)) { 
        rankings.push(scoreMap.get(score));
      } else { 
        let minRank = 1;
        let maxRank = rank - 1;
        for (let [key, value] of scoreMap) { 
          if (score > key) { 
            maxRank = Math.min(maxRank, value - 1);
          } else if (score < key) { 
            minRank = Math.max(minRank, value + 1);
          }
        }
        rankings.push(minRank);
      }
    }
  
    return rankings;
  }
  
    // Contoh Input Pertama
    let playerScores = [100, 100, 50, 40, 40, 20, 10];
    let gitsScores = [5, 25, 50, 120];
    let rankings = getDenseRanking(playerScores, gitsScores);
    console.log(...rankings); // Output: 6, 4, 2, 1
    
    // Contoh Input Kedua
    let playerScores2 = [100, 90, 80, 70, 60];
    let gitsScores2 = [75, 85];
    let rankings2 = getDenseRanking(playerScores2, gitsScores2);
    console.log(...rankings2); // Output: 4, 3
    
    // Contoh Input ketiga
    let playerScores3 = [90, 80, 70, 60, 50, 40, 30, 20];
    let gitsScores3 = [25, 35, 85];
    let rankings3 = getDenseRanking(playerScores3, gitsScores3);
    console.log(...rankings3)  // Output: 8, 7, 2