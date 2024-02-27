import { View, StyleSheet, Image } from "react-native";
import StyledInput from "../components/StyledInput";
import CarrouselBusiness from "../components/CarrouselBusiness";
import { useState } from "react";
import { useRouter, useFocusEffect } from "expo-router";

export default function Page() {
	const [useText, setText] = useState("");
	const router = useRouter();

	useFocusEffect(() => {
		// Call the replace method to redirect to a new route without adding to the history.
		// We do this in a useFocusEffect to ensure the redirect happens every time the screen
		// is focused.
		router.replace("/home/catalogue");
	});
	// console.log(useText);
	return (
		<View style={styles.container}>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					marginBottom: 50,
				}}
			>
				<Image
					style={{ height: 200, width: 200 }}
					source={require("../assets/iconApp.png")}
				></Image>
				<StyledInput width={350} height={50} setText={setText}>
					Que producto desea buscar?
				</StyledInput>
				<CarrouselBusiness />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#efd735",
	},
});
