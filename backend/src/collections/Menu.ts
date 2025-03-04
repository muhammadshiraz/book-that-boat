import type { CollectionConfig } from 'payload'

export const Menu: CollectionConfig = {
    slug: 'menu', // ✅ Slug must match this
    access: { read: () => true },
    fields: [
      {
        name: 'logo',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
      {
        name: 'menu_items',
        type: 'array',
        required: true,
        fields: [
          { name: 'label', type: 'text', required: true },
          { name: 'link', type: 'text', required: true },
        ],
      },
      {
        name: 'book_now_button',
        type: 'group',
        fields: [
          { name: 'label', type: 'text', required: true, defaultValue: 'Book Now' },
          { name: 'link', type: 'text', required: true, defaultValue: '/book-now' },
        ],
      },
    ],
  }
  