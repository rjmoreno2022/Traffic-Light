import React, { useState, useEffect } from 'react';
import Semaforo from './Semaforo.jsx';

//create your first component
const Home = () => {
	return (
		<>
			<div className='d-flex justify-content-center pt-5'>
				<Semaforo />
			</div>
		</>
	);
};

export default Home;
