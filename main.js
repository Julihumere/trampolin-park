const salones = [
  {
    id: 1,
    titulo: "Salón Aventura",
    descripcion:
      "Un amplio salón temático con decoración de jungla y juegos interactivos.",
    direccion: "Av. Principal 123, Ciudad Central",
    valor: 250,
    estado: "Disponible",
    img: "http://127.0.0.1:5500/assets/salones/1.webp",
    dias: [
      {
        id: 1,
        fecha: "12/05/2025",
        horarios: [
          {
            id: 1,
            hora: "09:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "12:00",
            disponible: false,
          },
          {
            id: 3,
            hora: "15:00",
            disponible: true,
          },
        ],
      },
      {
        id: 2,
        fecha: "13/05/2025",
        horarios: [
          {
            id: 1,
            hora: "09:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "12:00",
            disponible: false,
          },
          {
            id: 3,
            hora: "15:00",
            disponible: true,
          },
        ],
      },
      {
        id: 3,
        fecha: "14/05/2025",
        horarios: [
          {
            id: 1,
            hora: "09:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "12:00",
            disponible: false,
          },
          {
            id: 3,
            hora: "15:00",
            disponible: true,
          },
        ],
      },
      {
        id: 4,
        fecha: "15/05/2025",
        horarios: [
          {
            id: 1,
            hora: "09:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "12:00",
            disponible: false,
          },
          {
            id: 3,
            hora: "15:00",
            disponible: true,
          },
        ],
      },
      {
        id: 5,
        fecha: "16/05/2025",
        horarios: [
          {
            id: 1,
            hora: "09:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "12:00",
            disponible: false,
          },
          {
            id: 3,
            hora: "15:00",
            disponible: true,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    titulo: "Salón Espacial",
    descripcion:
      "Un espacio decorado con temática de galaxias y luces LED para una experiencia fuera de este mundo.",
    direccion: "Calle Luna 456, Ciudad Central",
    valor: 300,
    estado: "Reservado",
    img: "http://127.0.0.1:5500/assets/salones/2.webp",
    dias: [
      {
        id: 1,
        fecha: "12/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: false,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: true,
          },
        ],
      },
      {
        id: 2,
        fecha: "13/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: false,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: false,
          },
        ],
      },
      {
        id: 3,
        fecha: "14/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: false,
          },
        ],
      },
      {
        id: 4,
        fecha: "15/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: false,
          },
        ],
      },
      {
        id: 5,
        fecha: "16/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: false,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    titulo: "Salón Pirata",
    descripcion:
      "Un salón con temática de barcos piratas y una mini piscina de pelotas.",
    direccion: "Boulevard del Tesoro 789, Ciudad Central",
    valor: 280,
    estado: "Disponible",
    img: "http://127.0.0.1:5500/assets/salones/3.webp",
    dias: [
      {
        id: 1,
        fecha: "12/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "14:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "17:00",
            disponible: true,
          },
        ],
      },
      {
        id: 2,
        fecha: "13/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "14:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "17:00",
            disponible: true,
          },
        ],
      },
      {
        id: 3,
        fecha: "14/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "14:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "17:00",
            disponible: true,
          },
        ],
      },
      {
        id: 4,
        fecha: "15/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "14:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "17:00",
            disponible: true,
          },
        ],
      },
      {
        id: 5,
        fecha: "16/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "14:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "17:00",
            disponible: true,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    titulo: "Salón Neón",
    descripcion:
      "Un espacio moderno con luces fluorescentes y música para fiestas juveniles.",
    direccion: "Plaza Brillante 101, Ciudad Central",
    valor: 320,
    estado: "Reservado",
    img: "http://127.0.0.1:5500/assets/salones/4.webp",
    dias: [
      {
        id: 1,
        fecha: "12/05/2025",
        horarios: [
          {
            id: 1,
            hora: "09:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "12:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "15:00",
            disponible: false,
          },
        ],
      },
      {
        id: 2,
        fecha: "13/05/2025",
        horarios: [
          {
            id: 1,
            hora: "09:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "12:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "15:00",
            disponible: false,
          },
        ],
      },
      {
        id: 3,
        fecha: "14/05/2025",
        horarios: [
          {
            id: 1,
            hora: "09:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "12:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "15:00",
            disponible: false,
          },
        ],
      },
      {
        id: 4,
        fecha: "15/05/2025",
        horarios: [
          {
            id: 1,
            hora: "09:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "12:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "15:00",
            disponible: false,
          },
        ],
      },
      {
        id: 5,
        fecha: "16/05/2025",
        horarios: [
          {
            id: 1,
            hora: "09:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "12:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "15:00",
            disponible: false,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    titulo: "Salón Castillo",
    descripcion:
      "Un área inspirada en castillos medievales con juegos inflables y trajes de caballeros.",
    direccion: "Calle del Rey 202, Ciudad Central",
    valor: 290,
    estado: "Disponible",
    img: "http://127.0.0.1:5500/assets/salones/5.webp",
    dias: [
      {
        id: 1,
        fecha: "12/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: true,
          },
        ],
      },
      {
        id: 2,
        fecha: "13/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: true,
          },
        ],
      },
      {
        id: 3,
        fecha: "14/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: true,
          },
        ],
      },
      {
        id: 4,
        fecha: "15/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: true,
          },
        ],
      },
      {
        id: 5,
        fecha: "16/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: true,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    titulo: "Salón Acuático",
    descripcion:
      "Un salón con toboganes de agua y juegos de chorros para un evento refrescante.",
    direccion: "Avenida del Agua 303, Ciudad Central",
    valor: 350,
    estado: "Reservado",
    img: "http://127.0.0.1:5500/assets/salones/6.webp",
    dias: [
      {
        id: 1,
        fecha: "12/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "14:00",
            disponible: false,
          },
          {
            id: 3,
            hora: "17:00",
            disponible: true,
          },
        ],
      },
      {
        id: 2,
        fecha: "13/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: true,
          },
        ],
      },
      {
        id: 3,
        fecha: "14/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: true,
          },
        ],
      },
      {
        id: 4,
        fecha: "15/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: true,
          },
        ],
      },
      {
        id: 5,
        fecha: "16/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: true,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    titulo: "Salón de los Superhéroes",
    descripcion:
      "Un lugar decorado con personajes de cómics y actividades de entrenamiento para pequeños héroes.",
    direccion: "Calle Justicia 404, Ciudad Central",
    valor: 270,
    estado: "Disponible",
    img: "http://127.0.0.1:5500/assets/salones/7.webp",
    dias: [
      {
        id: 1,
        fecha: "12/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: false,
          },
        ],
      },
      {
        id: 2,
        fecha: "13/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: false,
          },
        ],
      },
      {
        id: 3,
        fecha: "14/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: false,
          },
        ],
      },
      {
        id: 4,
        fecha: "15/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: false,
          },
        ],
      },
      {
        id: 5,
        fecha: "16/05/2025",
        horarios: [
          {
            id: 1,
            hora: "10:00",
            disponible: true,
          },
          {
            id: 2,
            hora: "13:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "16:00",
            disponible: false,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    titulo: "Salón Mágico",
    descripcion:
      "Un salón con temática de magia y trucos de ilusionismo en vivo.",
    direccion: "Avenida Encantada 505, Ciudad Central",
    valor: 310,
    estado: "Reservado",
    img: "http://127.0.0.1:5500/assets/salones/8.webp",
    dias: [
      {
        id: 1,
        fecha: "12/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "14:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "17:00",
            disponible: true,
          },
        ],
      },
      {
        id: 2,
        fecha: "13/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "14:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "17:00",
            disponible: true,
          },
        ],
      },
      {
        id: 3,
        fecha: "14/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "14:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "17:00",
            disponible: true,
          },
        ],
      },
      {
        id: 4,
        fecha: "15/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "14:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "17:00",
            disponible: true,
          },
        ],
      },
      {
        id: 5,
        fecha: "16/05/2025",
        horarios: [
          {
            id: 1,
            hora: "11:00",
            disponible: false,
          },
          {
            id: 2,
            hora: "14:00",
            disponible: true,
          },
          {
            id: 3,
            hora: "17:00",
            disponible: true,
          },
        ],
      },
    ],
  },
];

