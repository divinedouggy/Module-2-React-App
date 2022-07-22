import { useRef, useEffect } from "react"

import { Link } from "react-router-dom";


function IngrList(props) {

    const ref = useRef(null)

    // useEffect(() => {
    //     const el2 = ref.current;
    //     console.log(el2)
    // }, [])

    function test(event) {
        ref.current = event.target
       return ref.current.innerText
        // console.log(ref.current.innerText)
    }

    return(
        <div>
              <button onClick={props.fetchIngredients}>Reset List</button>
        <div className="inglist">
            
        {props.ingredients.map((ingredient, index) => {
          
            return ( 
                <Link to="'./screens/Images'"><div  class="ingredient" key={index} onClick={test}  >
                    <h2 ref={ref} >{ingredient.name}</h2>
                   
                  
                   
                </div></Link>
            )
        })}
    </div>
    </div>
    )
}

export default IngrList