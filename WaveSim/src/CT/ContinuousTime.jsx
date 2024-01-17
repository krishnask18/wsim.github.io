import Cardcomp from "../Cardcomp";

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
            bgim="linear-gradient(to bottom,rgba(76, 105, 152, 1), rgba(21, 47, 110,0.5)),url(../src/assets/DT_bg.jpg)"
            title="Fourier Transform"
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
            bgim="linear-gradient(to bottom,rgba(122, 106, 85, 1), rgba(92, 68, 55, 0.5)),url(../src/assets/DT_gi.jpg)"
            title="Fourier Series Visualization"
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
            bgim="linear-gradient(to bottom,rgba(103, 72, 110, 1), rgba(68, 15, 80, 0.5)),url(../src/assets/DT_bg.jpg)"
            title="Laplace Transform"
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
            bgim="linear-gradient(to bottom,rgba(81, 93, 69, 1), rgba(48, 70, 31, 0.5)),url(../src/assets/T_bgi.jpg)"
            title="Convolution Animation"
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