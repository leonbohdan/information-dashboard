// import { h } from 'vue'
// import type { IconSet, IconAliases, IconProps } from 'vuetify'
import type { IconAliases } from 'vuetify'
import { aliases as defaultAliases } from 'vuetify/iconsets/mdi'
import closesvg from '~/assets/icons/close.svg'

const aliases: IconAliases = {
  ...defaultAliases,
  closesvg
}

// const aliases: IconAliases = {
//   collapse: '...',
//   complete: '...',
//   cancel: '...',
//   close: '...',
//   delete: '...',
//   clear: '...',
//   success: '...',
//   info: '...',
//   warning: '...',
//   error: '...',
//   prev: '...',
//   next: '...',
//   checkboxOn: '...',
//   checkboxOff: '...',
//   checkboxIndeterminate: '...',
//   delimiter: '...',
//   sort: '...',
//   expand: '...',
//   menu: '...',
//   subgroup: '...',
//   dropdown: '...',
//   radioOn: '...',
//   radioOff: '...',
//   edit: '...',
//   ratingEmpty: '...',
//   ratingFull: '...',
//   ratingHalf: '...',
//   loading: '...',
//   first: '...',
//   last: '...',
//   unfold: '...',
//   file: '...',
//   plus: '...',
//   minus: '...'
// }

// const custom: IconSet = {
//   component: (props: IconProps) => h(...),
// }

export { aliases }
