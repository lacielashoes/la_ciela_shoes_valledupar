document.addEventListener('DOMContentLoaded', function() {
    const productosGrid = document.querySelector('.productos-grid');
    const imagenes = [
        "img/photo_1_2025-06-10_21-25-18.jpg",
        "img/photo_2_2025-06-10_21-25-18.jpg",
        "img/photo_3_2025-06-10_21-25-18.jpg",
        "img/photo_4_2025-06-10_21-25-18.jpg",
        "img/photo_5_2025-06-10_21-25-18.jpg",
        "img/photo_6_2025-06-10_21-25-18.jpg",
        "img/photo_7_2025-06-10_21-25-18.jpg",
        "img/photo_8_2025-06-10_21-25-18.jpg",
        "img/photo_9_2025-06-10_21-25-18.jpg",
        "img/photo_10_2025-06-10_21-25-18.jpg",
        "img/photo_11_2025-06-10_21-25-18.jpg",
        "img/photo_12_2025-06-10_21-25-18.jpg",
        "img/photo_13_2025-06-10_21-25-18.jpg",
        "img/photo_14_2025-06-10_21-25-18.jpg",
        "img/photo_15_2025-06-10_21-25-18.jpg",
        "img/photo_16_2025-06-10_21-25-18.jpg",
        "img/photo_17_2025-06-10_21-25-18.jpg",
        "img/photo_18_2025-06-10_21-25-18.jpg",
        "img/photo_19_2025-06-10_21-25-18.jpg",
        "img/photo_20_2025-06-10_21-25-18.jpg",
        "img/photo_21_2025-06-10_21-25-18.jpg",
        "img/photo_22_2025-06-10_21-25-18.jpg",
        "img/photo_23_2025-06-10_21-25-18.jpg",
        "img/photo_24_2025-06-10_21-25-18.jpg",
        "img/photo_25_2025-06-10_21-25-18.jpg",
        "img/photo_26_2025-06-10_21-25-18.jpg",
        "img/photo_27_2025-06-10_21-25-18.jpg",
        "img/photo_28_2025-06-10_21-25-18.jpg",
        "img/photo_29_2025-06-10_21-25-18.jpg",
        "img/photo_30_2025-06-10_21-25-18.jpg",
        "img/photo_31_2025-06-10_21-25-18.jpg",
        "img/photo_32_2025-06-10_21-25-18.jpg",
        "img/photo_33_2025-06-10_21-25-18.jpg",
        "img/photo_34_2025-06-10_21-25-18.jpg",
        "img/photo_35_2025-06-10_21-25-18.jpg",
        "img/photo_36_2025-06-10_21-25-18.jpg"
    ];

    imagenes.forEach(imagen => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        productoDiv.innerHTML = `
            <img src="${imagen}" alt="Zapato">
            <h3>Zapato</h3>
            <p>Descripción del zapato.</p>
            <button>Comprar</button>
        `;

        productosGrid.appendChild(productoDiv);
    });
});
