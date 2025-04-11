interface IProps {
  onClose: () => void
  videoUrl: string
}
const ModalDemo = (props: IProps) => {
  const { onClose, videoUrl } = props

  return (
    <div className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 z-50 p-10">
      <div className="absolute z-[-1] w-full h-full bg-slate-500 opacity-70" onClick={onClose}></div>
      <iframe
        width="1000"
        height="700"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default ModalDemo
