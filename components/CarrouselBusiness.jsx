import { View, Image } from "react-native";

import StyledButtonApp from "./StyledButtonApp";
function CarrouselBusiness() {
	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-around",
				width: "100%",
			}}
		>
			<StyledButtonApp />
			<Image
				style={{ resizeMode: "contain", height: 200, width: 200 }}
				source={{
					uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Logo_Supermercado_Coto.svg/799px-Logo_Supermercado_Coto.svg.png",
				}}
			></Image>
			<StyledButtonApp direction={"right"} />
		</View>
	);
}

export default CarrouselBusiness;
