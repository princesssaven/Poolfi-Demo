async function main() {
  const [{ Keypair, Asset, TransactionBuilder, Horizon, Networks, Operation }, fs] =
    await Promise.all([import('@stellar/stellar-sdk'), import('node:fs')]);
  const env = fs
    .readFileSync('.env.local', 'utf-8')
    .split('\n')
    .find((line) => line.startsWith('STELLAR_SECRET_KEY='));
  const secret = env ? env.split('=')[1].replace(/"/g, '') : null;
  const server = new Horizon.Server('https://horizon-testnet.stellar.org');
  if (!secret) throw new Error('STELLAR_SECRET_KEY not found in .env.local');

  const sourceKeypair = Keypair.fromSecret(secret);
  const sourcePublicKey = sourceKeypair.publicKey();

  console.log('Loading account:', sourcePublicKey);
  const account = await server.loadAccount(sourcePublicKey);

  // We use one of the USDC testnet issuers
  const usdcIssuer = 'GA2H6UJYXUBWXODCJIBLTBMRIPMVBPWOW7IRJLDC65HE5ACOLVWQFKFE';
  
  try {
    Keypair.fromPublicKey(usdcIssuer);
  } catch(e) {
    console.error("Invalid issuer address. Let's try the other one.", e.message);
    process.exit(1);
  }

  const usdcAsset = new Asset('USDC', usdcIssuer);

  console.log('Building trustline transaction for USDC...');
  const transaction = new TransactionBuilder(account, {
    fee: '10000',
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      Operation.changeTrust({
        asset: usdcAsset,
      })
    )
    .setTimeout(30)
    .build();

  transaction.sign(sourceKeypair);

  console.log('Submitting transaction...');
  try {
    const response = await server.submitTransaction(transaction);
    console.log('Success! View transaction at:', response._links.transaction.href);
  } catch (error) {
    console.error('Something went wrong:', error.response ? JSON.stringify(error.response.data, null, 2) : error);
  }
}

main().catch(console.error);
