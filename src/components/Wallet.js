import React, { useState } from 'react'

const Wallet = () => {
    const [currentAccount, setCurrentAccount] = useState(null)
    const [buttonText, setButtonText] = useState('Connect Wallet')
    const [accountBalance, setAccountBalance] = useState()
    const connectWallet = async () => {

        //check if wallet is installed
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0])
            setButtonText('Wallet Connected')
            getAccountBalance(accounts[0]);
        }
        else {
            // Show alert if Ethereum provider is not detected
            alert("Please install Metamask wallet");
        }

    }

    const getAccountBalance = async (account) => {
        const balance = await window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] });
        setAccountBalance(balance)
    }

    return (
        <div>
            <h3>Connect React to Metamask using window.ethereum methods</h3>
            <button onClick={connectWallet}>{buttonText}</button>
            {currentAccount && <div>
                <h5>Address:{currentAccount}</h5>
                <h5>Balance:{accountBalance}</h5>
            </div>}
        </div>
    )
}
export default Wallet
