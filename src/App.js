import './App.css';
import UseContextHooks from './components/hooks/useContextHooks';
import UseEffectHooks from './components/hooks/useEffectHooks';
import UseMemo from './components/hooks/useMemo';
import UseRefHooks from './components/hooks/useRefHooks';
import UseStateHooks from './components/hooks/useStateHooks';
import Provider from './provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <UseStateHooks />
        <UseEffectHooks />
        <UseMemo />
        <UseRefHooks />
        <UseContextHooks />
      </Provider>
    </div>
  );
}

export default App;
