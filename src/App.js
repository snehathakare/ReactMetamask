import './App.css';
import Wallet from './components/Wallet';
import WalletEthers from './components/WalletEthers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wallet />
        <WalletEthers />
      </header>
    </div>
  );
}

export default App;
