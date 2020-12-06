import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./child.js";
import TimerComponent from "./timer";

function App() {
  const text = "인프런 수강생 여러분 화이팅!";
  const sayHello = function () {
    return <h3>인프런 강의 너무 좋아</h3>;
  };
  const sayHello2 = function () {
    alert("안녕하세요");
  };
  return (
    <div>
      <h1>안녕하세요!</h1>
      <h2>{text}</h2>
      {sayHello()}
      <div onClick={sayHello2}>클릭해주세요</div>
      <TimerComponent />
      <ChildComponent name="그랩" age={27} />
      <ChildComponent name="민수" age={25} />
      <ChildComponent name="철수" age={30} />
      <ChildComponent name="슬기" age={28} />
    </div>
  );
}

export default App;
