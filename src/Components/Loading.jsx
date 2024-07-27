import LoadingImg from '../assets/ripple.svg'

export const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img className='px-8 w-[120px]' src={LoadingImg} alt="loading image" />
    </div>
  )
}
