import React from "react";
import AWARD01 from "../Images/AWARD01.jpg";
import AWARD02 from "../Images/AWARD02.jpg";
import AWARD03 from "../Images/AWARD03.jpg";
import AWARD04 from "../Images/AWARD04.jpg";
import AWARD05 from "../Images/AWARD05.jpg";
import AWARD06 from "../Images/AWARD06.jpg";
import AWARD07 from "../Images/AWARD07.jpg";
import AwardModal from "./AwardModal"

function Awards(){
    return(
        <div className="informativePage"> 
            <h2 className="centeredTitle" > Awards </h2>
            <br/>
            <div className="imageHolder">
                <AwardModal image={AWARD01} number={1}/>
                <AwardModal image={AWARD02} number={2}/>
                <AwardModal image={AWARD03} number={3}/>
                <AwardModal image={AWARD04} number={4}/>
                <AwardModal image={AWARD05} number={5}/>
                <AwardModal image={AWARD06} number={6}/>
                <AwardModal image={AWARD07} number={7}/>
            </div>
        </div>
    )
}

export default Awards;