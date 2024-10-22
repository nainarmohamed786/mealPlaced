import { Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealsComponent from '../component/MealsComponent';
import SubTitle from '../component/SubTitle';
import ContentSub from '../component/ContentSub';
import Icons from '../component/Icons'
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, removeFavourite } from '../store/redux/FavouriteRedux'
// import { FavouriteContext } from '../store/FavoContext';

function MealDetail({ route, navigation }) {
    // const favoritesx = useContext(FavouriteContext);

    const favouriteIds = useSelector((state) => state.favouritemeal.ids)
    console.log(favouriteIds);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const isMealFavourite = favouriteIds.includes(mealId);
    console.log(isMealFavourite)
    function PressHandler() {
        console.log(mealId)
        if (isMealFavourite) {
            dispatch(removeFavourite({ id: mealId }))
        }
        else {
            dispatch(addFavourite({ id: mealId }))
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title
        })
    }, [selectedMeal, navigation]);



    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Icons name={isMealFavourite ? "star" : "star-outline"} color="white" onPress={PressHandler} />
                )
            }
        })
    }, [PressHandler, navigation]);

    return (
        <ScrollView style={styles.rootScreen}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>
                {selectedMeal.title}
            </Text>

            <MealsComponent duration={selectedMeal.duration} affordability={selectedMeal.affordability} complexity={selectedMeal.complexity} />
            <SubTitle>Ingredients</SubTitle>
            {selectedMeal.ingredients.map((ingre) => {
                return (
                    <ContentSub key={ingre} data={ingre} />
                )
            })}

            <SubTitle>Steps</SubTitle>
            {selectedMeal.steps.map((step) => {
                return (
                    <ContentSub key={step} data={step} />
                )
            })}
        </ScrollView>
    )
}


export default MealDetail;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10

    },
    rootScreen: {
        flex: 1,
        margin: 10
    },
    title: {
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10
    }
})
