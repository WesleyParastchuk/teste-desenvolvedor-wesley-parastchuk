import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Item } from "../../types/item.type";
import ItemTable from "../itemTable";
import { Button, ButtonContainer } from "../Button/styles";
import {
	addItem,
	deleteItem,
	getItems,
	updateItem,
} from "../../services/itemService";
import Modal from "react-modal";
import { Input } from "../Input/styles";

Modal.setAppElement("#root");

function Items() {
	const [items, setItems] = useState<Item[]>([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalType, setModalType] = useState("");
	const [newItem, setNewItem] = useState({ name: "", description: "" });
	const [idItem, setIdItem] = useState(0);

	const openModal = (type: string) => {
		setModalType(type);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
		setModalType("");
		setNewItem({ name: "", description: "" });
	};

	const fetchItems = async () => {
		try {
			const data = await getItems();
			setItems(data);
			setIdItem(0);
		} catch (error) {
			console.error("Erro ao buscar dados da API:", error);
		}
	};

	const handleAddItem = async () => {
		try {
			await addItem(newItem);
			await fetchItems();
			closeModal();
		} catch (error) {
			console.error("Erro ao adicionar item:", error);
		}
	};

	const handleUpdateItem = async () => {
		try {
			await updateItem(idItem, newItem);
			await fetchItems();
			closeModal();
		} catch (error) {
			console.error("Erro ao atualizar item:", error);
		}
	};

	const handleDeleteItem = async () => {
		try {
			await deleteItem(idItem);
			await fetchItems();
			closeModal();
		} catch (error) {
			console.error("Erro ao excluir item:", error);
		}
	};

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<Container>
			<ItemTable
				headCell={["ID", "Nome", "Descrição"]}
				bodyCell={items}
			></ItemTable>

			<ButtonContainer>
				<Button onClick={() => openModal("add")}>Adicionar</Button>
				<Button onClick={() => openModal("edit")}>Editar</Button>
				<Button onClick={() => openModal("delete")}>Excluir</Button>
			</ButtonContainer>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel="Example Modal"
			>
				{modalType === "add" && (
					<Container>
						<Input
							type="text"
							value={newItem.name}
							onChange={e =>
								setNewItem({ ...newItem, name: e.target.value })
							}
							placeholder="Digite o nome do item"
						/>
						<Input
							type="text"
							value={newItem.description}
							onChange={e =>
								setNewItem({
									...newItem,
									description: e.target.value,
								})
							}
							placeholder="Digite a descrição do item"
						/>
						<Button onClick={handleAddItem}>Adicionar Item</Button>
					</Container>
				)}
				{modalType === "edit" && (
					<Container>
						<Input
							type="number"
							value={idItem}
							onChange={e => setIdItem(Number(e.target.value))}
							placeholder="Digite o id do item"
						/>
						<Input
							type="text"
							value={newItem.name}
							onChange={e =>
								setNewItem({ ...newItem, name: e.target.value })
							}
							placeholder="Digite o nome do item"
						/>
						<Input
							type="text"
							value={newItem.description}
							onChange={e =>
								setNewItem({
									...newItem,
									description: e.target.value,
								})
							}
							placeholder="Digite a descrição do item"
						/>
						<Button onClick={handleUpdateItem}>Editar Item</Button>
					</Container>
				)}
				{modalType === "delete" && (
					<Container>
						<Input
							type="number"
							value={idItem}
							onChange={e => setIdItem(Number(e.target.value))}
							placeholder="Digite o id do item"
						/>
						<Button onClick={handleDeleteItem}>Excluir Item</Button>
					</Container>
				)}
			</Modal>
		</Container>
	);
}

export default Items;
