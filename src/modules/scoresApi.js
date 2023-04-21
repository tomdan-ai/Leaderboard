// import result from 'lodash';

const key = 'EWk0pUvYwIWEyq3FIRzT';

export const fetchData = async () => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const setScores = async (data) => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}








