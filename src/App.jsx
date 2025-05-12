import { useState } from 'react';
import { Encabezado } from './componentes/Encabezado';
import { ListaProductos } from './componentes/ListaProductos';

function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<>
			<Encabezado
				todosProductos={allProducts}
				setTodosProductos={setAllProducts}
				total={total}
				setTotal={setTotal}
				conteoProductos={countProducts}
				setConteoProductos={setCountProducts}
			/>
			<ListaProductos
				todosProductos={allProducts}
				setTodosProductos={setAllProducts}
				total={total}
				setTotal={setTotal}
				conteoProductos={countProducts}
				setConteoProductos={setCountProducts}
			/>
		</>
	);
}

export default App;
