document.addEventListener("DOMContentLoaded", () => {
  const $ = (el) => document.querySelector(el);
  const $$ = (el) => document.querySelectorAll(el);
  const tableBodySalones = $("#table-tbody-salones");
  const tableBodyServicios = $("#table-tbody-servicios");
  const tableBodyPresupuestos = $("#table-tbody-presupuestos");

  const accessToken = sessionStorage.getItem("accessToken");
  if (!accessToken) {
    window.location.href = "login.html";
    return;
  }

  const renderSalones = () => {
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    if (salones.length === 0) {
      tableBodySalones.innerHTML = `<h1>No hay salones</h1>`;
      return;
    }

    tableBodySalones.innerHTML = salones
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

  const renderServicios = () => {
    const servicios = JSON.parse(localStorage.getItem("servicios")) || [];
    if (servicios.length === 0) {
      tableBodyServicios.innerHTML = `<h1>No hay servicios</h1>`;
      return;
    }

    tableBodyServicios.innerHTML = servicios
      .map(
        (servicio) => `
        <tr class="servicio-row" data-id="${servicio.id}">
          <td class="container-td">${servicio.descripcion}</td>
          <td class="container-td">$ ${servicio.valor}</td>
        </tr>
      `
      )
      .join("");

    $$(".servicio-row").forEach((row) => {
      row.addEventListener("click", () => {
        const id = parseInt(row.dataset.id);
        const servicios = JSON.parse(localStorage.getItem("servicios")) || [];
        const servicio = servicios.find((s) => s.id === id);
        if (!servicio) return;

        $("#edit-idServicio").value = servicio.id;
        $("#edit-descripcionServicio").value = servicio.descripcion;
        $("#edit-valorServicio").value = servicio.valor;

        const modal = new bootstrap.Modal($("#editarServicioModal"));
        modal.show();
      });
    });
  };

  // Agregar servicio
  $("#agregarBtnServicio").addEventListener("click", () => {
    const descripcion = $("#descripcionServicio").value.trim();
    const valor = Number($("#valorServicio").value.trim());

    if (!descripcion || !valor) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const servicios = JSON.parse(localStorage.getItem("servicios")) || [];
    const nuevoId =
      servicios.length > 0 ? Math.max(...servicios.map((s) => s.id)) + 1 : 1;

    const nuevoServicio = {
      id: nuevoId,
      descripcion,
      valor,
    };

    servicios.push(nuevoServicio);
    localStorage.setItem("servicios", JSON.stringify(servicios));
    $("#servicioForm").reset();
    bootstrap.Modal.getInstance($("#agregarServicioModal")).hide();
    renderServicios();
  });

  // Guardar cambios en edición de servicio
  $("#guardarCambiosBtnServicio").addEventListener("click", () => {
    const id = parseInt($("#edit-idServicio").value);
    const servicios = JSON.parse(localStorage.getItem("servicios")) || [];
    const index = servicios.findIndex((s) => s.id === id);
    if (index === -1) return;

    servicios[index] = {
      ...servicios[index],
      descripcion: $("#edit-descripcionServicio").value.trim(),
      valor: parseFloat($("#edit-valorServicio").value),
    };

    localStorage.setItem("servicios", JSON.stringify(servicios));
    bootstrap.Modal.getInstance($("#editarServicioModal")).hide();
    renderServicios();
  });

  // Eliminar servicio
  $("#eliminarServicioBtn").addEventListener("click", () => {
    const id = parseInt($("#edit-idServicio").value);
    let servicios = JSON.parse(localStorage.getItem("servicios")) || [];
    servicios = servicios.filter((s) => s.id !== id);
    localStorage.setItem("servicios", JSON.stringify(servicios));
    bootstrap.Modal.getInstance($("#editarServicioModal")).hide();
    renderServicios();
  });

const servicios = JSON.parse(localStorage.getItem("servicios")) || [];
const contenedorServicios = document.getElementById("serviciosCheckboxes");
contenedorServicios.innerHTML = servicios
  .map(
    (servicio) => `
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="${servicio.id}" id="servicio-${servicio.id}">
      <label class="form-check-label" for="servicio-${servicio.id}">
        ${servicio.descripcion} ($${servicio.valor})
      </label>
    </div>
  `
  )
  .join("");

  const renderPresupuestos = () => {
    const presupuestos = JSON.parse(localStorage.getItem("presupuestos")) || [];
    if (presupuestos.length === 0) {
      tableBodyPresupuestos.innerHTML = `<h1>No hay presupuestos</h1>`;
      return;
    }

    tableBodyPresupuestos.innerHTML = presupuestos
      .map(
        (presupuestos) => `
        <tr class="presupuestos-row" data-id="${presupuestos.id}">
          <td class="container-td">${presupuestos.apellidoNombre}</td>
          <td class="container-td">${presupuestos.fecha}</td>
          <td class="container-td">${presupuestos.tematica}</td>
          <td class="container-td">${presupuestos.valorTotal}</td>
          <td class="container-td">
            ${presupuestos.serviciosSeleccionados.map(servicio => servicio.descripcion).join("<br>")}
          </td>
        </tr>
      `
      )
      .join("");

    $$(".presupuestos-row").forEach((row) => {
      row.addEventListener("click", () => {
        const id = parseInt(row.dataset.id);
        const presupuestos = JSON.parse(localStorage.getItem("presupuestos")) || [];
        const presupuesto = presupuestos.find((s) => s.id === id);
        if (!presupuesto) return;

        document.querySelectorAll("#edit-serviciosPresupuestos input[type=checkbox]")
          .forEach(cb => cb.checked = false);
        const serviciosSeleccionadosIds = presupuesto.serviciosSeleccionados.map(s => s.id);

        $("#edit-idPresupuestos").value = presupuesto.id;
        $("#edit-NombrePresupuestos").value = presupuesto.apellidoNombre;
        $("#edit-fechaPresupuestos").value = presupuesto.fecha;
        $("#edit-TematicaPresupuestos").value = presupuesto.tematica;
        $("#edit-valorPresupuestos").value = presupuesto.valorTotal;
        abrirModalEdicion(presupuesto)
      });
    });
  };

  // Agregar presupuesto
 $("#agregarBtnPresupuestos").addEventListener("click", () => {
  const apellidoNombre = $("#NombrePresupuestos").value.trim();
  const fecha = $("#fechaPresupuestos").value.trim();
  const tematica = $("#TematicaPresupuestos").value.trim();
  const checkboxes = document.querySelectorAll("#serviciosCheckboxes input:checked");
  const serviciosSeleccionadosIds = Array.from(checkboxes).map(cb => Number(cb.value));
  const todosLosServicios = JSON.parse(localStorage.getItem("servicios")) || [];
  const serviciosSeleccionados = todosLosServicios.filter(servicio =>
    serviciosSeleccionadosIds.includes(servicio.id)
  );
   const valorTotal = $("#valorPresupuestos").value.trim();
  if (!apellidoNombre || !fecha || !tematica || serviciosSeleccionados.length === 0) {
    alert("Todos los campos son obligatorios y se debe seleccionar al menos un servicio.");
    return;
  }
  const presupuestos = JSON.parse(localStorage.getItem("presupuestos")) || [];
  const nuevoId =
    presupuestos.length > 0 ? Math.max(...presupuestos.map((s) => s.id)) + 1 : 1;

  const nuevoPresupuesto = {
    id: nuevoId,
    apellidoNombre,
    fecha,
    tematica,
    valorTotal,
    serviciosSeleccionados
  };

  presupuestos.push(nuevoPresupuesto);
  localStorage.setItem("presupuestos", JSON.stringify(presupuestos));

  $("#presupuestoForm").reset();


  checkboxes.forEach(cb => cb.checked = false);

  bootstrap.Modal.getInstance($("#agregarPresupuestoModal")).hide();
  renderPresupuestos();
});


  $("#guardarCambiosBtnPresupuestos").addEventListener("click", () => {
    const id = parseInt($("#edit-idPresupuestos").value);
    const presupuestos = JSON.parse(localStorage.getItem("presupuestos")) || [];
    const index = presupuestos.findIndex((s) => s.id === id);
    if (index === -1) return;

    presupuestos[index] = {
      ...presupuestos[index],
      apellidoNombre: $("#edit-NombrePresupuestos").value.trim(),
      fecha: $("#edit-fechaPresupuestos").value.trim(),
      tematica: $("#edit-TematicaPresupuestos").value.trim(),
      valorTotal: parseFloat($("#edit-valorPresupuestos").value),
      servicios: parseFloat($("#edit-serviciosPresupuestos").value),
    };

    localStorage.setItem("presupuestos", JSON.stringify(presupuestos));
    bootstrap.Modal.getInstance($("#editarPresupuestosModal")).hide();
    renderPresupuestos();
  });

  // Eliminar presupuesto
  $("#eliminarPresupuestosBtn").addEventListener("click", () => {
    const id = parseInt($("#edit-idPresupuestos").value);
    let presupuestos = JSON.parse(localStorage.getItem("presupuestos")) || [];
    presupuestos = presupuestos.filter((s) => s.id !== id);
    localStorage.setItem("presupuestos", JSON.stringify(presupuestos));
    bootstrap.Modal.getInstance($("#editarPresupuestosModal")).hide();
    renderPresupuestos();
  });

  function renderCheckboxesEdicion() {
  const servicios = JSON.parse(localStorage.getItem("servicios")) || [];

  const contenedor = document.getElementById("edit-serviciosPresupuestos");
  contenedor.innerHTML = servicios
    .map(
      (servicio) => `
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="${servicio.id}" id="edit-servicio-${servicio.id}">
          <label class="form-check-label" for="edit-servicio-${servicio.id}">
            ${servicio.descripcion} ($${servicio.valor})
          </label>
        </div>
      `
    )
    .join("");
  }

  function marcarCheckboxesSeleccionados(presupuesto) {
  const idsSeleccionados = presupuesto.serviciosSeleccionados.map(s => s.id);

  document.querySelectorAll("#edit-serviciosPresupuestos input[type=checkbox]")
    .forEach(cb => {
      cb.checked = idsSeleccionados.includes(Number(cb.value));
    });
  }

  function abrirModalEdicion(presupuesto) {
    renderCheckboxesEdicion();
    setTimeout(() => {
      marcarCheckboxesSeleccionados(presupuesto);
    }, 0);
    $("#edit-id").value = presupuesto.id;
    $("#edit-NombrePresupuestos").value = presupuesto.apellidoNombre;
    $("#edit-fechaPresupuestos").value = presupuesto.fecha;
    $("#edit-TematicaPresupuestos").value = presupuesto.tematica;
    const modal = new bootstrap.Modal(document.getElementById("editarPresupuestosModal"));
    modal.show();
  }

  renderSalones();
  renderServicios();
  renderPresupuestos();
});
