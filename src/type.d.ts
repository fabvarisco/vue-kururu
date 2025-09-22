type shopItemKey = 'spiningHerta' | 'floatingHerta' | 'screenSaverHerta' | 'giantHerta'

type Item = {
  name: string
  cps: number
  level: number
  price: number
}

interface IHertaComponent {
  id: string
  name: string
  size: number
  rotation: boolean
}

interface IShopItem {
  id: number
  name: string
  key: shopItemKey
  emitName: string
  src: string
  css: string
  wrapperDiv?: string
}

interface IPlayerShopItems {
  spiningHerta: Item
  giantHerta: Item
  floatingHerta: Item
  screenSaverHerta: Item
}

interface IPlayer {
  username: string
  coins: number
  cps: number
  dps: number
  idps: string
  shopItems: IPlayerShopItems
}
