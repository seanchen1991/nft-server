## Arty NFT Gallery Server

This application is a tiny Express webserver that serves instances up instances of the ArtyNFT via the `fetchnft` endpoint. It is hosted at [https://render.com]() and can be queried from the terminal by running
```
curl "https://nft-server-ojnx.onrender.com/fetchnfts?address={YOUR_WALLET_ADDRESS}&chain={CHAIN_ID}
```
Note that the server only fetches NFTs minted on the [ArtyNFT contract](https://sepolia.etherscan.io/address/0x04fb34223fb055c92eedcf5a3988822ce0518f8f)
on the Sepolia network.
