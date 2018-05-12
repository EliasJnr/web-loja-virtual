import { Product } from 'app/api/model/Product';

export class ProductModel implements Product {

  codigo: string;
  descricao: string;
  id: number;
  nome: string;
  urlImagem: string;
  valorCompra: number;
  valorVenda: number;

  constructor() {
    this.codigo = undefined;
    this.descricao = undefined;
    this.id = undefined;
    this.nome = undefined;
    this.urlImagem = undefined;
    this.valorCompra = undefined;
    this.valorVenda = undefined;
  }
}
