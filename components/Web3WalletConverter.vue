<template>
    <div class="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Web3 Wallet Converter (ethers 6.x improved)</h2>
      <div class="space-y-4">
        <div>
          <input
            v-model="mnemonic"
            placeholder="Enter mnemonic phrase"
            class="w-full p-2 border rounded"
          />
          <button @click="mnemonicToPrivateKey" class="mt-2 bg-blue-500 text-white p-2 rounded">
            Mnemonic to Private Key
          </button>
        </div>
        <div>
          <input
            v-model="privateKey"
            placeholder="Enter private key"
            class="w-full p-2 border rounded"
          />
          <button @click="privateKeyToMnemonic" class="mt-2 bg-blue-500 text-white p-2 rounded">
            Private Key to Mnemonic
          </button>
        </div>
        <div v-if="result" class="text-green-600">
          {{ result }}
        </div>
        <div v-if="error" class="text-red-500">
          {{ error }}
        </div>
      </div>
      <div class="t-12 c-#999">
        <p>Tips:</p>
        <p>Not all private keys can be converted back to a mnemonic. This is because the mnemonic is usually used to generate a series of private keys (HD wallets), whereas a single private key may be generated independently without an associated mnemonic.</p>
        <p>并非所有的私钥都可以转换回助记词。这是因为助记词通常用于生成一系列私钥（HD 钱包），而单个私钥可能是独立生成的，没有相关的助记词</p>
        <p>すべての秘密鍵がニーモニックに変換できるわけではない。 ニーモニックは通常、一連の秘密鍵（HDウォレット）を生成するために使用される。</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { ethers } from 'ethers'
  
  const mnemonic = ref('')
  const privateKey = ref('')
  const error = ref('')
  const result = ref('')
  
  const mnemonicToPrivateKey = async () => {
    try {
      const wallet = ethers.HDNodeWallet.fromPhrase(mnemonic.value)
      console.log(wallet);
      privateKey.value = wallet.privateKey
      result.value = `Private Key: ${wallet.privateKey}`
      error.value = ''
    } catch (err) {
      error.value = 'Invalid mnemonic phrase'
      result.value = ''
    }
  }
  
  const privateKeyToMnemonic = async () => {
    try {
      // 尝试创建 HDNodeWallet
      const wallet = ethers.HDNodeWallet.fromExtendedKey(privateKey.value)
      if (wallet.mnemonic) {
        mnemonic.value = wallet.mnemonic.phrase
        result.value = `Mnemonic: ${wallet.mnemonic.phrase}`
      } else {
        // 如果无法获取助记词，至少显示地址
        const simpleWallet = new ethers.Wallet(privateKey.value)
        result.value = `Unable to derive mnemonic. Wallet address: ${simpleWallet.address}`
      }
      error.value = ''
    } catch (err) {
      // 如果不是扩展私钥，尝试创建普通钱包
      try {
        const simpleWallet = new ethers.Wallet(privateKey.value)
        result.value = `Valid private key. Wallet address: ${simpleWallet.address}`
        error.value = 'Unable to derive mnemonic from this private key'
      } catch (innerErr) {
        error.value = 'Invalid private key'
        result.value = ''
      }
    }
  }
  </script>