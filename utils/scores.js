const topScoresUpdate = (score, name, topScores) => {
  if (topScores.length < 5) {
    topScores.push({ points: score, name });
    return sortArray(topScores);
  } else if (score > topScores[4].points) {
    topScores.pop();
    topScores.push({ points: score, name });
    return sortArray(topScores);
  } else {
    return topScores;
  }
};

const sortArray = array => {
  return array.sort((a, b) => {
    return b.points - a.points;
  });
};

module.exports = { topScoresUpdate };
