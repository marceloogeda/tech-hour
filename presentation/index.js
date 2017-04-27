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
  // ListItem,
  // List,
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
  ogeda: require("../assets/ogeda.jpg"),
  kopplin: require("../assets/kopplin.jpg"),
  google: require("../assets/google.png"),
  googleFont: require("../assets/google-fonte.png"),
  developer: require("../assets/developer.gif"),
  devel: require("../assets/devel.jpg"),
  tech: require("../assets/tech1.png"),
  tech2: require("../assets/tech2.png"),
  busca: require("../assets/busca.png"),
  buscaHighlight: require("../assets/buscaHighlight.png"),
  home: require("../assets/home.png"),
  buscaVagas: require("../assets/buscaVagas.png"),
  codar: require("../assets/codar.gif")
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
      <Deck theme={theme}>
        <Slide transition={["fade"]} bgColor="white" style={{ background: `url(${images.tech}) no-repeat center center fixed` }} />
        <Slide transition={["fade"]} bgColor="white" style={{ background: `url(${images.tech2}) no-repeat center center fixed` }} />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            O desenvolvimento de interface <br />como um quebra-cabeça
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={2} textColor="primary">Sobre nós</Heading>
          <Layout>
              <Fill>
                  <Heading caps bgColor="white">
                      <Image width="230px" src={images.ogeda} />
                      <Text textColor="#333" size={2}>Marcelo Ogeda</Text>
                  </Heading>
              </Fill>
              <Fill>
                  <Heading caps bgColor="white">
                      <Image width="230px" src={images.kopplin} />
                      <Text textColor="#333" size={2}>Sérgio Kopplin</Text>
                  </Heading>
              </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            o que é interface?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote style={{ fontSize: "3.5rem" }}>Interface é a conexão do dispositivo eletrônico com o usuário através de uma tela.</Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
            <Image width="430px" src={images.interface} />
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Layout>
            <Fill>
              <Heading caps bgColor="white">
                <Text textColor="#333" size={2}>desenvolvimento de software?</Text>
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote style={{ fontSize: "3.5rem" }}>Em uma definição simples e minimalista, são os 'programas' que usamos em nossos celulares e computadores, onde podemos interagir com ferramentas e pessoas.</Quote>
            <Cite>Wikipedia</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Layout>
            <Fill>
              <Heading caps bgColor="white">
                <Text textColor="#333" size={2}>e o que é o desenvolvedor?</Text>
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote style={{ fontSize: "3.5rem" }}>O desenvolvedor é o profissional que escreve os códigos para construir as aplicações.</Quote>
            <Cite>ITForum365</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Image width="930px" src={images.googleFont} />
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Image width="930px" src={images.google} />
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Image width="530px" src={images.developer} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Layout>
            <Fill>
              <Heading caps bgColor="white">
                <Text textColor="#333" size={2}>
                  e onde os desenvolvedores ficam?
                </Text>
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
            <Image width="1030px" src={images.devel} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Layout>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              <Text textColor="#333" size={2}>
                Voltando as interfaces
              </Text>
            </Heading>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" style={{ background: `url(${images.home}) no-repeat center center` }} />
        <Slide transition={["fade"]} bgColor="white" style={{ background: `url(${images.buscaVagas}) no-repeat center center` }} />
        <Slide transition={["fade"]} bgColor="secondary">
          <Layout>
            <Fill>
              <Heading caps bgColor="white">
                <Text textColor="#333" size={2}>Dividir o código em pequenos componentes para que eles possam ser sempre reaproveitados.</Text>
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Image width="100%" src={images.busca} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Image width="100%" src={images.buscaHighlight} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Layout>
            <Fill>
              <Heading caps bgColor="white">
                <Text textColor="#333" size={2}>O reaproveitamento de código através de componentes é ideal para que se tenha velocidade no desenvolvimento.</Text>
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Image width="530px" src={images.codar} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            dúvidas?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            é isso! obrigado.
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
