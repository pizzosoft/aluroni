import Footer from 'componentes/Footer'
import Menu from 'componentes/Menu'
import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Cardapio = lazy(() => import('pages/cardapio'))
const PaginaPadrao = lazy(() => import('componentes/PaginaPadrao'))
const Inicio = lazy(() => import('pages/inicio'))
const NotFound = lazy(() => import('pages/NotFound'))
const Prato = lazy(() => import('pages/Prato'))
const Sobre = lazy(() => import('pages/Sobre'))

export default function AppRouter() {
	return (
		<main className='container'>
			<Router>
				< Menu />
				<Suspense fallback={<p> Carregando... </p>}>
					<Routes>
						<Route path='/' element={<PaginaPadrao />} >
							<Route index element={<Inicio />} />
							<Route path='cardapio' element={<Cardapio />} />
							<Route path='sobre' element={<Sobre />} />
						</Route>
						<Route path='prato/:id' element={<Prato />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Suspense>
				<Footer />
			</Router>
		</main>
	)
}