import "./About.css"
export const About = () => {
  return (
    <main className="about-container" id="journey">
     <h1> My Journey</h1>
        <div className="timeline">

        
          <div className="timeline-empty"></div>

        
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>

          <div className="timeline-component timeline-content">
            <h3>2023</h3>
            <p>Passed Hsc </p><br />
            <p>Kj Somaiya college Of Science & Commerce</p>
          </div>

          <div className="timeline-component timeline-content">
            <h3>2023-2027</h3>
            <p>Pursuing BTech</p><br />
            <p>Thakur College of Engineering & Technology</p>
          </div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>

          <div className="timeline-empty"></div>
          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>

          <div className="timeline-component timeline-content">
            <h3>Present</h3>
            <p>Learning Technologies</p>
          </div>

        </div>
        
     
    </main>
  );
};
