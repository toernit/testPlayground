// To-do app
document.getElementById('add-task').addEventListener('click', () => {
    const input = document.getElementById('new-task');
    const task = input.value.trim();
    if (!task) return alert('Please enter a task!');
    
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete">Delete</button>
    `;
    
    li.querySelector('.delete').addEventListener('click', () => li.remove());
    document.getElementById('task-list').appendChild(li);
    input.value = '';
  });
  
  // Dark mode toggle
  document.getElementById('dark-toggle').addEventListener('change', (e) => {
    document.body.style.backgroundColor = e.target.checked ? '#333' : '#f9f9f9';
    document.body.style.color = e.target.checked ? '#f9f9f9' : '#333';
  });
  
  // Form handling
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!name || !email) return alert('Please fill in all fields.');
    alert(`Thanks for contacting us, ${name}!`);
    e.target.reset();
  });
  