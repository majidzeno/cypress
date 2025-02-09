import type { AllCypressErrors } from './errors'

/**
 * A config validation result
*/
export interface ConfigValidationError {
  key: string
  type: string
  value: any
  list?: string
}

/**
 * An "error like" is an object which may or may-not be an error,
 * but contains at least a name & message, and probably a stack
 */
export interface ErrorLike {
  name: string
  message: string
  stack?: string
  // An error-like can have additional properties
  [key: string]: any
}

/**
 * An error originating from the @cypress/errors package,
 * includes the `type` of the error, the `originalError`
 * if one exists, and an isCypressError for duck-type checking
 */
export interface CypressError extends ErrorLike {
  messageMarkdown: string
  type: keyof typeof AllCypressErrors
  isCypressErr: boolean
  originalError?: CypressError | ErrorLike
  details?: string
  code?: string | number
  errno?: string | number
  stackWithoutMessage?: string
}

export interface ErrTemplateResult {
  message: string
  messageMarkdown: string
  details?: string
  originalError?: Error
}

export interface ClonedError {
  type: string
  name: string
  columnNumber?: string
  lineNumber?: string
  fileName?: String
  stack?: string
  message?: string
  [key: string]: any
}

export interface SerializedError {
  code?: string | number
  type?: string | number
  errorType?: string
  stack?: string
  annotated?: string
  message?: string
  name: string
  isCypressErr?: boolean
}
