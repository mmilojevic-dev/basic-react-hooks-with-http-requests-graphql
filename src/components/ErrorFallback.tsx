import { Label } from '@radix-ui/react-label'
import { FallbackProps } from 'react-error-boundary'

import {
  ERROR_BOUNDARY_ERROR_LABEL_TEXT,
  ERROR_BOUNDARY_RESET_BUTTON_TEXT
} from '@/config/app'

import { Button } from './ui/button'

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="flex flex-col space-y-5">
      <Label role="alert">{ERROR_BOUNDARY_ERROR_LABEL_TEXT}</Label>
      <Label className="text-red-500">
        <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
      </Label>
      <Button
        className="inline-block"
        variant="destructive"
        onClick={resetErrorBoundary}
      >
        {ERROR_BOUNDARY_RESET_BUTTON_TEXT}
      </Button>
    </div>
  )
}
