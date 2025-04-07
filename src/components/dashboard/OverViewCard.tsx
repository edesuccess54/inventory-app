import Card from '../Card'

const OverViewCard = ({
    children, 
    heading
}:{
    children: React.ReactNode,
    heading: string
}) => {
  return (
    <Card>
        <h1 className='text-[#383E49] text-xl'>{heading}</h1>
        {children}
    </Card>
  )
}

export default OverViewCard