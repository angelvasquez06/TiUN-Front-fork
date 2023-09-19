// App.tsx
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Cambiar 'Switch' por 'Routes'
import Home from './pages/home';
import ProductDetail from './pages/productDetail';
import Cart from './pages/cart';
import Login from './pages/Auth/login';
import Register from './pages/Auth/register';
import ForgotPassword from './pages/Auth/forgotPassword';
import Payment from './pages/payment';
import {DarkModeProvider} from './context/DarkModeContext';
import {AuthProvider} from './context/authContext';
import Favorites from './pages/favorites';
import ProfilePage from './pages/profilePage';
import Politics from './pages/politics';

function App(): JSX.Element {
	return (
		<AuthProvider>
			<DarkModeProvider>
				<Router>
					<div>
						{/* Common header or navigation component can go here */}
						<Routes>
							{/* Rutas generales */}
							<Route path='/' element={<Home />} />
							<Route path='/Home' element={<Home />} />
							<Route path='/Login' element={<Login />} />
							<Route path='/SignUp' element={<Register />} />
							<Route path='/RecoverPassword' element={<ForgotPassword />} />
							<Route path='/Favorites' element={<Favorites />} />
							{/* Rutas de productos */}
							<Route path='/product/:productId' element={<ProductDetail />} />
							<Route path='/Profile' element ={<ProfilePage/>} />
							{/* Rutas protegidas DESPUES */}
							<Route path='/Cart' element={<Cart />} />
							<Route path='/payment' element={<Payment />} />
							<Route path='/politics' element={<Politics />} />
							{/* <Route element={<PrivateRoutesShopper/>}>
						<Route path="/DashShopper" element ={<DashboardShopper/>} />
						<Route path='/MyPurchases' element ={<MyPurchasesPage/>} />
						<Route path='/PaymentMethods' element ={<PaymentMethodsPage/>} />
						<Route path='/Checkout' element ={<CheckoutPage/>} />
						<Route path="/SellerProducts" element ={<SellerProductsPage/>} />
            <Route path="/Sales" element ={<SalesPage/>} />
            <Route path="/Payments" element ={<PaymentsPage/>} />
					</Route> */}

						</Routes>
					</div>
				</Router>
			</DarkModeProvider>
		</AuthProvider>
	);
}

export default App;
