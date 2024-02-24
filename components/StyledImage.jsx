import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({});

function StyledImage({ uri, height, width, radius, style }) {
	const imageStyle = [{ height, width }];

	return <Image source={{ uri: uri }} style={imageStyle} />;
}

export default StyledImage;
