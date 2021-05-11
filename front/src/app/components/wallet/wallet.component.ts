import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';
import { NgForm } from '@angular/forms';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(public walletService: WalletService) { }

  ngOnInit(): void {
    this.getWallets();
  }

  editWallet(wallet: Wallet) {
    // console.log(wallet)
    this.walletService.form_wallet = wallet;
    this.getWallets();
  }

  getWallets() {
    this.walletService.getWallets().subscribe(
      res => {
        console.log(res)
        this.walletService.wallet = res;
        console.log(this.walletService)
      },
      err => console.error(err)
    );
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  deleteWallet(id: string) {
    if (confirm("Seguro que lo quieres borrar?")) {
      this.walletService.deleteWallet(id).subscribe(
        res => {
          // console.log(res)
          this.getWallets();
        },
        err => console.error(err)
      );
    }
  }

  addWallet(form: NgForm) {
    console.info(form.value)
    if (form.value._id) {
      this.walletService.updateWallet(form.value).subscribe(
        res => {
          this.getWallets();
          form.reset();
        },
        err => console.log(err)
      );
    }
    else {
      this.walletService.createWallet(form.value).subscribe(
        res => {
          this.getWallets();
          form.reset();
        },
        err => console.log(err)
      );
    }
  }

}
