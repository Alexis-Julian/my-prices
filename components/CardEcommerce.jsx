import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import StyledImage from "./StyledImage";
import StyledText from "./StyledText";
import theme from "../theme/main";

// let ScreenHeight = Dimensions.get("window").height;

function CardEcommerce(repo) {
	// console.log(repo.img);
	return (
		<View style={styles.container}>
			<View style={{ justifyContent: "center", paddingRight: 10 }}>
				<StyledImage uri={repo.img} height={130} width={130} />
			</View>
			<View style={{ flex: 1, justifyContent: "space-around" }}>
				{/* Descuento del producto */}
				<View
					style={{
						flexDirection: "row",
						gap: 4,
					}}
				>
					{repo.discounts.map((e, index) => {
						return (
							<View
								key={index}
								style={{
									flexDirection: "row",
									gap: 4,
									backgroundColor: "blue",
									padding: 4,
									borderRadius: 5,
								}}
							>
								<View>
									{e.discount_img ? (
										<StyledText color={"secondary"} fontWeight={"bold"}>
											T
										</StyledText>
									) : (
										<StyledText color={"secondary"} fontWeight={"bold"}>
											Oferta
										</StyledText>
									)}
								</View>
								<StyledText color={"secondary"}>{e.discount_price}</StyledText>
								<StyledText color={"secondary"}>{e.dicount_amount}</StyledText>
							</View>
						);
					})}
				</View>

				{/* Descripcion del producot */}
				<StyledText fontSize="subheading">{repo.description}</StyledText>

				{/* Precio del producto */}
				{repo.cashPrice ? (
					<StyledText fontWeight="bold" fontSize="heading">
						Contado: {repo.cashPrice}
					</StyledText>
				) : (
					<StyledText fontWeight="bold" fontSize="heading">
						Regular: {repo.regularPrice}
					</StyledText>
				)}
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFFFFF",
		flex: 1,
		flexDirection: "row",
		borderBottomColor: theme.colors.Tertiary,
		borderWidth: 0.5,
		height: 200,
	},
});
export default CardEcommerce;
