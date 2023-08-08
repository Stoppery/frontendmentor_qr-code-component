import './Card.css';

function Card(props) {
	return (
		<div className="card">
			<div className="card-code">
				<img src={props.qrcode} className="card_qrcode" alt="qrcode" />
			</div>
			<div className="card-description">
				<h3 className="card-description-header">{props.tittleCard}</h3>
				<p className="card-description-descr">{props.description}</p>
			</div>
		</div>
	);
}
export default Card;