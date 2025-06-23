document.addEventListener("DOMContentLoaded", () => {
  const $ = (el) => document.querySelector(el);
  const $$ = (el) => document.querySelectorAll(el);
  const tableBody = $("#table-tbody");


  const accessToken = sessionStorage.getItem("accessToken");
  if (!accessToken) {
    window.location.href = "login.html";
    return;
  }

  const renderSalones = () => {
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    if (salones.length === 0) {
      tableBody.innerHTML = `<h1>No hay salones</h1>`;
      return;
    }

    tableBody.innerHTML = salones
      .map(
        (salon) => `
        <tr class="salon-row" data-id="${salon.id}">
          <td class="container-td">${salon.titulo}</td>
          <td class="container-td">${salon.descripcion}</td>
          <td class="container-td">${salon.direccion}</td>
          <td class="container-td">$ ${salon.valor}</td>
        </tr>
      `
      )
      .join("");

    $$(".salon-row").forEach((row) => {
      row.addEventListener("click", () => {
        const id = parseInt(row.dataset.id);
        const salones = JSON.parse(localStorage.getItem("salones")) || [];
        const salon = salones.find((s) => s.id === id);
        if (!salon) return;

        $("#edit-id").value = salon.id;
        $("#edit-titulo").value = salon.titulo;
        $("#edit-descripcion").value = salon.descripcion;
        $("#edit-direccion").value = salon.direccion;
        $("#edit-valor").value = salon.valor;
        $("#edit-estado").value = salon.estado;
        $("#edit-img").value = salon.img;

        const modal = new bootstrap.Modal($("#editarSalonModal"));
        modal.show();
      });
    });
  };

  // Agregar salón
  $("#agregarBtn").addEventListener("click", () => {
    const titulo = $("#titulo").value.trim();
    const descripcion = $("#descripcion").value.trim();
    const direccion = $("#direccion").value.trim();
    const valor = Number($("#valor").value.trim());
    const estado = $("#estado").value.trim();
    const img = $("#img").value.trim();

    if (!titulo || !descripcion || !direccion || !valor || !estado || !img) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    const nuevoId =
      salones.length > 0 ? Math.max(...salones.map((s) => s.id)) + 1 : 1;

    const nuevoSalon = {
      id: nuevoId,
      titulo,
      descripcion,
      direccion,
      valor,
      estado,
      img,
      dias: [
        {
          id: 1,
          fecha: "12/05/2025",
          horarios: [
            { id: 1, hora: "11:00", disponible: false },
            { id: 2, hora: "14:00", disponible: true },
            { id: 3, hora: "17:00", disponible: true },
          ],
        },
      ],
    };

    salones.push(nuevoSalon);
    localStorage.setItem("salones", JSON.stringify(salones));
    $("#salonForm").reset();
    bootstrap.Modal.getInstance($("#agregarSalonModal")).hide();
    renderSalones();
  });

  // Guardar cambios en edición
  $("#guardarCambiosBtn").addEventListener("click", () => {
    const id = parseInt($("#edit-id").value);
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    const index = salones.findIndex((s) => s.id === id);
    if (index === -1) return;

    salones[index] = {
      ...salones[index],
      titulo: $("#edit-titulo").value.trim(),
      descripcion: $("#edit-descripcion").value.trim(),
      direccion: $("#edit-direccion").value.trim(),
      valor: parseFloat($("#edit-valor").value),
      estado: $("#edit-estado").value.trim(),
      img: $("#edit-img").value.trim(),
    };

    localStorage.setItem("salones", JSON.stringify(salones));
    bootstrap.Modal.getInstance($("#editarSalonModal")).hide();
    renderSalones();
  });

  // Eliminar salón
  $("#eliminarSalonBtn").addEventListener("click", () => {
    const id = parseInt($("#edit-id").value);
    let salones = JSON.parse(localStorage.getItem("salones")) || [];
    salones = salones.filter((s) => s.id !== id);
    localStorage.setItem("salones", JSON.stringify(salones));
    bootstrap.Modal.getInstance($("#editarSalonModal")).hide();
    renderSalones();
  });

  renderSalones();
});
