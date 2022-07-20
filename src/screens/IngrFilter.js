
function IngrFilter(props) {

    return (
        <div className="narrow">
            <label htmlFor="ingr-filter">Narrow Down Ingredients:</label>
            <input type="text"
                value={props.value}
                onChange={props.onChange}
                name="ingr-filter" />

        </div>
    )
}

export default IngrFilter