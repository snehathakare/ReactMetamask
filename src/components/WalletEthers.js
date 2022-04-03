import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers';

const WalletEthers = () => {
    const [currentAccount, setCurrentAccount] = useState(null)
    const [buttonText, setButtonText] = useState('Connect Wallet')
    const [accountBalance, setAccountBalance] = useState()
    const [provider, setProvider] = useState()

    const connectWallet = async () => {
        if (window.ethereum && currentAccount == null) {
            setProvider(new ethers.providers.Web3Provider(window.ethereum))
            const accounts = await provider.send("eth_requestAccounts", []);
            console.log(accounts)
            setCurrentAccount(accounts[0])
            setButtonText('Wallet Connected')
        }
        else {
            console.log('Need to install MetaMask');
            alert('Please install MetaMask browser extension to interact');
        }
    }

    useEffect(() => {
        if (currentAccount) {
            provider.getBalance(currentAccount)
                .then(balanceResult => {
                    setAccountBalance(ethers.utils.formatEther(balanceResult));
                })
        };
    }, [currentAccount]);
    return (
        <div>
            <h3>Connect React to Metamask using ethers.js</h3>
            <button onClick={connectWallet}>{buttonText}</button>
            {currentAccount && <div>
                <h5>Address:{currentAccount}</h5>
                <h5>User Balance:{accountBalance}</h5>
            </div>}
        </div>
    )
}
export default WalletEthers