import { View, Text, FlatList, StyleSheet } from "react-native";
import data from "../data/products.json";
import CardEcommerce from "./CardEcommerce";

function ListCard() {
	console.log("porbandoo");
	return (
		<FlatList
			style={styles.container}
			data={data}
			// ItemSeparatorComponent={() => }
			renderItem={({ item: product }) => <CardEcommerce {...product} />}
		></FlatList>
	);
}

const styles = StyleSheet.create({
	container: {
		// padding: 10,
		flex: 1,
	},
});

export default ListCard;
