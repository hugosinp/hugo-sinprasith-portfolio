import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './app/pages/Layout';
import HomePage from './app/pages/HomePage';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
