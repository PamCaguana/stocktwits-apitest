document.querySelector('button').addEventListener('click', getSymbol);

    function getSymbol(){
      let company = document.querySelector('input').value;
      let url = `https://api.stocktwits.com/api/2/streams/symbol/${company}.json`;
    
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data);
          let companyName = data.messages[0].symbols[0].title;
          let tickerSymbol = data.messages[0].symbols[0].symbol;
          let currentWatchCount = data.messages[0].symbols[0].watchlist_count;
          let firstComment = data.messages[1].body;

          document.querySelector('#companyName').innerText = companyName;
          document.querySelector('#tickerSymbol').innerText = tickerSymbol;
          document.querySelector('#currentCount').innerText = currentWatchCount;
          document.querySelector('#currentCount').innerText = currentWatchCount;
          document.querySelector('p').innerText = firstComment;
          })
        .catch(err => {
         console.log(`error ${err}`)
        });
    }