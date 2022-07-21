import { useRef, useEffect } from "react"


function IngrList(props) {

    const ref = useRef(null)

    // useEffect(() => {
    //     const el2 = ref.current;
    //     console.log(el2)
    // }, [])

    function test(event) {
        ref.current = event.target
       
        console.log(ref.current)
    }

    return(
        <div>
              <button onClick={props.fetchIngredients}>Reset List</button>
        <div className="inglist">
            
        {props.ingredients.map((ingredient, index) => {
          
            return ( 
                <div  class="ingredient" key={index} onClick={test}  >
                    <h2 ref={ref} >{ingredient.name}</h2>
                </div>
            )
        })}
    </div>
    </div>
    )
}

export default IngrList