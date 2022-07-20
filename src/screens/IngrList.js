
function IngrList(props) {

    return(
        <div className="inglist">
        {props.ingredients.map((ingredient, index) => {
          
            return (
                <div class="ingredient" key={index}>
                    <h2 >{ingredient.name}</h2>
                </div>

                
            )
        })}




    </div>
    )
}

export default IngrList