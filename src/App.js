import Card from './components/Card/Card';
import './App.css';
import qrcode from './img/image-qr-code.png'

function App() {
	return (
		<div className="App">
			<Card 
			qrcode={qrcode} 	
			tittleCard="Improve your front-end skills by building projects"
			description="Scan the QR code to visit Frontend Mentor and take your codding skills to the next level"/>
		</div>
	);
}

export default App;
