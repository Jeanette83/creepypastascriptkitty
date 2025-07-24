
import { useParams } from "react-router";

export default function ArticleDetails() {
    const params = useParams()
    let articleData = null


    //faux database lookup by id
    if (params.id == '345') {
        articleData = {
            title: 'Witchy Candles',
            image : require('../images/candles.webp'),
            description: 'Candles can be used for a variety of spells depending on their color and...'
        }
    }
    if (params.id == '143') {
        articleData = {
            title: 'Witchy Runes',
            image : require('../images/runes.webp'),
            description: 'I was walking thru the gas one day and then I saw the coolest bit of....'
        }
    }
    if (params.id == '486') {
        articleData = {
            title: 'Po-Tay-Toes',
            image : require('../images/hobbit_hole.webp'),
            description: 'Have you ever been to the Shire? It is a beautiful place where simple hobbits...'
        }
    }


    return (
        <>
        {
            articleData != null ?
            <>
                <h2>{articleData.title}</h2>
                <img src={articleData.image} alt="A cool picture" width="500"/>
                <p>{articleData.description}</p>
            </>
            : ''
        }
        </>   
    )
}
