import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Wallet } from "../models/wallet";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  URL_API = "http://localhost:4000/api/wallets"

  form_user: Wallet = {
    nombre: "",
    moneda: "",
    direccion: "",
    saldo: "",
    valor_inicial: "",
    valor_actual: ""
  };
  
  wallet : Wallet[];

  getWallets() {
    return this.http.get<Wallet[]>(this.URL_API);
  }

  createWallet(wallet: Wallet) {
    return this.http.post(this.URL_API, wallet);
  }

  updateWallet(wallet: Wallet){
    // console.log("llego")
    return this.http.put(`${this.URL_API}/${wallet._id}`, wallet);
  }

  deleteWallet(_id: string){
    // return this.http.delete(this.URL_API + "/" + _id) son lo mismo
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
