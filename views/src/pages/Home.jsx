//this badboy shows up as "<Outlet />" in Router.jsx
export default function Home() {
    return (
        <>
            <section>
                <ul className="articleBox">
                    <article>
                        <img className="articleImage" src={require('../images/runes.webp')} alt="Witchy Runes"/>
                        <a href="/article/143" className="articleLink">Be a good witch.</a>
                        <p className='description/143'>I was walking thru the gas one day and then I saw the coolest bit of....</p>
                    </article>
                    <article>
                        <img className="articleImage" src={require('../images/hobbit_hole.webp')} alt="Witchy Runes"/>
                        <a href="/article/486" className="articleLink">Po-Tay-Toes</a>
                        <p className='description'>Have you ever been to the Shire? It is a beautiful place where simple hobbits...</p>
                    </article>
        
                    <article>
                        <img className="articleImage" src={require('../images/candles.webp')} alt="Witchy Candles"/>
                        <a href="/article/345" className="articleLink">Witchy Candles</a>
                        <p className='description'>Candles can be used for a variety of spells depending on their color and...</p>
                    </article>
                    <article>
                        <img className="articleImage" src={require('../images/spooky_cauldrons.webp')} alt="Witchy Cauldrons"/>
                        <a href="/article/111" className="productLink">Witchy Cauldrons</a>
                        <p className='description'>Cook up your potions girlies, we ride at dawn, together and...</p>
                    </article>
                    <article>
                        <img className="articleImage" src={require('../images/potions.webp')} alt="Witchy Potions"/>
                        <a href="/article/999" className="productLink">Witchy Potions</a>
                        <p className='description'>Potions for killing of men who mean you harm...</p>
                    </article>
                    <article>
                        <img className="articleImage" src={require('../images/witch_aesthetic.webp')} alt="Witchy Stuff Yo"/>
                        <a href="/article/920" className="productLink">Witchy Stuff Yo</a>
                        <p className='description'>Pippin likes this one in particular, her favorite is the one...</p>
                    </article>
                </ul>
            </section>
        </>
    )
}




     
