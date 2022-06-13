
import ListFilterSelect from './Select'

export default {
  title: 'List/Filter/Select',
  component: ListFilterSelect

}

const DefaultTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<ListFilterSelect v-bind="$props" />'
})
export const Default = DefaultTemplate.bind({})
Default.args = {
  filterby: [
    {
      id: 26,
      name: 'Банк Аверс',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/125/7w9vsLSpmfB9TwjTCuo6b2uyhat8chfoh93YLWiX.jpg'
    },
    {
      id: 25,
      name: 'СМП Банк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/135/u72zmkzoFLXclrBGBQsVEIXxi0eSB0EKt0uKgLQe.jpg'
    },
    {
      id: 24,
      name: 'ТАТСОЦБАНК',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/121/POr8MXcOZDKMvCwkVmz1tOxcypq4s8STNwUiYDVp.jpg'
    },
    {
      id: 23,
      name: 'Автоградбанк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/126/BwgIoBRLtoQAPnRJ37Dm2JVhGbHmFXetibEWx2C7.jpg'
    },
    {
      id: 22,
      name: 'Энергобанк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/123/PjNEidarGnkzIoBhcd3yVkvE5Peggip0idErtQ8B.jpg'
    },
    {
      id: 21,
      name: 'Ипотека 24',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/131/PGJYOjykbS4uFyduGExKLc9dPLk9JVPI2UHbMJXo.jpg'
    },
    {
      id: 20,
      name: 'Инвестторгбанк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/116/cXQbw2hFr1hBpFSuYCtAJXitnauBtTo1r8p5XVR3.jpg'
    },
    {
      id: 19,
      name: 'Банк БЖФ',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/127/4sLFwhfRA5W44RapMbGjhztTlvus8bcSs9BhYxwk.jpg'
    },
    {
      id: 18,
      name: 'Банк ЗЕНИТ',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/115/l3D2nNDUTiySr4kgb1IsIsyonFmhU1THFvHHhUyH.jpg'
    },
    {
      id: 17,
      name: 'Совкомбанк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/136/MY4ZsRVnJCrTy16P8N2K0mgYr8bGK11A80iB1Xt0.jpg'
    },
    {
      id: 16,
      name: 'Металлинвестбанк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/132/fCywtUS3QvoQIEZ8NcxhceXcDRrMBDhyc4DNLBhe.jpg'
    },
    {
      id: 15,
      name: 'Райффайзенбанк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/134/1BIMaEvE6OpGm2KbFfxGPvUQjXyHcVyefBcDTdlG.jpg'
    },
    {
      id: 14,
      name: 'Росбанк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/118/8HPO01B8WYwSV40bAJv92wRj1t31c64uKj2TeCHj.jpg'
    },
    {
      id: 13,
      name: 'Банк «УБРиР»',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/137/YxyfXwYNTXYygeg0a1cT7FJikCbcniVPKYWZsakw.jpg'
    },
    {
      id: 12,
      name: 'ЮниКредит Банк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/124/wPaYe5ADA6CqAdOYYQmonvB2Dp5o8SNHrB4hXCin.jpg'
    },
    {
      id: 11,
      name: 'Абсолют Банк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/172/AbuvP79ytOT92MIBcr3sX4D3dh57yfoggtLer1mR.jpg'
    },
    {
      id: 10,
      name: 'Банк Уралсиб',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/122/o5jZqnygiWbKzPXA4oIRP4X60pdX2DdCo648EmNo.jpg'
    },
    {
      id: 9,
      name: 'Россельхозбанк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/119/mB5dPniGBUr78zpeoqAY9gLrK4XCADkjyf0lMUp3.jpg'
    },
    {
      id: 8,
      name: 'Промсвязьбанк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/117/MRu8cFR847KipExpYHgbRS9jWiLcESW0ka0s0Uza.jpg'
    },
    {
      id: 7,
      name: 'Газпромбанк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/129/LKN28zVfILSlPocmUw6KalhGiSWvViVn9xJF84xy.jpg'
    },
    {
      id: 6,
      name: 'Банк Открытие',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/133/hMBXOIMg1LAGqVCThyw9mBJTQIsGJbQTJQcHztmZ.jpg'
    },
    {
      id: 5,
      name: 'СберБанк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/120/2l78RyPBRZ5KVjInsf9ZIkdPTuYPQ9Zbj8yo1qtr.jpg'
    },
    {
      id: 4,
      name: 'Банк ВТБ',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/128/AplF7zWJCcJmnJN4ADhicVwkZT2xDNTRD58R6Ozm.jpg'
    },
    {
      id: 3,
      name: 'Банк ДОМ.РФ',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/130/8a9WhHRQXBw2vDsg1042ud1Ewjbg9iSdTxW2rK3U.jpg'
    },
    {
      id: 2,
      name: 'Ак Барс Банк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/113/HVsSPA0JBTcnJjgga2Jnvpffh26Dwl2BBY0J0wJK.jpg'
    },
    {
      id: 1,
      name: 'Альфа-Банк',
      logo: 'https://api-calc.demo.ipotech.su/storage/banks/logo/114/n5jQ0CZdUG9iRlrso7KHHPZ6NOdLl7lQdr10GmHq.jpg'
    }
  ]
}
