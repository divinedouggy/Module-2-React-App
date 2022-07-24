import {useLocation} from 'react-router-dom'



function Images() {

const location = useLocation()

console.log(location)

    return(
        <div>
          <p>stuff will hopefully go here</p>
        </div>
    )

}

export default Images