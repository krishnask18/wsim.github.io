import Cardcomp from "./Cardcomp";

function ContinuousTime()
{

    return  <div
    style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" ,transform:"translate(0px, 80px)"}}
  >
        <div className="card-hover" 
          onClick={()=>{
            window.location="";
                }}>
          <Cardcomp
            bgim="linear-gradient(to bottom,rgba(76, 105, 152, 1), rgba(21, 47, 110)),url(../src/assets/DT_bgi.jpg)"
            title="Digital Signal Processing"
            description={
              <div style={{width:"280px"}}>
                <div>
                  {"\u25CF"} Interepretetion & visualisation of DTFT, DFT, {"\u0396"} Transform for discrete time & digital signals
                </div>
                <div style={{transform:"translate(0px, 15px)"}}>
                  {"\u25CF"} Various types of convolutions & animations for Discrete time signals
                </div>
              </div>
            }
            />
        </div>

        <div className="card-hover" 
          onClick={()=>{
            window.location="/continuousTime";
                }}>
          <Cardcomp
            bgim="linear-gradient(to bottom,rgba(122, 106, 85, 1), rgba(92, 68, 55, 0.5)),url(../src/assets/DT_bgi.jpg)"
            title="Digital Signal Processing"
            description={
              <div style={{width:"280px"}}>
                <div>
                  {"\u25CF"} Interepretetion & visualisation of DTFT, DFT, {"\u0396"} Transform for discrete time & digital signals
                </div>
                <div style={{transform:"translate(0px, 15px)"}}>
                  {"\u25CF"} Various types of convolutions & animations for Discrete time signals
                </div>
              </div>
            }
            />
        </div>
        <div className="card-hover" 
          onClick={()=>{
            window.location="/continuousTime";
                }}>
          <Cardcomp
            bgim="linear-gradient(to bottom,rgba(15, 126, 94, 1), rgba(10, 115, 86, 0.5)),url(../src/assets/DT_bgi.jpg)"
            title="Digital Signal Processing"
            description={
              <div style={{width:"280px"}}>
                <div>
                  {"\u25CF"} Interepretetion & visualisation of DTFT, DFT, {"\u0396"} Transform for discrete time & digital signals
                </div>
                <div style={{transform:"translate(0px, 15px)"}}>
                  {"\u25CF"} Various types of convolutions & animations for Discrete time signals
                </div>
              </div>
            }
            />
        </div>
        <div className="card-hover" 
          onClick={()=>{
            window.location="/continuousTime";
                }}>
          <Cardcomp
            bgim="linear-gradient(to bottom,rgba(15, 126, 94, 1), rgba(10, 115, 86, 0.5)),url(../src/assets/DT_bgi.jpg)"
            title="Digital Signal Processing"
            description={
              <div style={{width:"280px"}}>
                <div>
                  {"\u25CF"} Interepretetion & visualisation of DTFT, DFT, {"\u0396"} Transform for discrete time & digital signals
                </div>
                <div style={{transform:"translate(0px, 15px)"}}>
                  {"\u25CF"} Various types of convolutions & animations for Discrete time signals
                </div>
              </div>
            }
            />
        </div>

    </div>
}

export  default ContinuousTime;