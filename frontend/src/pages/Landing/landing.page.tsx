import LoginButton from "components/LoginButton/loginbutton.component";
import ParticlesBackground from "components/ParticlesBackground/particlesbackground.component";
import LandingContainer from "./landing.styles";

const Landing = () => {
  return (
    <LandingContainer>
      <div className="content">
        <div className="description">
          <h1>Dashboard</h1>
          <p>
            Our dashboard solutions use the latest technology available to
            maximize speed, efficiency and output.
          </p>

          <b>Developer ready</b>
          <p>
            All of our solutions are made by developers for developers.
            Integrate Dashboard into your application quickly and easily.
          </p>
          <p>
            <a href="mailto:abc@example.com">Contact us</a> now to see how we
            can transform your business.
          </p>
        </div>

        <div>
          <p>Already have an account?</p>
          <LoginButton />

          <p>Create a demo account for FREE </p>
          <LoginButton screenHint="signup" text="Sign up" />
        </div>
      </div>
      <div className="particles">
        <ParticlesBackground />
      </div>
    </LandingContainer>
  );
};

export default Landing;
