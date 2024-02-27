import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import StyledImage from "./StyledImage";
import StyledText from "./StyledText";
import theme from "../theme/main";

function CardEcommerce(repo) {
	function HeaderCard(repo) {
		return (
			<View style={{ justifyContent: "center", paddingRight: 10 }}>
				<StyledImage uri={repo.img} height={80} width={80} />
			</View>
		);
	}

	function BodyCard(repo) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
				}}
			>
				<StyledText fontSize="subheading">{repo.description}</StyledText>
			</View>
		);
	}

	function StyleCrossOutPrice() {
		return (
			<View
				style={{
					backgroundColor: "black",
					width: "100%",
					top: 12,
					height: 1.5,
					position: "absolute",
				}}
			></View>
		);
	}
	function FooterCard(repo) {
		function CashPrice(repo) {
			// console.log(repo.discounts);
			return (
				<View
					style={{
						justifyContent: "flex-start",
						alignItems: "flex-start",
						width: "100%",
					}}
				>
					<View
						style={{
							position: "relative",
							overflow: "hidden",
						}}
					>
						<StyledText fontSize={repo.discounts ? "subheading" : "heading"}>
							Contado: {repo.cashPrice}
						</StyledText>

						{repo.discounts && <StyleCrossOutPrice />}
					</View>
					<View style={{ flexDirection: "row", gap: 4 }}>
						{repo.discounts.map((discount, index) => {
							return (
								<>
									{index == 1 && (
										<StyledText fontSize={"heading"} fontWeight={"bold"}>
											|
										</StyledText>
									)}
									<StyledText fontSize={"heading"} fontWeight={"bold"}>
										{discount.dicount_amount}
									</StyledText>
									<StyledText fontSize={"heading"} fontWeight={"bold"}>
										{discount.discount_price}
									</StyledText>
								</>
							);
						})}
					</View>
				</View>
			);
		}

		function RegularPrice(repo) {
			console.log(repo.discounts);
			return (
				<View style={{ flexDirection: "row", gap: 4 }}>
					<StyledText fontWeight="bold" fontSize="heading">
						Regular: {repo.regularPrice}
					</StyledText>
					{repo.discounts.map((discount) => {
						return (
							<View
								style={{
									flexDirection: "row",
									alignItems: "flex-end",
									gap: 6,
								}}
							>
								<StyledText fontSize={"subheading"}>
									{discount.dicount_amount}
								</StyledText>
								<StyledText fontSize={"subheading"}>
									{discount.discount_price}
								</StyledText>
							</View>
						);
					})}
				</View>
			);
		}
		return (
			<View
				style={{
					justifyContent: "flex-end",
					flex: 1,
					padding: 4,
				}}
			>
				{/* Precio del producto */}
				{repo.cashPrice && <CashPrice {...repo} />}

				{repo.regularPrice && <RegularPrice {...repo} />}
			</View>
		);
	}

	return (
		<View style={styles.container}>
			{/* El header contiene la imagen del producto */}
			<HeaderCard {...repo} />

			<View style={{ flex: 1, justifyContent: "space-around" }}>
				{/* El body contiene la descripcion del producto */}
				<BodyCard {...repo} />

				{/* El footer contiene los precios y los descuentos del producto */}
				<FooterCard {...repo} />
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
