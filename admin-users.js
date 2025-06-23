document.addEventListener("DOMContentLoaded", async () => {
  const accessToken = sessionStorage.getItem("accessToken");
  if (!accessToken) {
    window.location.href = "login.html";
    return;
  }

  const tbody = document.getElementById("users-tbody");

  try {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    tbody.innerHTML = data.users.map(user => `
      <tr class="container-tr">
        <td class="container-td">${user.id}</td>
        <td class="container-td">${user.username}</td>
        <td class="container-td">${user.firstName} ${user.lastName}</td>
        <td class="container-td">${user.email}</td>
        <td class="container-td">${user.phone}</td>
      </tr>
    `).join("");
  } catch (err) {
    tbody.innerHTML = '<tr><td colspan="5">Error al cargar usuarios</td></tr>';
  }
});
