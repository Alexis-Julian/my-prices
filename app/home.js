import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import CardList from "../components/CardList";

export default function Page() {
	const [useProducts, setProducts] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();

	function fetchProducts() {
		/* fetch("http://localhost:3000/products")
			.then((res) => res.json())
			.then(
				(data) => {
					setIsLoading(false);
					setProducts(data);
				},
				(err) => {
					setIsLoading(false);
					setError(error);
				}
			); */
		RNFS.readFile("/data/products.json", "utf8")
			.then((res) => res.json())
			.then(
				(data) => {
					setIsLoading(false);
					setProducts(data);
				},
				(err) => {
					setIsLoading(false);
					setError(error);
				}
			);
	}
	useEffect(() => {
		// fetchProducts();
	}, []);

	return (
		<View style={styles.container}>
			<CardList />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#cc5a59",
	},
});
