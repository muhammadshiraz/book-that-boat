import type { CollectionConfig } from 'payload'

export const Boats: CollectionConfig = {
  slug: 'boats',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'description', type: 'textarea' },
    { name: 'price_per_hour', type: 'number', required: true },
    { name: 'capacity', type: 'number', required: true },
    { name: 'location', type: 'text', required: true },
    { name: 'media', type: 'upload', relationTo: 'media' },
    {
      name: 'available_times',
      type: 'array',
      fields: [
        { name: 'start_time', type: 'date', required: true },
        { name: 'end_time', type: 'date', required: true },
      ],
    },
  ],
}
