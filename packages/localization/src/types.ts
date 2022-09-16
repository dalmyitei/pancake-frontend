<<<<<<< HEAD:packages/localization/src/types.ts
import { Language } from '@pancakeswap/uikit'
=======
import { ReactText } from 'react'
import { Language } from '@metaswap/uikit'
>>>>>>> 062525b1cf6e4c9801d9a96a091f669125692973:src/contexts/Localization/types.ts

import translations from './config/translations.json'

export type ContextData = {
  [key: string]: string | number
}

export interface ProviderState {
  isFetching: boolean
  currentLanguage: Language
}

export interface ContextApi extends ProviderState {
  setLanguage: (language: Language) => void
  t: TranslateFunction
}

// To support string literals and union of string
// https://stackoverflow.com/questions/61047551/typescript-union-of-string-and-string-literals
type MaybeObject = Record<never, never>
export type TranslationKey = keyof typeof translations | (string & MaybeObject)

export type TranslateFunction = (key: TranslationKey, data?: ContextData) => string
