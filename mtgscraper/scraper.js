import mtg from 'mtgsdk'
import fs from 'fs'

function cb(e) {}

// get types
let types = []
mtg.type.all()
    .on('data', function (type) {
        types.push(type)
    })
    .on('end', function () {
        const json = JSON.stringify(types);
        fs.writeFile(`data/types.json`, json, 'utf8', cb);
        console.log('Finished retrieving all types.');
    });


//  get subtypes
let subTypes = []
mtg.subtype.all()
    .on('data', function (subtype) {
        subTypes.push(subtype)
    })
    .on('end', function () {
        const json = JSON.stringify(subTypes);
        fs.writeFile(`data/subtypes.json`, json, 'utf8', cb);
        console.log('Finished retrieving all subtypes.');
    });

    //  get supertypes
let supertypes = []
mtg.supertype.all()
    .on('data', function (supertype) {
        supertypes.push(supertype)
    })
    .on('end', function () {
        const json = JSON.stringify(supertypes);
        fs.writeFile(`data/supertypes.json`, json, 'utf8', cb);
        console.log('Finished retrieving all supertypes.');
    });

//  get formats
let sets = []
mtg.set.all()
    .on('data', function (set) {
        sets.push(set)
    })
    .on('end', function () {
        const json = JSON.stringify(sets);
        fs.writeFile(`data/sets.json`, json, 'utf8', cb);
        console.log('Finished retrieving all sets.');
    });

// get cards
mtg.card.all()
.on('data', function (card) {
    const json = JSON.stringify(card); //convert it back to json
    fs.writeFile(`data/cards/${card.id}.json`, json, 'utf8', cb); 
}) .on('end', function () {

    console.log('Finished retrieving all cards.');
});

// import pg from "pg";
// import dotEnv from "dotenv";
// dotEnv.config();

// const { Pool } = pg;

// export const pool = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
//     ssl: {
//         rejectUnauthorized: false, // Only use this if you trust the server
//     },
// });




// async function insertCard(card) {

//     console.log(card)

//     const query = `
//         INSERT INTO cards (
//             id, name, mana_cost, cmc, colors, color_identity, type, types, subtypes,
//             rarity, set_code, set_name, text, artist, number, power, toughness, layout,
//             multiverse_id, image_url, variations, foreign_names, printings,
//             original_text, original_type, legalities
//         ) VALUES (
//             $1, $2, $3, $4, $5, $6, $7, $8, $9,
//             $10, $11, $12, $13, $14, $15, $16, $17, $18,
//             $19, $20, $21, $22, $23,
//             $24, $25, $26
//         )
//     `;

//     const values = [
//         card.id, card.name, card.manaCost, card.cmc, card.colors,
//         card.colorIdentity, card.type, card.types, card.subtypes,
//         card.rarity, card.set, card.setName, card.text,
//         card.artist, card.number, card.power, card.toughness,
//         card.layout, card.multiverseid, card.imageUrl,
//         null, // variations
//         JSON.stringify(card.foreignNames), // Convert foreign names to JSON string
//         JSON.stringify(card.printings), // Convert printings to JSON string
//         card.originalText, card.originalType, JSON.stringify(card.legalities) // Convert legalities to JSON string
//     ];

//     try {
//         const res = await pool.query(query, values);
//         console.log('Insert successful:', res);
//     } catch (err) {
//         console.error('Error inserting data:', err);
//     } finally {
//         // await client.end();
//     }
// }



