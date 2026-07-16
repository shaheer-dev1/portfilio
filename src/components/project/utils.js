/**
 * Normalizes mixed string/object case-study list items into a consistent shape.
 */
export function normalizeListItems(items, mapObject) {
  if (!Array.isArray(items) || items.length === 0) return []

  return items
    .map((item, index) => {
      if (typeof item === 'string') {
        return {
          id: `item-${index}`,
          title: item,
          description: null,
        }
      }

      if (item && typeof item === 'object') {
        return mapObject(item, index)
      }

      return null
    })
    .filter(Boolean)
}

export function hasText(value) {
  return typeof value === 'string' && value.trim().length > 0
}

export function hasItems(value) {
  return Array.isArray(value) && value.length > 0
}
