export const Spinner = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-screen backdrop-blur-sm'>
      <div className="h-full w-full flex flex-col justify-center items-center gap-4">
        <div className='h-12 w-12 border-[8px] border-l-cyan-600/50 rounded-full animate-spin'></div>
        <h1 className="text-2xl font-semibold text-gray-800">Loading...</h1>
      </div>
    </div>
  )
}