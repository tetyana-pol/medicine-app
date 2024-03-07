class Drug {
  count: number;
  idDrug: number;
}

export class CreateOrderDto {
  name: string;
  email: string;
  phone: string;
  adress: string;
  drugs: Drug[];
}

export class CreateOrderDBDto {
  name: string;
  email: string;
  phone: string;
  adress: string;
  count: number;
  idDrug: number;
}