const servicios = [
  {
    id: 1,
    descripcion:
      "Animación y juegos dirigidos por un equipo de recreadores profesionales.",
    valor: 100,
  },
  {
    id: 2,
    descripcion: "Decoración temática personalizada con globos y pancartas.",
    valor: 150,
  },
  {
    id: 3,
    descripcion: "Catering con opciones de snacks, comidas rápidas y bebidas.",
    valor: 200,
  },
  {
    id: 4,
    descripcion: "Show de magia en vivo con participación de los niños.",
    valor: 180,
  },
  {
    id: 5,
    descripcion: "Alquiler de disfraces temáticos para los invitados.",
    valor: 120,
  },
  {
    id: 6,
    descripcion: "Zona de realidad virtual con juegos interactivos.",
    valor: 250,
  },
  {
    id: 7,
    descripcion: "Fotografía profesional y álbum digital del evento.",
    valor: 220,
  },
  {
    id: 8,
    descripcion: "Pintacaritas y globoflexia para los niños.",
    valor: 90,
  },
];

async function initSalones() {
  try {
    const existingSalones = JSON.parse(localStorage.getItem("salones"));
    if (!existingSalones || existingSalones.length === 0) {
      localStorage.setItem("salones", JSON.stringify(salones));
      console.log("Salones inicializados en localStorage");
    } else {
      console.log("Salones ya existen en localStorage");
    }
  } catch (error) {
    console.error("Error al inicializar los salones:", error);
  }
}

initSalones();
