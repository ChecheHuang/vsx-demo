import toast from 'react-hot-toast'
import { MdOutlineContentCopy } from 'react-icons/md'

import { BaseButton } from '../common'

type CopyButtonProps = {
  copyText: string
  toastText?: string
}

const CopyButton = ({
  copyText,
  toastText = copyText + '複製成功',
}: CopyButtonProps) => {
  return (
    <BaseButton>
      <MdOutlineContentCopy
        onClick={() => {
          navigator.clipboard.writeText(copyText)
          toast(toastText)
        }}
      />
    </BaseButton>
  )
}

export default CopyButton
