export class Payment implements Payment {
    cardNumber: number;
    cardHolder: string;
    expirationDate: string;
    cvv: number;

    constructor() {
        this.cardNumber = 0
        this.cardHolder = '',
        this.expirationDate = '',
        this.cvv = 0
    }
  
  }
  