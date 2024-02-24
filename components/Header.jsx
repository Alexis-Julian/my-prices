import { TextInput, View, StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";

function Header() {
	return (
		<View style={styles.container}>
			<Image source={require("../assets/icon_menu.png")} style={styles.image} />
			<View style={styles.viewinput}>
				<View style={{ justifyContent: "center", alignItems: "center" }}>
					<Image
						source={require("../assets/magnifying_glass.png")}
						style={{ height: 20, width: 20, marginHorizontal: 6 }}
					/>
				</View>

				<TextInput placeholder="Ingrese su producto" />
			</View>
			<Image
				source={require("../assets/icon_nueva-tienda.png")}
				style={styles.image}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		height: 70,
		backgroundColor: "yellow",
		borderBottomWidth: 1,
		borderColor: "gray",
		paddingHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
	},
	viewinput: {
		backgroundColor: "white",
		paddingVertical: 8,
		borderRadius: 50,
		flexDirection: "row",
		flex: 1,
	},
	image: {
		height: 25,
		width: 25,
		borderRadius: 4,
	},
});
export default Header;
