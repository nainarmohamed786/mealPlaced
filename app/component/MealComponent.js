import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealsComponent from './MealsComponent'


function MealComponent({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation();

    function samplePress() {
        navigation.navigate("MealDetail", {
            mealId: id
        })
    }

    return (
        <View style={styles.outerContainer}>
            <Pressable android_ripple={{ color: "black" }} style={({ pressed }) => pressed ? styles.buttonStyles : null} onPress={samplePress}>
                <View >
                    <Image source={{ uri: imageUrl }} style={styles.images} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealsComponent duration={duration} complexity={complexity} affordability={affordability} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
        margin: 16,
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    images: {
        width: "100%",
        height: 200,
        borderRadius: 10
    },
    innerContainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        margin: 15
    },
    sampleContainer: {
        flexDirection: "row",
        padding: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonStyles: {
        opacity: 0.655
    },
    textBehind: {
        fontSize: 15,
        marginHorizontal: 8
    }
})

export default MealComponent