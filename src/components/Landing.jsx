function Landing (){
    function sliderUp(){
        let frame = document.getElementById("Slider");
        frame.classList.toggle("frame-up")
    }

return (
    <div className="landing-frame" onClick={sliderUp} id="Slider">
        <div className="landing-upper">
            <div className="project-load-container">
                <div className="project-dot"></div>
                4 Projects Loaded
            </div>
            <div  className="landing-info-desc">Stan’s portfolio showcasing craft’s,<br/> skills, information, all in one website</div>
        </div>
        <div className="landing-lower-frame">
            <div className="hero-name">PHISBOL.DEV</div>
            <div className="hero-sub">
                <div className="sub-desc">
                    {">"}WEB UX/UI & DESIGNER<br/>{">"}ROCKSTAR<br/>{">"}ARTIST<br/>{">"}FULL_STACK DEV (SOON)



                </div>
                <div className="sub-date">/2025</div>
            </div>
            <br></br>
            <br></br>
        </div>
    </div>
)

}

export default Landing