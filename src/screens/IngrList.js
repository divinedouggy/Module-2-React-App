import { useRef, useState, useEffect } from "react"
import axios from "axios"





function IngrList(props) {

    const ref = useRef(null)

    // useEffect(() => {
    //     const el2 = ref.current;
    //     console.log(el2)
    // }, [])

    const [imageToDisplay, setImageToDisplay] = useState("")

    async function getImage(event) {
        ref.current = event.target
        console.log(ref.current.innerText)
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://imsea.herokuapp.com/api/1?q=${ref.current.innerText}`)
        setImageToDisplay(<img src={response.data.results[0]} alt="ingredient"/>)
    }

    return(
        <div>
              <button onClick={props.fetchIngredients}>Reset List</button>
        <div className="inglist">
            
        {props.ingredients.map((ingredient, index) => {
          
            return ( 
                <div  class="ingredient" key={index} onClick={getImage}  >
                    <h2 ref={ref} >{ingredient.name}</h2>    
                                        
                </div>
            )
        })}
    </div>
    <div className="ingImage">{imageToDisplay}</div>     
    </div>
    )
}

export default IngrList