import ProfileCard from "./profileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";

// console.log(AlexaImage);
// console.log(SiriImage);

export default function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>

      </section>

      {/* Image Compnants that returns image
    <img src={AlexaImage} alt='Alexa Image' />
    <img src={CortanaImage}/>
    <img src={SiriImage} /> */}
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard 
              title="Alexa" 
              handle="@alexa99" 
              image={AlexaImage} 
              description = "Alexa was created by Amazon"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description = "Cortana was created by Microsoft"
              />
            </div>
            <div className="column is-4">
              <ProfileCard 
              image={SiriImage}
              title="Siri" 
              handle="@siri01" 
              description = "Siri was created by Apple"
               />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
