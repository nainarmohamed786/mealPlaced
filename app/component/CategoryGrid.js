import { View, Pressable, Text, StyleSheet, Platform } from 'react-native'

function CategoryGrid({ title, color, onPress }) {
    return (
        <View style={styles.gridItem}>
            <Pressable style={({ pressed }) => [styles.buttons, pressed ? styles.buttonPressed : null]} android_ripple={{ color: "#ccc" }} onPress={onPress}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        height: 150,
        margin: 16,
        flex: 1,
        borderRadius: 8,
        elevation: 8,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 9,
        shadowOpacity: 0.25,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    buttons: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        borderRadius: 8

    },
    buttonPressed: {
        opacity: 0.50
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default CategoryGrid