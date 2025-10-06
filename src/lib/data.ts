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
        id: 1, name: 'online-service', title: 'Online service', description: 'Access to multiplayer games', price: {
          monthly: 1,
          yearly: 10
        }
      },
      {
        id: 2, name: 'larger-storage', title: 'Larger storage', description: 'Extra 1TB of cloud save', price: {
          monthly: 2,
          yearly: 20
        }
      },
      {
        id: 3, name: 'custom-profile', title: 'Customizable Profile', description: 'Custom theme on your profile', price: {
          monthly: 2,
          yearly: 20
        }
      },
    ]
  },
]