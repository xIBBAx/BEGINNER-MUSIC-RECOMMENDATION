const moodSelect = document.getElementById('moodSelect');
const recommendButton = document.getElementById('recommendButton');
const recommendationsDiv = document.getElementById('recommendations');

const recommendations = {
  happy: ['Sooraj Dooba hai Yaaro', 'Senorita', 'Radio'],
  sad: ['Bedardeya', 'Ve Kamleya', 'Bezubaan Kab Se'],
  energetic: ['Jee Karda', 'Jee Lee Zara', 'Zinda'],
  relaxed: ['Mera Mann', 'Tinka Tinka Dil Mera', 'Mai Agar'],
};

recommendButton.addEventListener('click', () => {
  const selectedMood = moodSelect.value;
  const moodRecommendations = recommendations[selectedMood];
  
  if (moodRecommendations) {
    recommendationsDiv.innerHTML = `
      <h2>Recommendations for ${selectedMood} mood:</h2>
      <ul>
        ${moodRecommendations.map(song => `<li>${song}</li>`).join('')}
      </ul>
    `;
  } else {
    recommendationsDiv.innerHTML = '<p>No recommendations available for this mood.</p>';
  }
});
