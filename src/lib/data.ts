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
      },
      {
        id: 2,
        title: 'Advanced',
        images: advanced,
        price: {
          monthly: 12,
          yearly: 120
        },
      },
      {
        id: 3,
        title: 'Pro',
        images: pro,
        price: {
          monthly: 15,
          yearly: 150
        },
      },
    ],
    addon: [
      {
        id: 4, name: 'onlineService' as const, title: 'Online service', description: 'Access to multiplayer games', price: {
          monthly: 1,
          yearly: 10
        }
      },
      {
        id: 5, name: 'largerStorage' as const, title: 'Larger storage', description: 'Extra 1TB of cloud save', price: {
          monthly: 2,
          yearly: 20
        }
      },
      {
        id: 6, name: 'customizableProfile' as const, title: 'Customizable Profile', description: 'Custom theme on your profile', price: {
          monthly: 2,
          yearly: 20
        }
      },
    ]
  },
]