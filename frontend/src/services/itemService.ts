import axios from "axios";
import { CreateItem } from "../types/item.type";

const API_URL = "http://localhost:3000/items/";

export const getItems = async () => {
	try {
		const response = await axios.get(API_URL);
		if (Array.isArray(response.data)) {
			return response.data;
		} else {
			throw new Error("Unexpected response data format");
		}
	} catch (error) {
		console.error("Erro ao buscar dados da API:", error);
		throw error;
	}
};

export const addItem = async (item: CreateItem) => {
	try {
		const response = await axios.post(API_URL, item);
		return response.data;
	} catch (error) {
		console.error("Erro ao adicionar item:", error);
		throw error;
	}
};

export const updateItem = async (id: number, item: CreateItem) => {
	try {
		const response = await axios.put(`${API_URL}${id}`, item);
		return response.data;
	} catch (error) {
		console.error("Erro ao atualizar item:", error);
		throw error;
	}
};

export const deleteItem = async (id: number) => {
	try {
		const response = await axios.delete(`${API_URL}${id}`);
		return response.data;
	} catch (error) {
		console.error("Erro ao deletar item:", error);
		throw error;
	}
};
