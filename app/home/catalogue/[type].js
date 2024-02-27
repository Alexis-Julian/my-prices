import { View, Text } from "react-native";
import { useLocalSearchParams, useGlobalSearchParams, Link } from "expo-router";
import ListCard from "../../../components/CardList";
export default function Route() {
	const glob = useGlobalSearchParams();
	const local = useLocalSearchParams();

	console.log("Local:", local.type, "Global:", glob.type);

	return (
		<View>
			<ListCard />
		</View>
	);
}
