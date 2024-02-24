import {
	Text,
	View,
	StyleSheet,
	ActivityIndicator,
	DimensionValue,
} from "react-native";
import { Link } from "expo-router";

export default function Page() {
	return (
		<View style={styles.container}>
			<Link href="/home">Navegar a home</Link>
			<ActivityIndicator size="small" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
