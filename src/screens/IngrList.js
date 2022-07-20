
function IngrList(props) {

    return(
        <div>
              <button onClick={props.fetchIngredients}>Reset List</button>
        <div className="inglist">
            
        {props.ingredients.map((ingredient, index) => {
          
            return (
                
                <div class="ingredient" key={index}>
                    <h2 >{ingredient.name}</h2>
                </div>

                
            )
        })}




    </div>
    </div>
    )
}

export default IngrList