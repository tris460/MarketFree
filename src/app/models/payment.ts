// payment.model.ts (crea un nuevo archivo para la interfaz o clase)
export interface PaymentInfo {
    cardNumber: number;
    cardHolder: string;
    expirationDate: string;
    cvv: number;
  }  

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
  