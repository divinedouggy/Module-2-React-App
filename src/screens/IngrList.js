
function IngrList(props) {

function test(card) {

    card.innerText = "blue"
}

    return(
        <div>
              <button onClick={props.fetchIngredients}>Reset List</button>
        <div className="inglist">
            
        {props.ingredients.map((ingredient, index) => {
          
            return (
                
                <div class="ingredient" key={index}>
                    <h2 value={ingredient.name} onClick={e => test(e.target.value)} >{ingredient.name}</h2>
                </div>

                
            )
        })}




    </div>
    </div>
    )
}

export default IngrList