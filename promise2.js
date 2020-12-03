const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  return new Promise((resolve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
  
      if (canProcess) {
        resolve({id: transaction.id, delay});
      } else {
        reject(transaction.id);
      }

    }, delay);
  })

};

const logSuccess = ({id, delay}) => {
  console.log(`Transaction ${id} processed in ${delay}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};


makeTransaction({ id: 70})
.then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72})
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73})
  .then(logSuccess)
  .catch(logError);

 