
import { View, Text, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data'
import DisplayList from '../component/DisplayList';
import { useSelector } from 'react-redux';

function FavouriteScreen() {

    const favouriteMeal = useSelector((state) => state.favouritemeal.ids)

    // const favouriteMeal = useContext(FavouriteContext);
    const meals = MEALS.filter((meal) => favouriteMeal.includes(meal.id));

    if (meals.length === 0) {
        return <View style={styles.container}>
            <Text style={styles.text}>You have no favourite meals</Text>
        </View>
    }

    return (
        <DisplayList item={meals} />
    )
}

export default FavouriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        color: "black",
        fontWeight: "bold"
    }
})