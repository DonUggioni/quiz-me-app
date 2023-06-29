import axios from 'axios';

// This function removes the word of the general category, for example: 'Entertainment: Comics' becomes 'Comics'
function removeGeneralCategory(str) {
  if (!str.includes(':')) return str;

  let formattedStr = str.split(':').slice(1);

  return formattedStr.join('').trim();
}

// This function shuffles the answers that come from the API
function shuffleArray(array) {
  // Using Fisher-Yates algorithm to shuffle the array in-place
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// This function get the data from the Database
async function getData(endpoint) {
  try {
    const response = await axios.get(`https://opentdb.com/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
export { removeGeneralCategory, shuffleArray, getData };
