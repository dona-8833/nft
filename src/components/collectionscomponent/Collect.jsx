import CollectionSearch from './CollectionSearch'

function Collect() {
  return (
    <div className='flex items-center justify-center px-2 my-10 flex-col'>
        <h1 className='md:text-4xl text-2xl text-center font-medium'>Your Gateway to <span className='font-bold text-secondary'>Smart</span>  NFT Collecting</h1>
        <CollectionSearch/>
    </div>
  )
}

export default Collect