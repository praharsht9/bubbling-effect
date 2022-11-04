import './App.css';

function App() {
	const Click1 = () => {
		console.log('Parent');
	};
	const Click2 = (e) => {
		console.log('Child');
		e.stopPropagation();
	};
	return (
		<div className='App'>
			<div
				onClick={Click1}
				style={{ backgroundColor: 'red', width: 300, height: 400 }}
			>
				<h1>Hello</h1>
				<button>Parent</button>

				<button onClick={Click2}>Child</button>
			</div>
		</div>
	);
}

export default App;
