import arcane from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'

export const DATA = [
  {
    plan: [
      {
        id: 1,
        title: 'Arcane',
        images: arcane,
        price: {
          monthly: 9,
          yearly: 90
        },
        selected: false
      },
      {
        id: 2,
        title: 'Advanced',
        images: advanced,
        price: {
          monthly: 12,
          yearly: 120
        },
        selected: false
      },
      {
        id: 3,
        title: 'Pro',
        images: pro,
        price: {
          monthly: 15,
          yearly: 150
        },
        selected: false
      },

    ]
  },
]