import LabelListItem from "../LabelListItem";
import UserDetails from "../UserDetails";
import "./index.css"
const labelList = [{id: 1,companySuccess: 'high',number: 75},{id:2,companySuccess: 'high',number: 75},{id: 3,companySuccess: 'high',number: 75},{id: 4,companySuccess: 'high',number: 75}]
const BecomeAccaIn18Months = () =>{
    return(
        <div className ="full-container">
            <div className="sub-container">
                <h1>BecomeAccaIn18Months</h1>
                <p className="paraLabel" >Unlock your potential with our dynamic learning course! Designed to engage and inspire, our program offers interactive lessons, real-world applications, and personalized guidance to attract students seeking growth. From hands-on projects to expert mentorship, discover a transformative educational experience that ignites passion and fuels success.</p>
                <ul className="logo-assign">
                {labelList.map((eachList)=>(<LabelListItem key ={eachList.id} labeDetails ={eachList}/>))}
                </ul>
                <div>
                    <button className="btn-1">More explore</button>
                    <button className="btn-2">AccessNow</button>
                </div>
                
            </div>
            <UserDetails />
        </div>
    )
}
export default BecomeAccaIn18Months;