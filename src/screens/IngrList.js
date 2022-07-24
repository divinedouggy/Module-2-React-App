import { useRef, useState} from "react"
import axios from "axios"





function IngrList(props) {

    const ref = useRef(null)



    const [imageToDisplay, setImageToDisplay] = useState("")

    async function getImage(event) {
        closeImage()
        ref.current = event.target
        console.log(ref.current.innerText)
        const response = await axios.get(`https://a-cors-server.herokuapp.com/https://imsea.herokuapp.com/api/1?q=${ref.current.innerText}`)
        setImageToDisplay(<img src={response.data.results[0]} alt="ingredient"/>)
    }

    function closeImage() {
        setImageToDisplay("")
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
    <div className="ingImage" onClick={closeImage} >{imageToDisplay}</div>     
    </div>
    )
}

export default IngrList