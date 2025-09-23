// script.js
document.getElementById('registrationForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      document.getElementById('message').textContent = "✅ Registered Successfully!";
      form.reset();
    } else {
      document.getElementById('message').textContent = "❌ Registration Failed. Try again.";
    }
  } catch (err) {
    document.getElementById('message').textContent = "⚠️ Network Error. Try again later.";
    console.error(err);
  }
});
