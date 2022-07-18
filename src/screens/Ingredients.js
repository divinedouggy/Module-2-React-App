import axios from "axios"
import { useEffect, useState } from "react"

function Ingredients() {

    const [ingredients, setIngredients] = useState([])

    async function fetchIngredients() {
        const response = await axios.get("https://wizard-world-api.herokuapp.com/Ingredients")
        console.log("response", response.data)
        setIngredients(response.data)
    }

    useEffect(() => {
        fetchIngredients()
    }, [])

    return (
        <div>
            {ingredients.map((ingredient) => {
                return (
                    <div>
                        <h2 >{ingredient.name}</h2>
                    </div>
                )
            })}




        </div>
    )
}

export default Ingredients