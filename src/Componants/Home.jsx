const Home = () => {
    return (
        <div className="w-full flex  sm:flex-row flex-col  text-white  pt-0 ">
        <div className="sm:bg-[url('/Home.jpg')] bg-cover flex  sm:flex-row flex-col justify-around w-full  items-start sm:pt-24 sm:pb-96 pt-10 pb-52 bg-[url('/Home2.jpg')]  ">
            <p className="sm:text-7xl text-4xl font-extrabold  sm:w-[48rem]  flex items-center font-Arabic text-shadow text-white ">اكتشف أفضل البرامج لشراء سيارتك بأسعار لا تقبل المنافسة!</p>
        <div className=" rounded-xl p-5 items-start flex flex-col gap-10 w-96 ">
          <li className="flex flex-wrap gap-3 text-shadow">
            <ul className="text-2xl font-bold">شراء ..</ul>
            <ul className="text-2xl font-bold">تقسيط ..</ul>
            <ul className="text-2xl font-bold">قرض ..</ul>
            <ul className="text-2xl font-bold">أمان</ul>
           
          </li>
            
        </div>
        </div>
        
        </div>
    )
}

export default Home
