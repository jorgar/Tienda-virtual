import { useState } from 'react';
import Logo from '../img/Logo.png';

export const Encabezado = ({
	todosProductos,
	setTodosProductos,
	total,
	conteoProductos,
	setConteoProductos,
	setTotal,
}) => {
	const [active, setActive] = useState(false);

	const onDeleteProduct = producto => {
		const results = todosProductos.filter(
			item => item.id !== producto.id
		);

		setTotal(total - producto.precio * producto.cantidad);
		setConteoProductos(conteoProductos - producto.cantidad);
		setTodosProductos(results);
	};

	const onCleanCart = () => {
		setTodosProductos([]);
		setTotal(0);
		setConteoProductos(0);
	};

	return (
		<header>
		    <div className='logo-contenedor'>
                    <img
                     className='logo'
          src={Logo}
          alt='logo Gotty' />
            </div>
			<h1>Tienda en Línea</h1>

			<div className='container-icon'>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-products'>
						<span id='contador-productos'>{conteoProductos}</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{todosProductos.length ? (
						<>
							<div className='row-product'>
								{todosProductos.map(producto => (
									<div className='cart-product' key={producto.id}>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito'>
												{producto.cantidad}
											</span>
											<p className='titulo-producto-carrito'>
												{producto.nombreProducto}
											</p>
											<span className='precio-producto-carrito'>
												Q{producto.precio}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(producto)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>Q{total}</span>
							</div>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
		</header>
	);
};
