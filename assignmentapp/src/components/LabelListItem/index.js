
import "./index.css"
const LabelListItem = (props) =>{
    const {labeDetails}= props;
    const {companySuccess,number}=labeDetails;
    return(
        <li className="list-container">
            <h1 className="heading">{companySuccess}</h1>
            <p className="paragraph">{number}</p>
            
        </li>
    )
}

export default LabelListItem;