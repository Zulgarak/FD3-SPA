//юзануть fakerjs
// export interface Car {
//   brand: string;
//   model: string;
//   year: number;
//   color: string;
//   amountDoors: number;
//   bodyType: string;
//   driveType: string;
//   transmission: string;
//   engineType: string;
//   engineCapacity: number;
//   condition: string;
//   mileage: number;
//   customs: boolean;
//   price: number;
//   description: string;
//   images: string[];
//   equipment?: string;
// }
export interface Car {
  brand: string;
  year: number;
  price: number;
  img: string;
  model?: string;
  description?: string;
  images?: string[];
  equipment?: string;
  id?: string;
}
