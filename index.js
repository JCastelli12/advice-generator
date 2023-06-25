const adviceTag = document.getElementById('advice-id');
const adviceContent = document.getElementById('advice');
const button = document.getElementById('advice-btn');

async function getAdvice() {
  let res = await fetch('https://api.adviceslip.com/advice');
  let json = await res.json();

  let advice_id = json.slip.id;
  let advice = json.slip.advice;

  adviceTag.innerHTML = advice_id;
  adviceContent.innerHTML = advice;
}
