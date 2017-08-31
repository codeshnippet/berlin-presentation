// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
// import createTheme from "spectacle/lib/themes/default";
import theme from "../themes/seattlejs/index.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../themes/seattlejs/index.css");
// Best way to include fonts rite
require("../fonts/worksans.css");
require("../fonts/biorhyme.css");
require("../fonts/silkscreen.css");

const images = {
  bg: require("../assets/bg_berlin.svg"),
  badCode: require("../assets/bad_code.jpg"),
  sonarqube: require("../assets/sonarqube.svg"),
  sonarqubeReport: require("../assets/sonarqube-report.png"),
  soWhat: require("../assets/so-what.gif")
};

preloader(images);

export default class Presentation extends React.Component {
  renderSponsorHeading(text) {
    return (
      <Heading
        caps
        size={6}
        style={{ letterSpacing: "0.05em" }}
      >
        {text}
      </Heading>
    );
  }

  render() {
    const skylineBg = {
      backgroundImage: `url(${images.bg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom center",
      backgroundSize: "100% auto"
    };

    const sponsor = {
      display: "block",
      marginBottom: "1.5em",
      maxHeight: "600px"
    };

    return (
      <Deck
        progress="none"
        theme={theme}
        transition={["fade"]}
        transitionDuration={500}
      >

        <Slide style={skylineBg}>
          <Heading size={3}>Code Quality</Heading>
          <Text margin="auto auto 5em auto">
            Vitalii Kravets @ WebDevCon 2-3 August 2017
          </Text>
        </Slide>

        <Slide bgColor="white">
          <Heading
            caps
            size={3}
            style={{ letterSpacing: "0.05em" }}
          >
            What?
          </Heading>
          <Text margin="auto auto 6em auto" textSize="2rem">
            code quality
          </Text>
        </Slide>

        <Slide bgColor="white">
          <Text margin="auto auto 6em auto" textSize="3rem">
            Easy to understand
          </Text>
          <Text margin="auto auto 6em auto" textSize="3rem">
            Easy to extend
          </Text>
          <Text margin="auto auto 6em auto" textSize="3rem">
            Easy to maintain
          </Text>
        </Slide>

        

        <Slide bgColor="white">
          <Image style={sponsor} width="100%" src={images.sonarqube} />
        </Slide>
        <Slide bgColor="white">
          <Image style={sponsor} width="100%" src={images.sonarqubeReport} />
        </Slide>
        <Slide bgColor="black">
          <Image width="100%" src={images.soWhat} />
            <Heading
              caps
              size={4}
              style={{ letterSpacing: "0.05em", color: "white" }}
            >
              So what?!
            </Heading>
        </Slide>
        <Slide bgColor="white">
          <Heading
            caps
            size={5}
            style={{ letterSpacing: "0.05em" }}
          >
            The cost of bad code:
          </Heading>
          <br/><br/>
          <Text margin="auto auto 6em auto" textSize="3rem">
            More bugs
          </Text>
          <Text margin="auto auto 6em auto" textSize="3rem">
            Hard to extend
          </Text>
          <Text margin="auto auto 6em auto" textSize="3rem">
            Depression
          </Text>
        </Slide>
        <Slide>

        </Slide>
      </Deck>
    );
  }
}
