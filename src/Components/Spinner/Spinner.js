import { TailSpin, Triangle } from  'react-loader-spinner'

const Spinner = ({type = "TailSpin", color = "#DB5752", height = 30, width = 30}) => {
    if(type === "TailSpin"){
        return(
            <TailSpin color={color} height={height} width={width} />
        )
    } else if (type === "Triangle"){
        return(
            <Triangle color={color} height={height} width={width} />
        ) 
    } 
}

export default Spinner