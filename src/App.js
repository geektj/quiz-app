import './App.scss';
import '../src/assets/styles/_index.scss';
import { Questions } from './components/Questions/questions';
import { Wrapper } from './context';
// import { Option } from './components/Option/option';

function App() {
  return (
    <Wrapper>
      <div className="App">
        <div className='container'>
          <div className='title'>Quiz Questions</div>
          <div className='overview-panel'>
            <div className='questions-panel'>
              <Questions />
              {/* <Option /> */}
            </div>
            <div className='selected-question-panel'>
              
            </div>
            
          </div>
            
        </div>

      </div>
    </Wrapper>
  );
}

export default App;
