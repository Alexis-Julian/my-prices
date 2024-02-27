import { TextInput, Image, View } from "react-native";
import theme from "../theme/main";
function StyledInput({ children, height, width }) {
	const sizes = { height: height, width: width };
	return (
		<View style={{ ...theme.input, ...sizes }}>
			<Image
				source={require("../assets/magnifying_glass.png")}
				style={{
					height: 20,
					width: 20,
					marginHorizontal: 6,
				}}
			/>
			<TextInput placeholder={children ? children : ""} />
		</View>
	);
}

export default StyledInput;
