import illustrationImg from "../assets/illustration.svg";
import logoImg from "../assets/logo.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";
import { Link, useHistory } from "react-router-dom";
import { FormEvent, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "../hooks/Auth";

export function NewRoom() {
	const { user } = useAuth();
	const [newRoom, setNewRoom] = useState("");
	const history = useHistory();
	async function handleCreateRoom(event: FormEvent) {
		event.preventDefault();
		if (newRoom.trim() === "") {
			return;
		}
		const roomRef = database.ref("rooms");

		const firebaseRoom = await roomRef.push({
			title: newRoom,
			authorId: user?.id,
		});
		history.push(`/rooms/${firebaseRoom.key}`);
	}

	return (
		<div id="page-auth">
			<aside>
				<img
					src={illustrationImg}
					alt="Ilustração simbolizando perguntas e respostas"
				/>
				<strong>Crie salas de Q&amp;A ao-vivo</strong>
				<p>Tire duvidas da sua audiência em tempo real</p>
			</aside>
			<main>
				<div className="main-content">
					<img src={logoImg} alt="Letmeask" />
					<h2>criar uma sala</h2>
					<form onSubmit={handleCreateRoom}>
						<input
							type="text"
							placeholder="Nome da sala"
							value={newRoom}
							onChange={(e) => setNewRoom(e.target.value)}
						/>
						<Button type="submit">Criar sala</Button>
					</form>
					<p>
						Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
					</p>
				</div>
			</main>
		</div>
	);
}
