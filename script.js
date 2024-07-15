async function fetchQuote() {
    try{
      const response = await fetch('http://localhost:3001/api/quote');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
      const data = await response.json();

      document.getElementById('loader').style.display = "None";
      document.getElementById('next-btn').removeAttribute('disabled');
      document.getElementById('copy-btn').removeAttribute('disabled');
      
      document.getElementById('content').textContent = `"${data.quote.body}"`;
      document.getElementById('author').textContent = `${data.quote.author}`;

      const tagContainer = document.querySelector('.tags');
      tagContainer.innerHTML = ''; // Clear previous tags
      for (let i = 0; i < data.quote.tags.length; i++) {
        const tagElement = document.createElement('span');
        tagElement.textContent = data.quote.tags[i];
        tagContainer.appendChild(tagElement);
      };

    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
}

function copyQuote() {
    const quoteContent = document.getElementById('content').textContent;
    const quoteAuthor = document.getElementById('author').textContent;
    const textToCopy = `Author: "${quoteAuthor}" \nQuote: ${quoteContent}`;
  
    navigator.clipboard.writeText(textToCopy).then(() => {
        showAlert('Quote copied to clipboard!');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}
    
function showAlert(message) {
      const alertBox = document.getElementById('custom-alert');
      alertBox.textContent = message;
      alertBox.style.display = 'block';
      setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
}
  
document.getElementById('next-btn').addEventListener('click', fetchQuote);
document.getElementById('copy-btn').addEventListener('click', copyQuote);
  
fetchQuote()