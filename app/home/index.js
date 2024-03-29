import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import CardList from "../../components/CardList";
export default function Page() {
	const [useProducts, setProducts] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();

	function fetchProducts() {
		new Promise((res) => setTimeout(res, 3000)).then((res) => {
			console.log("probando");
		});
	}
	useEffect(() => {
		fetchProducts();
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
