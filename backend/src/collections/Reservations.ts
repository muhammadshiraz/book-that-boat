import type { CollectionConfig } from 'payload'

export const Reservations: CollectionConfig = {
  slug: 'reservations',
  fields: [
    { name: 'boat', type: 'relationship', relationTo: 'boats', required: true },
    { name: 'user', type: 'relationship', relationTo: 'users', required: true },
    { name: 'start_time', type: 'date', required: true },
    { name: 'end_time', type: 'date', required: true },
    { name: 'status', type: 'select', options: ['pending', 'confirmed', 'cancelled'], defaultValue: 'pending' }
  ]
};