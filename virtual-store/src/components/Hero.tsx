
function Hero({Primero,segundo}:{Primero:string, segundo:string}) {
  return (
    <>
      <section className="h-[200px] bg-cover bg-top-center flex justify-center bg-[url('.././hero_bg.png')] " >
        <article className= "w-[1080px] flex flex-col items-start justify-center pl-[0px,20px]    " >
          <span className="text-white font-bold  text-3xl leading-7 pt-3 pb-3 ml-3">{Primero}</span>
          <span className="text-white font-bold text-6xl leading-7 ml-3">{segundo}</span>
        </article>
      </section>
 </>
  );
}

export default Hero

