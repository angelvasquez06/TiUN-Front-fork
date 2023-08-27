/* eslint-disable no-warning-comments */
import React, {useState} from 'react';
import logoMini from '../../assets/logomini.png';
import {ShoppingCartIcon, UserIcon, FavoritesIcon} from '../icons/icons';

const Header = () => {
	// TODO Para implementar
	// const [selectedCategory, setSelectedCategory] = useState('');
	// const [searchQuery, setSearchQuery] = useState('');

	// const handleCategoryChange = (event) => {
	// 	setSelectedCategory(event.target.value);
	// };

	// const handleSearchInputChange = (event) => {
	// 	setSearchQuery(event.target.value);
	// };

	const handleSearchSubmit = () => {
		// TODO  agregar la lógica para realizar la búsqueda
		// console.log(`Categoría: ${selectedCategory}, Búsqueda: ${searchQuery}`);
	};

	return (
		<header className=' fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-verdeClaro text-poppins '>
			<div className='flex items-center space-x-4'>
				<button className='mr-5 text-verdeOscuro '>
				Modo Oscuro
				</button>
				<div className='flex-grow-0 bg-white p-2 rounded-lg shadow-md  text-verdeOscuro '>
					<form className='flex items-center space-x-5 '>
						<select className='bg-white rounded-lg' // TODO por implementar
							// value={selectedCategory}
							// onChange={handleCategoryChange}
						>
							<option value=''>Todas las categorías</option>
							<option value='categoria1'>Categoría 1</option>
							<option value='categoria2'>Categoría 2</option>
							{/* Agrega más opciones de categorías según sea necesario */}
						</select>
						<input
							type='text'
							className=' flex-grow p-1 rounded-lg  placeholder:text-verdeOscuro'
							placeholder='Estoy buscando... '
							// TODO por implementar
							// value={searchQuery}
							// onChange={handleSearchInputChange}
						/>
					</form>
				</div>
			</div>
			<section className='flex items-center space-x-5 text-verdeOscuro'>
				<a href='Favorites'>
					<button className=''>
						<FavoritesIcon/>
					</button>
				</a>
				<a href='Profile'>
					<button className=''>
						<UserIcon/>
					</button>
				</a>
				<a href='Cart'>
					<button className=''>
						<ShoppingCartIcon/>
					</button>
				</a>
				<button className='' >
					<div><img src= {logoMini} alt='Logo' className='w-28' />
					</div>
				</button>
			</section>
		</header>
	);
};

export default Header;
