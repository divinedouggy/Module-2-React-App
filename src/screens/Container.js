import axios from "axios"
import { useEffect, useState } from "react"
import IngrFilter from "./IngrFilter"
import IngrList from "./IngrList"

function Container() {

    const [ingredientsToDisplay, setIngredientsToDisplay] = useState([])


    const fetchIngredients = async () => {
        try {
            const response = await axios.get("https://wizard-world-api.herokuapp.com/Ingredients")
        console.log("response", response.data)
        setIngredientsToDisplay(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    

    useEffect(() => {
        fetchIngredients()
    }, [],  )

    const handleFilterChange = (event) => {

        event.preventDefault()

        const filteredValue = event.target.value

        setIngredientsToDisplay((_prevState) => {
            const filteredIngrList = ingredientsToDisplay.filter((ingredient) => {
                console.log(ingredient.name)
                return ingredient.name.toLowerCase().includes(filteredValue.toLowerCase())
               
            })
            return filteredIngrList
        })
    }
    



    return (
        <div>
            <IngrFilter onChange = {(event) => handleFilterChange(event)}
             />
            <IngrList ingredients = {ingredientsToDisplay}
            fetchIngredients ={fetchIngredients} />
            
        </div>

    )
}

export default Container