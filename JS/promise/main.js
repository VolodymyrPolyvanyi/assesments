// let myPromise = new Promise((resolve, reject) => {
//     // use setTimeout(...) to simulate async code
//     setTimeout(function(){
//       resolve("Done!"), // success
//       reject("Error!");  // failure
//     }, 250);
// });

// myPromise.then((successMessage, failureMessage) => {
//   let result = confirm('Success?');
//   result ? alert(successMessage) : alert(failureMessage)    
// });

function testPromiseCreator() {
  let promiseCount = 0;
  return function () {
    promiseCount++;
    return testPromiseInstance(promiseCount);
  };
}

const testPromise = testPromiseCreator();

function testPromiseInstance(promiseCount) {
  const thisPromiseCount = promiseCount;

  const log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisPromiseCount +
    ') Запуск (запуск синхронного кода) ');

  const p1 = new Promise(
    function(resolve, reject) {
      log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Запуск промиса (запуск асинхронного кода) ');
      window.setTimeout(
        function() {
          resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000);
    });

  p1.then(
    function(val) {
      log.insertAdjacentHTML('beforeend', val +
        ') Обещание исполнено (асинхронный код завершён) ');
    });

  log.insertAdjacentHTML('beforeend', thisPromiseCount +
    ') Обещание создано (синхронный код завершён) ');
}

if ("Promise" in window) {
  btn = document.getElementById("btn");
  btn.addEventListener("click",testPromise);
}
else {
  log = document.getElementById('log');
  log.innerHTML = "Live example not available as your browser doesn't support the Promise interface.";
}
