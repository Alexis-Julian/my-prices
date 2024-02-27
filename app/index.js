import { View, StyleSheet, Image } from "react-native";
import StyledInput from "../components/StyledInput";
import CarrouselBusiness from "../components/CarrouselBusiness";

export default function Page() {
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
				<StyledInput width={350} height={50}>
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
