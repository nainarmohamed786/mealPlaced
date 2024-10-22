import { View, Text, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealComponent from '../component/MealComponent';
import { CATEGORIES } from '../data/dummy-data'
import { useLayoutEffect } from 'react';
import DisplayList from '../component/DisplayList'

function MealOverview({ route, navigation }) {

    const catId = route.params.categoryId;

    const displayMeal = MEALS.filter(mealItems => mealItems.categoryIds.indexOf(catId) >= 0);

    useLayoutEffect(() => {
        const categoryFilter = CATEGORIES.find((categories) => categories.id === catId);

        navigation.setOptions({
            title: categoryFilter.title
        })

    }, [catId, navigation])

    return (
        <DisplayList item={displayMeal} />
    )
}


export default MealOverview