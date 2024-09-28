import mtg from 'mtgsdk'


async function getCard(){
    const result = await mtg.card.find(3)
    console.log(result.card) 
}


getCard()