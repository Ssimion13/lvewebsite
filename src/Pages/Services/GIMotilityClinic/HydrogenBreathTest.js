import React from "react";

function HydrogenBreathTest() {
    return (
        <div className="sidePageDiv">
        <h2>  Hydrogen Breath Test </h2>
        <p className="sectionText"> 
            The hydrogen breath test is an office-based test that measures the hydrogen 
            and methane levels detected in the breath of a patient. This allows the 
            gastroenterologist to help determine the presence of small intestinal bacterial 
            overgrowth (SIBO). The small bowel normally does not have large amounts of bacteria, 
            however, with some patients, bacteria tend to colonize within the small bowel, causing 
            symptoms such as bloating, flatulence, abdominal pain/discomfort, diarrhea and 
            abdominal distension.

            This test starts with the patient giving a baseline breath sample for testing 
            for the levels of hydrogen and methane. After the baseline levels are determined, 
            the patient drinks a solution with lactulose, a non-absorbable sugar. Afterwards, 
            the patient gives seven more breath samples every fifteen minute interval. If there 
            is a sharp increase of hydrogen or methane detected in the breath, the test is 
            positive and the patient can be treated for SIBO. The hydrogen breath test takes 
            approximately 90 minutes.
        </p>
        <p> 
            Have more questions about this procedure? <br/> here are some links to help you:
            <ol>
                <a href="http://www.breathtests.com/what-is"> Breath Test </a>
            </ol>
        </p>
        </div>
    )
} 

export default HydrogenBreathTest;