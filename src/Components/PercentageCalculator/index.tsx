import Difference from './Difference';

/**
 * Percentage calculators array, add more apps on the go in a col structure
 */
const CALC_INFO = [
   <Difference />,
   <div>Work in progress</div>,
]

const PercentageCalculator = () => {
    return <div className="container">
        <div className="row">
            {CALC_INFO.map((component, index) =>  (
                <div className="col-md-4" key={index}>
                    {component}
                </div> 
            ))}
        </div>
  </div>
}

export default PercentageCalculator;