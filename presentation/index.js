// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Image,
  Heading,
  Layout,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  interface: require("../assets/interface.png"),
  google: require("../assets/google.png"),
  googleFont: require("../assets/google-fonte.png"),
  developer: require("../assets/developer.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#025380",
  secondary: "white",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            O desenvolvimento de interface <br />como um quebra-cabeça
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={2} textColor="primary">Sobre nós</Heading>
          <Layout>
              <Fill>
                  <Heading caps bgColor="white">
                      <Image width="230" src="https://avatars0.githubusercontent.com/u/3205036?v=3&s=460" />
                      <Text textColor="#333" size={6}>Marcelo Ogeda</Text>
                  </Heading>
              </Fill>
              <Fill>
                  <Heading caps bgColor="white">
                      <Image width="230" src="https://avatars2.githubusercontent.com/u/2743180?v=3&s=400" />
                      <Text textColor="#333" size={6}>Sérgio Kopplin</Text>
                  </Heading>
              </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Primeiramente, o que é interface?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote style={{ fontSize: "3.5rem" }}>Interface é a conexão do dispositivo eletrônico com o usuário através de uma tela.</Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
            <Image width="430" src={images.interface} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            e o que é desenvolvimento?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote style={{ fontSize: "3.5rem" }}>Em uma definição simples e minimalista, são os 'programas' que usamos em nossos celulares e computadores, onde podemos interagir com ferramentas e pessoas.</Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            e o que é o desenvolvedor?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote style={{ fontSize: "3.5rem" }}>O desenvolvedor é o profissional que escreve os códigos para construir as aplicações.</Quote>
            <Cite>ITForum365</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
            <Image width="930" src={images.googleFont} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
            <Image width="930" src={images.google} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="white">
            <Image width="530" src={images.developer} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
