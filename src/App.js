import * as S from "./styles";
import { Header } from "./components/Header";
import { SectionHome } from "./components/SectionHome";

function App() {
  return (
    <S.Container>
      <Header />
      <SectionHome />
    </S.Container>
  );
}

export default App;
