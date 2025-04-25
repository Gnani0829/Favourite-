// Store votes in localStorage for persistence
if (!localStorage.getItem('votes')) {
  localStorage.setItem('votes', JSON.stringify({
    Rithwik: 0,
    Gnaneshwar: 0,
    Sunil: 0
  }));
}

// Handle login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('username').value.trim();
    if (name) {
      localStorage.setItem('voterName', name);
      window.location.href = 'vote.html';
    }
  });
}

// Handle voting
const voteForm = document.getElementById('voteForm');
if (voteForm) {
  voteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selected = document.querySelector('input[name="candidate"]:checked');
    if (!selected) return alert("Please choose someone!");
    const candidate = selected.value;
    const votes = JSON.parse(localStorage.getItem('votes'));
    votes[candidate]++;
    localStorage.setItem('votes', JSON.stringify(votes));
    alert(`Thanks for voting, ${localStorage.getItem('voterName')}!`);
    window.location.href = 'result.html';
  });
}

// Show results
if (window.location.pathname.includes("result.html")) {
  const votes = JSON.parse(localStorage.getItem('votes'));
  document.getElementById('rithwikVotes').textContent = votes.Rithwik;
  document.getElementById('gnaneshwarVotes').textContent = votes.Gnaneshwar;
  document.getElementById('sunilVotes').textContent = votes.Sunil;
}
