async function fetchQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const tags = data.tags;
      document.getElementById('content').textContent = `"${data.content}"`;
      document.getElementById('author').textContent = `${data.author}`;
      const tagContainer = document.querySelector('.tags');
      tagContainer.innerHTML = ''; // Clear previous tags
      for (let i = 0; i < data.tags.length; i++) {
        const tagElement = document.createElement('span');
        tagElement.textContent = data.tags[i];
        tagContainer.appendChild(tagElement);
      };
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
}

function copyQuote() {
    const quoteContent = document.getElementById('content').textContent;
    const textToCopy = `${quoteContent}`;
  
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
  
fetchQuote();
  