import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	let [frases, setFrase] = useState([
		"Wash the dishes",
		"Clean my room",
		"Cook"
	]);

	let [tarea, setTarea] = useState("");

	const updatedtoDo = frases.map((listItems, i) => {
		return (
			<div key={i}>
				<button onClick={e => deleteToDo(i)}>
					<li className="li">{listItems}</li>Eliminar
				</button>
			</div>
		);
	});
	let lista = (
		<div>
			<ul className="list-group m-5  ">{updatedtoDo}</ul>
		</div>
	);

	function handleChange(k) {
		if (k.keyCode === 13 && k.value != null) {
			setFrase([...frases, tarea]);
			console.log(tarea);
		}
	}

	function deleteToDo(i) {
		frases.splice(i, 1);
		setFrase([...frases]);
	}

	return (
		<div className="cuadro">
			<h1>Todos</h1>
			<div sytle="mt-2">
				<input
					className="entrada"
					type="text"
					onChange={e => setTarea(e.target.value)}
					onKeyUp={k => handleChange(k)}
					value={tarea}
					placeholder="Enter Do"
					required
				/>
				<div className="listas ul">{lista}</div>
			</div>
			<section> tienes {frases.length} tareas por completar </section>
		</div>
	);
}
