window.onload = () => {
    const productosJSON = {
        "productos": [
          {
            "id": 1,
            "titulo": "Chaqueta Acolchada con Capucha",
            "descripcion": "Una cómoda chaqueta de algodón para uso diario.",
            "precio": 47.99,
            "img": ["h1.jpg", "h1_2.jpg"],
            "talla": ["S", "M", "L", "XL"]
          },
          {
            "id": 2,
            "titulo": "Abrigo de lana de moda para hombres",
            "descripcion": "Abrigo de lana de moda para hombres ideal para otoño e invierno.",
            "precio": 89.79,
            "img": ["h2.jpg", "h2_2.jpg"],
            "talla": ["XS", "S", "M", "L","XL","XXL"]
          },
          {
            "id": 3,
            "titulo": "Pantalón Vaquero Elástico",
            "descripcion": "Pantalón Vaquero Elástico de Ajuste Deportivo Hombre ideal para el dia a dia.",
            "precio": 37.79,
            "img": ["h3.jpg", "h3_2.jpg"],
            "talla": ["XS", "S", "M", "L","XL","XXL"]
          },
          {
            "id": 4,
            "titulo": "Cárdigan de Forro Polar",
            "descripcion": "Cárdigan de Forro Polar con Cuello Esmoquin y Manga Larga Hombre.",
            "precio": 17.49,
            "img": ["h4.jpg", "h4_2.jpg"],
            "talla": ["XS", "S", "M", "L","XL","XXL"]
          },
          {
            "id": 5,
            "titulo": "Pantalón corto elástico",
            "descripcion": "Pantalón corto elástico de golf y corte clásico para hombre.",
            "precio": 21.79,
            "img": ["h5.jpg", "h5_2.jpg"],
            "talla": ["XS", "S", "M", "L","XL","XXL"]
          },
          {
            "id": 6,
            "titulo": "DANISH ENDURANCE 2 Pack Mallas",
            "descripcion": "Mallas de Compresión para Hombre, Pantalones Deportivos Running con Bolsillos.",
            "precio": 25.79,
            "img": ["h6.jpg", "h6_2.jpg"],
            "talla": ["XS", "S", "M", "L","XL","XXL"]
          },
          {
            "id": 7,
            "titulo": "Camisa a Cuadros de Manga Larga",
            "descripcion": "Camisa a Cuadros de Manga Larga de Franela para Hombres con Capucha y Camisa de Invierno Casual con Bolsillo.",
            "precio": 39.99,
            "img": ["h7.jpg", "h7_2.jpg"],
            "talla": ["XS", "S", "M", "L","XL","XXL"]
          },
          {
            "id": 8,
            "titulo": "Pantalones tácticos",
            "descripcion": "Pantalones tácticos para Hombre, Pantalones Cargo Ripstop Resistentes al Agua, Pantalones de Senderismo Ligeros.",
            "precio": 54.79,
            "img": ["h8.jpg", "h8_2.jpg"],
            "talla": ["XS", "S", "M", "L","XL","XXL"]
          },
          {
            "id": 9,
            "titulo": "Camiseta Militar de Camuflaje",
            "descripcion": "Camiseta Militar de Camuflaje de Manga Larga con Cremallera de 1/4 para Hombre.",
            "precio": 64.79,
            "img": ["h9.jpg", "h9_2.jpg"],
            "talla": ["XS", "S", "M", "L","XL","XXL"]
          },
          {
            "id": 10,
            "titulo": "Sudadera Polar",
            "descripcion": "Sudadera Polar de Manga Larga y Cremallera de un Cuarto Hombre.",
            "precio": 14.99,
            "img": ["h10.jpg", "h10_2.jpg"],
            "talla": ["XS", "S", "M", "L","XL","XXL"]
          },
        ]
      };

      
        const { createApp } = Vue;
      
        createApp({
          data() {
            return{
                productos:[],
            }
          },
          methods: {
          },
          mounted() {
            this.productos=productosJSON.productos;
            console.log(this.productos)
          },
        }).mount('#app');
    

      

    const carrusel = document.querySelector('.carrusel-wrapper');
    let currentIndex = 0;
    let intervalId;
    const startInterval = () => {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % carrusel.children.length;
            carrusel.style.transform = `translateX(${-currentIndex * 100}%)`;
        }, 6000);
    };
    carrusel.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carrusel.children.length;
        carrusel.style.transform = `translateX(${-currentIndex * 100}%)`;
        clearInterval(intervalId);
        startInterval();
    });
    startInterval();
    

    const main = document.querySelector('main');
    const hombreSection = document.getElementById('hombre');
    const mujerSection = document.getElementById('mujer');
    const principalSection = document.getElementById('principal');

    const buttonHombre = document.getElementById('buttonHombre');
    const buttonMujer = document.getElementById('buttonMujer');
    const buttonInicio = document.querySelectorAll('.buttonInicio');

    buttonHombre.addEventListener('click', () => {
        principalSection.style.display = 'none';
        mujerSection.style.display = 'none';
        hombreSection.style.display = 'block';
    });

    buttonMujer.addEventListener('click', () => {
        principalSection.style.display = 'none';
        hombreSection.style.display = 'none';
        mujerSection.style.display = 'block';
    });
    buttonInicio.forEach(element => {
        element.addEventListener('click', () => {
        hombreSection.style.display = 'none';
        mujerSection.style.display = 'none';
        principalSection.style.display = 'block';
        });
    });
    

}