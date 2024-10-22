import { View, Text, StyleSheet } from 'react-native'

function MealsComponent({ duration, complexity, affordability }) {
    return (
        <View style={styles.sampleContainer}>
            <Text style={styles.textBehind}>{duration}m</Text>
            <Text style={styles.textBehind}>{affordability}</Text>
            <Text style={styles.textBehind}>{complexity}</Text>
        </View>
    )
}

export default MealsComponent;


const styles = StyleSheet.create({
    sampleContainer: {
        flexDirection: "row",
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    textBehind: {
        fontSize: 15,
        marginHorizontal: 8
    }
})