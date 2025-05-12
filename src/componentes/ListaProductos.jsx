import { dato } from '../dato';

export const ListaProductos = ({
	todosProductos,
	setTodosProductos,
	conteoProductos,
	setConteoProductos,
	total,
	setTotal,
}) => {
	const onAddProducto = producto => {
		if (todosProductos.find(item => item.id === producto.id)) {
			const productos = todosProductos.map(item =>
				item.id === producto.id
					? { ...item, cantidad: item.cantidad + 1 }
					: item
			);
			setTotal(total + producto.precio * producto.cantidad);
			setConteoProductos(conteoProductos + producto.cantidad);
			return setTodosProductos([...productos]);
		}

		setTotal(total + producto.precio * producto.cantidad);
		setConteoProductos(conteoProductos + producto.cantidad);
		setTodosProductos([...todosProductos, producto]);
	};

	return (
		<div className='container-items'>
			{dato.map(producto => (
				<div className='item' key={producto.id}>
					<figure>
						<img src={producto.img} alt={producto.nombreProducto} />
					</figure>
					<div className='info-product'>
						<h2>{producto.nombreProducto}</h2>
						<p className='price'>Q{producto.precio}</p>
						<button onClick={() => onAddProducto(producto)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
