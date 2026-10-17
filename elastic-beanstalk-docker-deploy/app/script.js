let count = 0;
const countEl = document.getElementById('count');
const btn = document.getElementById('clickBtn');

btn.addEventListener('click', () => {
  count++;
  countEl.textContent = `Clicks: ${count}`;
});
