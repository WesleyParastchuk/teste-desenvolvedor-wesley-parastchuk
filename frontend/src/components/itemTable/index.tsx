import { Item } from "../../types/item.type";
import {
	Table,
	TableHead,
	TableHeadCell,
	TableHeadRow,
	TableBody,
	TableBodyCell,
	TableBodyRow,
} from "./styles";

export interface ItemTableProps {
	headCell: string[];
	bodyCell: Item[];
}

const ItemTable: React.FC<ItemTableProps> = ({ headCell, bodyCell }) => {
	return (
		<Table>
			<TableHead>
				<TableHeadRow>
					{headCell.map(cell => (
						<TableHeadCell key={cell}>{cell}</TableHeadCell>
					))}
				</TableHeadRow>
			</TableHead>
			<TableBody>
				{bodyCell.map(item => (
					<TableBodyRow key={item.id}>
						<TableBodyCell>{item.id}</TableBodyCell>
						<TableBodyCell>{item.name}</TableBodyCell>
						<TableBodyCell>{item.description}</TableBodyCell>
					</TableBodyRow>
				))}
			</TableBody>
		</Table>
	);
};

export default ItemTable;
