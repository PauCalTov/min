const walletCtrl = {}

const Wallet = require('../models/Wallet')

walletCtrl.getWallets = async (req, res) => {
    const wallets = await Wallet.find()
    res.json(wallets)
}
walletCtrl.getWallet = async (req, res) => {    
    const wallet = await Wallet.findById(req.params.id)
    res.send(wallet)
}
walletCtrl.createWallet = async (req, res) => {
    const newWallet = new Wallet(req.body)
    await newWallet.save()
    res.send({status: 201, message: 'Wallet creado'})
}
walletCtrl.editWallet = async (req, res) => {
    await Wallet.findByIdAndUpdate(req.params.id, req.body)
    res.send({status: 204, message:"Wallet actualitzat"})
}
walletCtrl.deleteWallet = async (req, res) => {
    await Wallet.findByIdAndDelete(req.params.id)
    res.send({status: 204, message:"Wallet eliminat"})
}


module.exports = walletCtrl