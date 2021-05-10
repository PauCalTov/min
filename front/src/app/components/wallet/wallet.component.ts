import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';

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

}
