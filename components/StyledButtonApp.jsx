import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

function StyledButtonApp({ url, direction, HandleEvent }) {
	const styledButton = [
		styles.container,
		direction == "up" && styles.up,
		direction == "down" && styles.down,
		direction == "left" && styles.left,
		direction == "right" && styles.right,
	];
	return (
		<TouchableOpacity onPress={HandleEvent}>
			<View style={styledButton}>
				<BlurView
					intensity={80}
					tint="light"
					style={{
						height: "100%",
						width: "100%",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Image source={require("../assets/arrow_right.png")} />
				</BlurView>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 60,
		width: 60,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "white",
		borderWidth: 1,
		borderRadius: 50,
		overflow: "hidden",
	},
	up: {
		transform: "rotate(90deg)",
	},
	down: {
		transform: "rotate(-90deg)",
	},
	right: {
		transform: "rotate(180deg)",
	},
	left: {
		transform: "rotate(0deg)",
	},
});
export default StyledButtonApp;
