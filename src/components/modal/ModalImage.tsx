import Image from 'next/image'

interface IProps {
  onClose: () => void
  image: any
}
const ModalImage = (props: IProps) => {
  const { onClose, image } = props

  return (
    <div className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 z-50 p-10">
      <div className="absolute z-[-1] w-full h-full bg-slate-500 opacity-70" onClick={onClose}></div>
      <Image data-toggle="modal" className="rounded-lg w-[800px] object-cover" src={image} alt="profileImg" />
    </div>
  )
}

export default ModalImage
