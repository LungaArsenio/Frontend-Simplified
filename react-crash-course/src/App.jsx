import './App.css';
import Todo from './components/Todo';
import Title from './components/Title';
import Modal from './components/Modal'

function App() {
  return (
    <>
      <Title />
      <div className="todo__wrapper" >
      <Todo title="Finish Frontend Simplified" paragraph="Code along with Frontend Simplified"/>
      <Todo title="Land a $100k job" paragraph="Finish every interview question and apply to 100 jobs "/>
      <Todo title ="The Real World " paragraph="Just enjoy the results" />
      </div>
      <Modal question="Are you sure?" />
    </>
  );
}

export default App;
