import { h } from 'vue'
import type { IconSet, IconAliases, IconProps } from 'vuetify'
import { aliases as defaultAliases, mdi } from 'vuetify/iconsets/mdi'

import close from '~/assets/icons/close.svg?component'
import arrowDownTray from '~/assets/icons/arrow-down-tray.svg?component'

const aliases: IconAliases = {
  ...defaultAliases,
  close: close,
  'arrow-down-tray': arrowDownTray,
  radioOn: close
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

const qi: IconSet = {
  // component: (props: IconProps) => h('icon', { ...props, class: '' })
  // component: (props: IconProps) => h('svg', [closeSvg, arrowDownTray])
  component: (props: IconProps) => h('i', { ...props }, [h(close), h(arrowDownTray)])
}

export { aliases, qi, mdi }
