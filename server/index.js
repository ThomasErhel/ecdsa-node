const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const { recoverPublicKey } = require("ethereum-cryptography/secp256k1");

app.use(cors());
app.use(express.json());

const balances = {
  "0396a56bcabd859fc0ae920af3f03439d0ed471b263be17ee7083a6c3390130707": 100, // Mallory
  "02dde78c4e9065cdba42cc8232a01e89d8cc34b2db033168515a445da366484196": 50, // Alice
  "033473306d84b0cc9ff894e574f595c4f6ca0ed1ea73504111a2b4941db05e137b": 75, // Bob
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount, signature, messageHash } = req.body;

  try {
    const publicKey = recoverPublicKey(
      Buffer.from(messageHash, "hex"),
      signature
    );
    const senderAddress = publicKeyToAddress(publicKey);

    if (sender !== senderAddress) {
      return res.status(400).send({ message: "Invalid signature!" });
    }
  } catch (err) {
    return res.status(400).send({ message: "Invalid signature!" });
  }

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
