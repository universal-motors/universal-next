export default function LoadingComponent() {
  return (
    //isLoading &&
    <div className='fixed inset-0 flex items-center justify-center'>
      <img src='/assets/images/animatedcarloading.gif' width='200px' />
      <h6 className='animate-charcter'> Loading ...</h6>
    </div>
  );
}
