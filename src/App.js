import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';



function App() {
  let name = " 수빈수빈";
  const number = 5;
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4, 
    e: 5,

  }

  return (
    <Container>
      <div>
        <MyHeader />
        <h2>안녕안녕{name}</h2>
        <p id="bold">React.js의 세계로 오신것을 환영합니다</p>
        <p id="bold">{number}는 : {number % 2 === 0 ? "짝수" : "홀수"}</p>
        <Counter {...counterProps} />
        <MyFooter />
      </div>
    </Container>
  );
};



export default App;
