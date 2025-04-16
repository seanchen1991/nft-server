const express = require("express");
const cors = require("cors");
const Moralis = require("moralis").default;

require("dotenv").config({ path: ".env" });

const app = express();
const port = 3000;
const API_KEY = process.env.API_KEY;

app.use(cors());
app.use(express.json());

app.get("/fetchnfts", async (req, res) => {
  try {
    const { query } = req;

    console.log(`Got a query: ${query}`);

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address: query.address,
      chain: query.chain,
    });

    console.log(`Response: ${response}`);

    return res.status(200).json(response);
  } catch (e) {
    console.error(`Server error: ${e}`);
    return res.status(400).json();
  }
});

Moralis.start({
  apiKey: API_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log("Listening...");
  });
});
