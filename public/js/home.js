document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('productosContainer');
    const filtro = document.getElementById('filtroCategoria');

    let productos = [];

    //Obtener productos desde el backend
    fetch('http://localhost:3000/productos')
        .then(res => res.json())
        .then(data => {
            productos = data;
            console.log('📦 Productos cargados:', productos); // Verificar en consola
            cargarCategorias(productos);
            mostrarProductos(productos);
        })
        .catch(err => {
            console.error(' Error al cargar productos:', err);
        });

    function mostrarProductos(lista) {
        container.innerHTML = '';
        lista.forEach(producto => {
            const card = document.createElement('div');
            card.className = 'bg-white shadow-md rounded p-4';
            card.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-60 object-cover rounded mb-2">
                <h2 class="text-lg font-bold">${producto.nombre}</h2>
                <p class="text-gray-600">${producto.descripcion}</p>
                <p class="text-green-600 font-semibold mt-2">$${Number(producto.precio).toFixed(2)}</p>
                <button data-id="${producto.id}" class="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 agregarBtn">
                    Agregar al carrito
                </button>
            `;
            container.appendChild(card);
        });

        //Botones "Agregar al carrito"
        document.querySelectorAll('.agregarBtn').forEach(btn => {
            btn.addEventListener('click', e => {
                const id = parseInt(e.target.dataset.id);
                const producto = productos.find(p => p.id === id);
                agregarAlCarrito(producto);
            });
        });
    }

    function agregarAlCarrito(producto) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const index = carrito.findIndex(p => p.id === producto.id);
        if (index >= 0) {
            carrito[index].cantidad += 1;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert('Producto agregado al carrito');
    }

    function cargarCategorias(lista) {
        const categorias = ['todos', ...new Set(lista.map(p => p.categoria))];
        filtro.innerHTML = ''; // Limpiar antes de cargar
        categorias.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1); // Capitaliza
            filtro.appendChild(option);
        });
    }

    filtro.addEventListener('change', () => {
        const valor = filtro.value;
        if (valor === 'todos') {
            mostrarProductos(productos);
        } else {
            const filtrados = productos.filter(p => p.categoria === valor);
            mostrarProductos(filtrados);
        }
    });
});
