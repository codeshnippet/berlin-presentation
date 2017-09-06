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
  soWhat: require("../assets/so-what.gif"),
  wtf: require("../assets/wtf.jpg"),
  fin: require("../assets/fin.jpg")
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

        {/* Slide 0 Title*/}
        <Slide style={skylineBg}>
          <Heading size={3}>GOOD CODE RULES</Heading>
          <Text margin="auto auto 5em auto">
            Things I learned in Berlin
          </Text>
        </Slide>

        {/* Slide 1 What?*/}
        <Slide bgColor="white">
          <Heading
            caps
            size={3}
            style={{ letterSpacing: "0.05em" }}
          >
            WHAT?
          </Heading>
          <Text margin="auto auto 6em auto" textSize="2rem">
            good code
          </Text>
        </Slide>

        {/* Slide 2 Definition*/}
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

        {/* Slide 3 WHY? */}
        <Slide bgColor="black">
          <Image width="100%" src={images.soWhat} />
            <Heading
              caps
              size={4}
              style={{ letterSpacing: "0.05em", color: "white" }}
            >
              So what?!
            </Heading>
            <Text margin="auto auto 6em auto" textSize="2rem" textColor="white" >
              (the 'why' part)
            </Text>
        </Slide>

        {/* Slide 4 The price */}
        <Slide bgColor="white">
          <Text margin="auto auto 6em auto" textSize="3rem">
            Bad code is expensive
          </Text>
          <Text margin="auto auto 6em auto" textSize="3rem">
            Bad code creates bad UX
          </Text>
          <Text margin="auto auto 6em auto" textSize="3rem">
            Bad code causes depression
          </Text>
        </Slide>

        {/* Slide 5 HOW? */}
        <Slide bgColor="white">
          <Heading
            caps
            size={3}
            style={{ letterSpacing: "0.05em" }}
          >
            HOW?
          </Heading>
        </Slide>

        {/* Slide 6 WTF image*/}
        <Slide bgColor="white">
          <Image width="75%" src={images.wtf} />
        </Slide>

        {/* Slide 7 Sonar*/}
        <Slide bgColor="white">
          <Link href="http://lalala.com" target="_blank">
            <Text margin="auto auto 6em auto" textSize="2rem">
              Presentation video
            </Text>
          </Link>
          <Image style={sponsor} src={images.sonarqubeReport} />
        </Slide>

        {/* Slide 8 FIN*/}
        <Slide bgColor="black">
          <Image width="100%" src={images.fin} />
        </Slide>
      </Deck>
    );
  }
}
