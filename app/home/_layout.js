import { Slot } from "expo-router";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

import Header from "../../components/Header";
function HomeLayout() {
	return (
		<>
			<StatusBar style="light" backgroundColor="#efd735" />
			<View style={styles.container}>
				<Header />
				<Slot />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
export default HomeLayout;
