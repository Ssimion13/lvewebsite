import React from "react";
import AWARD01 from "../Images/AWARD01.jpg";
import AWARD02 from "../Images/AWARD02.jpg";
import AWARD03 from "../Images/AWARD03.jpg";
import AWARD04 from "../Images/AWARD04.jpg";
import AWARD05 from "../Images/AWARD05.jpg";
import AWARD06 from "../Images/AWARD06.jpg";
import AWARD07 from "../Images/AWARD07.jpg";

function Awards(){
    return(
        <div className="informativePage"> 
            <h2 className="centeredTitle" > Awards </h2>
            <br/>
            <div className="imageHolder">
                <img className="awardImage" alt="certificate of recognition 1" src={AWARD01} />
                <img className="awardImage" alt="certificate of recognition 2" src={AWARD02} />
                <img className="awardImage" alt="certificate of recognition 3" src={AWARD03} />
                <img className="awardImage" alt="Asian American Group Awards Honoree" src={AWARD04} />
                <img className="awardImage" alt="certificate of recognition 4" src={AWARD05} />
                <img className="awardImage" alt="certificate of recognition 5" src={AWARD06} />
                <img className="awardImage" alt="certificate of recognition 6" src={AWARD07} />
            </div>
        </div>
    )
}

export default Awards;