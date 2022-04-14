import { TailSpin, Triangle } from  'react-loader-spinner'

const Spinner = ({type = "TailSpin", color = "#DB5752", height = 30, width = 30}) => {
    const SPINNER_TYPES = {
        TailSpin,
        Triangle
    };
    const SpinnerType = SPINNER_TYPES[type];
    return (
        <SpinnerType  color={color} height={height} width={width} />
    )
}
export default Spinner