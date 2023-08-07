interface IHertaComponent {
  id: string
  name: string
  size: number
  rotation: boolean
}

interface IShopItem {
  id: number;
  name: string;
  price: number;
  cps: number;
  emitName: string;
  src: string;
  css: string;
  wrapperDiv?: string;
}
