import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// => Acessar valores do tema e guardar dentro de uma variavel.
type ThemeType = typeof defaultTheme

// => Criando uma tipagem para o modulo styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
