import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './UserPost';
import CreatePost from './UserPost/CreatePost';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/create-post' element={<CreatePost />} />
			</Routes>
		</div>
	);
}

export default App;
