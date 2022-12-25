import Footer from 'componentes/Footer'
import Menu from 'componentes/Menu'
import PaginaPadrao from 'componentes/PaginaPadrao'
import NotFound from 'pages/NotFound'
import Prato from 'pages/Prato'
import Sobre from 'pages/Sobre'
import Cardapio from 'pages/cardapio'
import Inicio from 'pages/inicio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				< Menu />
				<Routes>
					<Route path='/' element={<PaginaPadrao />} >
						<Route index element={<Inicio />} />
						<Route path='cardapio' element={<Cardapio />} />
						<Route path='sobre' element={<Sobre />} />
					</Route>
					<Route path='prato/:id' element={<Prato />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	)
}