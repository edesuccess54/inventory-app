import Spinner from '@/components/Spinner/Index'

const Loading = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Spinner variant='pageLoad' size='lg' color='primary' />
    </div>
  )
}

export default Loading