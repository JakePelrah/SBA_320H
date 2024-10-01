import { createContext, useContext, useState, useEffect } from "react";


const MTGContext = createContext()
export const useMTG = () => useContext(MTGContext)

export default function MTGProvider({ children }) {
    const [cards, setCards] = useState([
        {
            "id": "0001e0d0-2dcd-5640-aadc-a84765cf5fc9",
            "name": "Goblin King",
            "mana_cost": "{1}{R}{R}",
            "cmc": 3,
            "colors": [
                "R"
            ],
            "color_identity": [
                "R"
            ],
            "type": "Creature — Goblin",
            "types": [
                "Creature"
            ],
            "subtypes": [
                "Goblin"
            ],
            "rarity": "Rare",
            "set": "3ED",
            "set_name": "Revised Edition",
            "text": "Other Goblins get +1/+1 and have mountainwalk.",
            "flavor": "To become king of the Goblins, one must assassinate the previous king. Thus, only the most foolish seek positions of leadership.",
            "artist": "Jesper Myrfors",
            "number": "155",
            "layout": "normal",
            "multiverseid": 1296,
            "image_url": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=1296&type=card",
            "original_text": "All Goblins in play gain mountainwalk and +1/+1 while this card remains in play.",
            "original_type": "Summon - Lord",
            "printings": [
                "10E",
                "2ED",
                "30A",
                "3ED",
                "4BB",
                "4ED",
                "5ED",
                "6ED",
                "7ED",
                "8ED",
                "9ED",
                "ATH",
                "CED",
                "CEI",
                "FBB",
                "LEA",
                "LEB",
                "PW24",
                "SLD",
                "SUM"
            ],
            "legalities": [
                {
                    "format": "Commander",
                    "legality": "Legal"
                },
                {
                    "format": "Duel",
                    "legality": "Legal"
                },
                {
                    "format": "Legacy",
                    "legality": "Legal"
                },
                {
                    "format": "Modern",
                    "legality": "Legal"
                },
                {
                    "format": "Oathbreaker",
                    "legality": "Legal"
                },
                {
                    "format": "Oldschool",
                    "legality": "Legal"
                },
                {
                    "format": "Penny",
                    "legality": "Legal"
                },
                {
                    "format": "Predh",
                    "legality": "Legal"
                },
                {
                    "format": "Premodern",
                    "legality": "Legal"
                },
                {
                    "format": "Vintage",
                    "legality": "Legal"
                }
            ],
            "rulings": [
                {
                    "date": "2005-08-01",
                    "text": "Goblin King now has the Goblin creature type and its ability has been reworded to affect *other* Goblins. This means that if two Goblin Kings are on the battlefield, each gives the other a bonus."
                }
            ],
            "foreign_names": [
                {
                    "name": "Goblinkönig",
                    "text": "Alle Goblins erhalten +1/+1 und die Fähigkeit Gebirgstarnung.",
                    "type": "Beschwörung eines Herrschers",
                    "flavor": null,
                    "language": "German",
                    "identifiers": {
                        "scryfallId": "b391889c-3468-4114-9d62-55bd873ad328"
                    },
                    "multiverseid": null
                },
                {
                    "name": "Roi des gobelins",
                    "flavor": null,
                    "language": "French",
                    "identifiers": {
                        "scryfallId": "fec9eed2-9269-4279-becd-b23a30596ee6"
                    },
                    "multiverseid": null
                },
                {
                    "name": "Re dei Goblin",
                    "flavor": null,
                    "language": "Italian",
                    "identifiers": {
                        "scryfallId": "fb74bcc5-3ba5-489f-a942-7a13fa865048"
                    },
                    "multiverseid": null
                }
            ]
        },
        {
            "id": "0005d268-3fd0-5424-bc6b-573ecd713aa1",
            "name": "War Priest of Thune",
            "mana_cost": "{1}{W}",
            "cmc": 2,
            "colors": [
                "W"
            ],
            "color_identity": [
                "W"
            ],
            "type": "Creature — Human Cleric",
            "types": [
                "Creature"
            ],
            "subtypes": [
                "Human",
                "Cleric"
            ],
            "rarity": "Uncommon",
            "set": "M13",
            "set_name": "Magic 2013",
            "text": "When War Priest of Thune enters the battlefield, you may destroy target enchantment.",
            "flavor": "\"The sacred might of Thune thunders in my soul.\"",
            "artist": "Izzy",
            "number": "39",
            "layout": "normal",
            "multiverseid": 275698,
            "image_url": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=275698&type=card",
            "original_text": "When War Priest of Thune enters the battlefield, you may destroy target enchantment.",
            "original_type": "Creature — Human Cleric",
            "printings": [
                "EMA",
                "M11",
                "M13"
            ],
            "legalities": [
                {
                    "format": "Commander",
                    "legality": "Legal"
                },
                {
                    "format": "Duel",
                    "legality": "Legal"
                },
                {
                    "format": "Legacy",
                    "legality": "Legal"
                },
                {
                    "format": "Modern",
                    "legality": "Legal"
                },
                {
                    "format": "Oathbreaker",
                    "legality": "Legal"
                },
                {
                    "format": "Paupercommander",
                    "legality": "Restricted"
                },
                {
                    "format": "Penny",
                    "legality": "Legal"
                },
                {
                    "format": "Predh",
                    "legality": "Legal"
                },
                {
                    "format": "Vintage",
                    "legality": "Legal"
                }
            ],
            "rulings": null,
            "foreign_names": [
                {
                    "name": "Kriegspriester von Thune",
                    "text": "Wenn der Kriegspriester von Thune ins Spiel kommt, kannst du eine Verzauberung deiner Wahl zerstören.",
                    "type": "Kreatur — Mensch, Kleriker",
                    "flavor": "„Die heilige Macht Thunes tobt in meiner Seele.\"",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=332135&type=card",
                    "language": "German",
                    "identifiers": {
                        "scryfallId": "4a9f3793-b052-44dc-9860-62ae890f7631",
                        "multiverseId": 332135
                    },
                    "multiverseid": 332135
                },
                {
                    "name": "Sacerdote guerrero de Thune",
                    "text": "Cuando el Sacerdote guerrero de Thune entre al campo de batalla, puedes destruir el encantamiento objetivo.",
                    "type": "Criatura — Clérigo humano",
                    "flavor": "\"El sagrado poder de Thune retumba en mi alma.\"",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=332384&type=card",
                    "language": "Spanish",
                    "identifiers": {
                        "scryfallId": "8ffa490b-8644-487f-9baf-7d215889bba1",
                        "multiverseId": 332384
                    },
                    "multiverseid": 332384
                },
                {
                    "name": "Prêtre de guerre de Thiune",
                    "text": "Quand le Prêtre de guerre de Thiune arrive sur le champ de bataille, vous pouvez détruire l'enchantement ciblé.",
                    "type": "Créature : humain et clerc",
                    "flavor": "« La puissance sacrée de Thiune résonne dans mon âme. »",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=331637&type=card",
                    "language": "French",
                    "identifiers": {
                        "scryfallId": "72665b79-57c0-4028-b517-8b4e09036202",
                        "multiverseId": 331637
                    },
                    "multiverseid": 331637
                },
                {
                    "name": "Sacerdote Guerriero di Thune",
                    "text": "Quando il Sacerdote Guerriero di Thune entra nel campo di battaglia, puoi distruggere un incantesimo bersaglio.",
                    "type": "Creatura — Chierico Umano",
                    "flavor": "\"La potenza sacra di Thune romba nella mia anima.\"",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=332633&type=card",
                    "language": "Italian",
                    "identifiers": {
                        "scryfallId": "bdacb041-b310-4a1c-b702-ab412ec8d9e0",
                        "multiverseId": 332633
                    },
                    "multiverseid": 332633
                },
                {
                    "name": "テューンの戦僧",
                    "text": "テューンの戦僧が戦場に出たとき、エンチャント１つを対象とする。あなたはそれを破壊してもよい。",
                    "type": "クリーチャー — 人間・クレリック",
                    "flavor": "「テューンの神聖なる力がこの魂に轟いているのだ。」",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=332882&type=card",
                    "language": "Japanese",
                    "identifiers": {
                        "scryfallId": "7303dbc1-1b79-4807-812a-aa33485772c6",
                        "multiverseId": 332882
                    },
                    "multiverseid": 332882
                },
                {
                    "name": "쑨의 전쟁 사제",
                    "text": "쑨의 전쟁 사제가 전장에 들어올 때, 부여마법 한 개를 목표로 정한다. 당신은 그 부여마법을 파괴할 수 있다.",
                    "type": "생물 — 인간 성직자",
                    "flavor": "\"쑨의 신성한 힘이 내 영혼을 뒤흔든다.\"",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=330641&type=card",
                    "language": "Korean",
                    "identifiers": {
                        "scryfallId": "7731a4a3-aac1-41fa-9546-e9d4a1d3abbe",
                        "multiverseId": 330641
                    },
                    "multiverseid": 330641
                },
                {
                    "name": "Sacerdote de Guerra de Thune",
                    "text": "Quando Sacerdote de Guerra de Thune entra no campo de batalha, você pode destruir o encantamento alvo.",
                    "type": "Criatura — Humano Clérigo",
                    "flavor": "\"A força sagrada de Thune retumba em minha alma.\"",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=331388&type=card",
                    "language": "Portuguese (Brazil)",
                    "identifiers": {
                        "scryfallId": "0a01471d-6f28-466c-8ec5-929aed775211",
                        "multiverseId": 331388
                    },
                    "multiverseid": 331388
                },
                {
                    "name": "Военный Священник из Туна",
                    "text": "Когда Военный Священник из Туна выходит на поле битвы, вы можете уничтожить целевые чары.",
                    "type": "Существо — Человек Священник",
                    "flavor": "«Священная мощь Туна рокочет в моей душе».",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=331886&type=card",
                    "language": "Russian",
                    "identifiers": {
                        "scryfallId": "3d4a3a9d-6c8b-46b3-95f3-a38bdd4cf71c",
                        "multiverseId": 331886
                    },
                    "multiverseid": 331886
                },
                {
                    "name": "图恩战僧",
                    "text": "当图恩战僧进战场时，你可以消灭目标结界。",
                    "type": "生物～人类／僧侣",
                    "flavor": "「图恩的神圣力量撼动我的灵魂。」",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=330392&type=card",
                    "language": "Chinese Simplified",
                    "identifiers": {
                        "scryfallId": "39f099be-bac9-42e4-953e-a6f6b82c997a",
                        "multiverseId": 330392
                    },
                    "multiverseid": 330392
                },
                {
                    "name": "圖恩戰僧",
                    "text": "當圖恩戰僧進戰場時，你可以消滅目標結界。",
                    "type": "生物～人類／僧侶",
                    "flavor": "「圖恩的神聖力量撼動我的靈魂。」",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=330890&type=card",
                    "language": "Chinese Traditional",
                    "identifiers": {
                        "scryfallId": "bc0c9eb6-06d3-4587-b9dc-e61eb7076d68",
                        "multiverseId": 330890
                    },
                    "multiverseid": 330890
                }
            ]
        },
        {
            "id": "0009093e-de41-5432-9815-8d1f2efe16dd",
            "name": "Woe Strider",
            "mana_cost": "{2}{B}",
            "cmc": 3,
            "colors": [
                "B"
            ],
            "color_identity": [
                "B"
            ],
            "type": "Creature — Horror",
            "types": [
                "Creature"
            ],
            "subtypes": [
                "Horror"
            ],
            "rarity": "Rare",
            "set": "CLB",
            "set_name": "Commander Legends: Battle for Baldur's Gate",
            "text": "When Woe Strider enters the battlefield, create a 0/1 white Goat creature token.\nSacrifice another creature: Scry 1.\nEscape—{3}{B}{B}, Exile four other cards from your graveyard. (You may cast this card from your graveyard for its escape cost.)\nWoe Strider escapes with two +1/+1 counters on it.",
            "flavor": null,
            "artist": "John Thacker",
            "number": "774",
            "layout": "normal",
            "multiverseid": 567591,
            "image_url": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=567591&type=card",
            "original_text": "When Woe Strider enters the battlefield, create a 0/1 white Goat creature token.\nSacrifice another creature: Scry 1.\nEscape—{3}{B}{B}, Exile four other cards from your graveyard. (You may cast this card from your graveyard for its escape cost.)\nWoe Strider escapes with two +1/+1 counters on it.",
            "original_type": "Creature — Horror",
            "printings": [
                "AJMP",
                "CLB",
                "NCC",
                "PRM",
                "PTHB",
                "THB"
            ],
            "legalities": [
                {
                    "format": "Brawl",
                    "legality": "Legal"
                },
                {
                    "format": "Commander",
                    "legality": "Legal"
                },
                {
                    "format": "Duel",
                    "legality": "Legal"
                },
                {
                    "format": "Explorer",
                    "legality": "Legal"
                },
                {
                    "format": "Gladiator",
                    "legality": "Legal"
                },
                {
                    "format": "Historic",
                    "legality": "Legal"
                },
                {
                    "format": "Legacy",
                    "legality": "Legal"
                },
                {
                    "format": "Modern",
                    "legality": "Legal"
                },
                {
                    "format": "Oathbreaker",
                    "legality": "Legal"
                },
                {
                    "format": "Penny",
                    "legality": "Legal"
                },
                {
                    "format": "Pioneer",
                    "legality": "Legal"
                },
                {
                    "format": "Timeless",
                    "legality": "Legal"
                },
                {
                    "format": "Vintage",
                    "legality": "Legal"
                }
            ],
            "rulings": [
                {
                    "date": "2020-01-24",
                    "text": "After an escaped spell resolves, it returns to its owner's graveyard if it's not a permanent spell. If it is a permanent spell, it enters the battlefield and will return to its owner's graveyard if it dies later. Perhaps it will escape again—good underworld security is so hard to come by these days."
                },
                {
                    "date": "2020-01-24",
                    "text": "Escape's permission doesn't change when you may cast the spell from your graveyard."
                },
                {
                    "date": "2020-01-24",
                    "text": "If a card has multiple abilities giving you permission to cast it, such as two escape abilities or an escape ability and a flashback ability, you choose which one to apply. The others have no effect."
                },
                {
                    "date": "2020-01-24",
                    "text": "If a card with escape is put into your graveyard during your turn, you'll be able to cast it right away if it's legal to do so, before an opponent can take any actions."
                },
                {
                    "date": "2020-01-24",
                    "text": "If you cast a spell with its escape permission, you can't choose to apply any other alternative costs or to cast it without paying its mana cost. If it has any additional costs, you must pay those."
                },
                {
                    "date": "2020-01-24",
                    "text": "Once you begin casting a spell with escape, it immediately moves to the stack. Players can't take any other actions until you're done casting the spell."
                },
                {
                    "date": "2020-01-24",
                    "text": "To determine the total cost of a spell, start with the mana cost or alternative cost you're paying (such as an escape cost), add any cost increases, then apply any cost reductions. The mana value of the spell remains unchanged, no matter what the total cost to cast it was and no matter whether an alternative cost was paid."
                }
            ],
            "foreign_names": [
                {
                    "name": "Schreitendes Elend",
                    "text": "Wenn das Schreitende Elend ins Spiel kommt, erzeuge einen 0/1 weißen Ziege-Kreaturenspielstein.\nOpfere eine andere Kreatur: Hellsicht 1.\nBefreiung — {3}{B}{B}, schicke vier andere Karten aus deinem Friedhof ins Exil. (Du kannst diese Karte aus deinem Friedhof für ihre Befreiungskosten wirken.)\nDas Schreitende Elend befreit sich mit zwei +1/+1-Marken auf ihm.",
                    "type": "Kreatur — Schrecken",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=567836&type=card",
                    "language": "German",
                    "identifiers": {
                        "scryfallId": "c90420c2-9030-48e3-9426-31894ac5f97a",
                        "multiverseId": 567836
                    },
                    "multiverseid": 567836
                },
                {
                    "name": "Espanto de la amargura",
                    "text": "Cuando el Espanto de la amargura entre al campo de batalla, crea una ficha de criatura Cabra blanca 0/1.\nSacrificar otra criatura: Adivina 1.\nEscapatoria—{3}{B}{B}, exiliar otras cuatro cartas de tu cementerio. (Puedes lanzar esta carta desde tu cementerio pagando su coste de escapatoria.)\nEl Espanto de la amargura escapa con dos contadores +1/+1 sobre él.",
                    "type": "Criatura — Horror",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=568081&type=card",
                    "language": "Spanish",
                    "identifiers": {
                        "scryfallId": "0ad274a7-0272-4bcf-b449-ef1d34693a39",
                        "multiverseId": 568081
                    },
                    "multiverseid": 568081
                },
                {
                    "name": "Enjambeur du malheur",
                    "text": "Quand l'Enjambeur du malheur arrive sur le champ de bataille, créez un jeton de créature 0/1 blanche Chèvre.\nSacrifiez une autre créature : Regard 1.\nÉchappée — {3}{B}{B}, exilez quatre autres cartes de votre cimetière. (Vous pouvez lancer cette carte depuis votre cimetière pour son coût d'échappée.)\nL'Enjambeur du malheur s'échappe avec deux marqueurs +1/+1 sur lui.",
                    "type": "Créature : horreur",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=568326&type=card",
                    "language": "French",
                    "identifiers": {
                        "scryfallId": "b6af751c-7390-4155-b5c6-c608f34d8754",
                        "multiverseId": 568326
                    },
                    "multiverseid": 568326
                },
                {
                    "name": "Ramingo dell'Angoscia",
                    "text": "Quando il Ramingo dell'Angoscia entra nel campo di battaglia, crea una pedina creatura Capra 0/1 bianca.\nSacrifica un'altra creatura: Profetizza 1.\nFuga—{3}{B}{B}, Esilia altre quattro carte dal tuo cimitero. (Puoi lanciare questa carta dal tuo cimitero pagando il suo costo di fuga.)\nIl Ramingo dell'Angoscia fugge con due segnalini +1/+1.",
                    "type": "Creatura — Orrore",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=568571&type=card",
                    "language": "Italian",
                    "identifiers": {
                        "scryfallId": "071b590a-0ba0-495e-b7e2-e4987466a700",
                        "multiverseId": 568571
                    },
                    "multiverseid": 568571
                },
                {
                    "name": "悲哀の徘徊者",
                    "text": "悲哀の徘徊者が戦場に出たとき、白の０/１のヤギ・クリーチャー・トークン１体を生成する。\nこれでないクリーチャー１体を生け贄に捧げる：占術１を行う。\n脱出―{3}{B}{B}, あなたの墓地にありこれでないカード４枚を追放する。（あなたはあなたの墓地にあるこのカードを脱出コストで唱えてもよい。）\n悲哀の徘徊者は＋１/＋１カウンター２個が置かれた状態で脱出する。",
                    "type": "クリーチャー — ホラー",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=568816&type=card",
                    "language": "Japanese",
                    "identifiers": {
                        "scryfallId": "ca6e3f0c-41fe-484d-98ae-60293cc33499",
                        "multiverseId": 568816
                    },
                    "multiverseid": 568816
                },
                {
                    "name": "Andarilho das Aflições",
                    "text": "Quando Andarilho das Aflições entrar no campo de batalha, crie uma ficha de criatura Bode branca 0/1.\nSacrifique outra criatura: Use vidência 1.\nEscapatória — {3}{B}{B}, exile quatro outros cards de seu cemitério. (Você pode conjurar este card de seu cemitério pagando seu custo de escapatória.)\nAndarilho das Aflições escapa com dois marcadores +1/+1.",
                    "type": "Criatura — Horror",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=569061&type=card",
                    "language": "Portuguese (Brazil)",
                    "identifiers": {
                        "scryfallId": "053170b3-2d40-4d6d-b668-d06b4901229b",
                        "multiverseId": 569061
                    },
                    "multiverseid": 569061
                },
                {
                    "name": "Горестный Бродяга",
                    "text": "Когда Горестный Бродяга выходит на поле битвы, создайте одну фишку существа 0/1 белая Коза.\nПожертвуйте другое существо: предскажите 1.\nПобег — {3}{B}{B}, изгоните четыре другие карты из вашего кладбища. (Вы можете разыграть эту карту из вашего кладбища за ее стоимость Побега.)\nГорестный Бродяга совершает Побег с двумя жетонами +1/+1 на нем.",
                    "type": "Существо — Ужас",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=569306&type=card",
                    "language": "Russian",
                    "identifiers": {
                        "scryfallId": "eb475190-ce8f-4444-b99f-e72262b64425",
                        "multiverseId": 569306
                    },
                    "multiverseid": 569306
                },
                {
                    "name": "悲哀神行客",
                    "text": "当悲哀神行客进战场时，派出一个0/1白色山羊衍生生物。\n牺牲另一个生物：占卜1。\n逸脱～{3}{B}{B}，从你的坟墓场放逐四张其他牌。（你可以从你的坟墓场施放此牌，并支付其逸脱费用。）\n悲哀神行客逸脱时上面有两个+1/+1指示物。",
                    "type": "生物 ～惊惧兽",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=569551&type=card",
                    "language": "Chinese Simplified",
                    "identifiers": {
                        "scryfallId": "aae75748-c6dc-4024-8ce6-274cbb868598",
                        "multiverseId": 569551
                    },
                    "multiverseid": 569551
                },
                {
                    "name": "悲哀神行客",
                    "text": "當悲哀神行客進戰場時，派出一個0/1白色山羊衍生生物。\n犧牲另一個生物：占卜1。\n逸脫～{3}{B}{B}，從你的墳墓場放逐四張其他牌。（你可以從你的墳墓場施放此牌，並支付其逸脫費用。）\n悲哀神行客逸脫時上面有兩個+1/+1指示物。",
                    "type": "生物 ～驚懼獸",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=569796&type=card",
                    "language": "Chinese Traditional",
                    "identifiers": {
                        "scryfallId": "cd02ba7c-8889-4d67-b9b6-cbbeee4081bc",
                        "multiverseId": 569796
                    },
                    "multiverseid": 569796
                }
            ]
        },
        {
            "id": "00315f0b-da57-5d01-a114-bb439a7bf95a",
            "name": "Anax, Hardened in the Forge",
            "mana_cost": "{1}{R}{R}",
            "cmc": 3,
            "colors": [
                "R"
            ],
            "color_identity": [
                "R"
            ],
            "type": "Legendary Enchantment Creature — Demigod",
            "types": [
                "Enchantment",
                "Creature"
            ],
            "subtypes": [
                "Demigod"
            ],
            "rarity": "Uncommon",
            "set": "CMM",
            "set_name": "Commander Masters",
            "text": "Anax's power is equal to your devotion to red. (Each {R} in the mana costs of permanents you control counts toward your devotion to red.)\nWhenever Anax or another nontoken creature you control dies, create a 1/1 red Satyr creature token with \"This creature can't block.\" If the creature had power 4 or greater, create two of those tokens instead.",
            "flavor": null,
            "artist": "Eric Deschamps",
            "number": "204",
            "layout": "normal",
            "multiverseid": 627668,
            "image_url": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=627668&type=card",
            "original_text": "Anax's power is equal to your devotion to red. (Each {R} in the mana costs of permanents you control counts toward your devotion to red.)\nWhenever Anax or another nontoken creature you control dies, create a 1/1 red Satyr creature token with \"This creature can't block.\" If the creature had power 4 or greater, create two of those tokens instead.",
            "original_type": "Legendary Enchantment Creature — Demigod",
            "printings": [
                "CMM",
                "PLST",
                "PRM",
                "THB"
            ],
            "legalities": [
                {
                    "format": "Brawl",
                    "legality": "Legal"
                },
                {
                    "format": "Commander",
                    "legality": "Legal"
                },
                {
                    "format": "Duel",
                    "legality": "Legal"
                },
                {
                    "format": "Explorer",
                    "legality": "Legal"
                },
                {
                    "format": "Gladiator",
                    "legality": "Legal"
                },
                {
                    "format": "Historic",
                    "legality": "Legal"
                },
                {
                    "format": "Legacy",
                    "legality": "Legal"
                },
                {
                    "format": "Modern",
                    "legality": "Legal"
                },
                {
                    "format": "Oathbreaker",
                    "legality": "Legal"
                },
                {
                    "format": "Paupercommander",
                    "legality": "Restricted"
                },
                {
                    "format": "Pioneer",
                    "legality": "Legal"
                },
                {
                    "format": "Timeless",
                    "legality": "Legal"
                },
                {
                    "format": "Vintage",
                    "legality": "Legal"
                }
            ],
            "rulings": [
                {
                    "date": "2020-01-24",
                    "text": "Colorless and generic mana symbols ({C}, {0}, {1}, {2}, {X}, and so on) in mana costs of permanents you control don’t count toward your devotion to any color."
                },
                {
                    "date": "2020-01-24",
                    "text": "Hybrid mana symbols, monocolored hybrid mana symbols, and Phyrexian mana symbols do count toward your devotion to their color(s)."
                },
                {
                    "date": "2020-01-24",
                    "text": "If Anax dies at the same time as another nontoken creature you control, its ability triggers for each of them."
                },
                {
                    "date": "2020-01-24",
                    "text": "If an activated ability or triggered ability has an effect that depends on your devotion to a color, you count the number of mana symbols of that color among the mana costs of permanents you control as the ability resolves. The permanent with that ability will be counted if it’s still on the battlefield at that time."
                },
                {
                    "date": "2020-01-24",
                    "text": "If you create a token that’s a copy of Anax, its last ability triggers when it dies."
                },
                {
                    "date": "2020-01-24",
                    "text": "If you put an Aura on an opponent’s permanent, you still control the Aura, and mana symbols in its mana cost count towards your devotion."
                },
                {
                    "date": "2020-01-24",
                    "text": "Mana symbols in the text boxes of permanents you control don’t count toward your devotion to any color."
                },
                {
                    "date": "2020-01-24",
                    "text": "The ability that defines Anax’s power works in all zones, not just the battlefield."
                },
                {
                    "date": "2020-01-24",
                    "text": "To determine whether you create two tokens, check the power of the creature that died immediately before it died."
                }
            ],
            "foreign_names": [
                {
                    "name": "Anax der Schmiedegestählte",
                    "text": "Anax' Stärke ist gleich deiner Hingabe zu Rot. (Jedes {R} in den Manakosten von bleibenden Karten, die du kontrollierst, erhöht deine Hingabe zu Rot um eins.)\nImmer wenn Anax oder eine andere Nichtspielsteinkreatur, die du kontrollierst, stirbt, erzeuge einen 1/1 roten Satyr-Kreaturenspielstein mit „Diese Kreatur kann nicht blocken.\" Falls die Kreatur Stärke 4 oder mehr hatte, erzeuge stattdessen zwei solcher Spielsteine.",
                    "type": "Legendäre Verzauberungskreatur — Halbgott",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=627902&type=card",
                    "language": "German",
                    "identifiers": {
                        "scryfallId": "64112c2d-30f0-45de-bfcc-a0315e20cc97",
                        "multiverseId": 627902
                    },
                    "multiverseid": 627902
                },
                {
                    "name": "Anax, endurecido en la forja",
                    "text": "La fuerza de Anax es igual a tu devoción al rojo. (Cada {R} en los costes de maná de los permanentes que controlas cuenta para tu devoción al rojo.)\nSiempre que Anax u otra criatura que no sea ficha que controlas muera, crea una ficha de criatura Sátiro roja 1/1 con \"Esta criatura no puede bloquear\". Si la fuerza de la criatura era de 4 o más, en vez de eso, crea dos de esas fichas.",
                    "type": "Criatura encantamiento legendaria — Semidiós",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=628136&type=card",
                    "language": "Spanish",
                    "identifiers": {
                        "scryfallId": "1d738e0a-7980-4c8c-8666-5bfecad48099",
                        "multiverseId": 628136
                    },
                    "multiverseid": 628136
                },
                {
                    "name": "鍛冶で鍛えられしアナックス",
                    "text": "鍛冶で鍛えられしアナックスのパワーは、あなたの赤への信心に等しい。（あなたの赤への信心とは、あなたがコントロールしているパーマネントのマナ・コストに含まれる{R}の総数である。）\n鍛冶で鍛えられしアナックスや、あなたがコントロールしていてトークンでもこれでもないクリーチャー１体が死亡するたび、「このクリーチャーではブロックできない。」を持つ赤の１/１のサテュロス・クリーチャー・トークン１体を生成する。そのクリーチャーのパワーが４以上であったなら、代わりにそのトークン２体を生成する。",
                    "type": "伝説のクリーチャー・エンチャント — 亜神",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=628604&type=card",
                    "language": "Japanese",
                    "identifiers": {
                        "scryfallId": "ed530533-f1d5-48a4-817d-fac3d5c0bac8",
                        "multiverseId": 628604
                    },
                    "multiverseid": 628604
                },
                {
                    "name": "熔锻锤炼的阿那克斯",
                    "text": "阿那克斯的力量等同于你的红色献力。（由你操控之永久物的法术力费用当中每含有一个{R}，你的红色献力就加一。）\n每当阿那克斯或另一个由你操控且非衍生物的生物死去时，派出一个1/1红色羊蹄人衍生生物，且具有「此生物不能进行阻挡。」若该生物的力量等于或大于4，则改为派出两个此类衍生物。",
                    "type": "传奇结界生物 ～半神",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=629072&type=card",
                    "language": "Chinese Simplified",
                    "identifiers": {
                        "scryfallId": "ead7d512-456b-46bd-bb11-4c7105e6e4da",
                        "multiverseId": 629072
                    },
                    "multiverseid": 629072
                }
            ]
        },
        {
            "id": "004157f3-5c88-5c8c-a264-b297ed080622",
            "name": "Shambling Attendants",
            "mana_cost": "{7}{B}",
            "cmc": 8,
            "colors": [
                "B"
            ],
            "color_identity": [
                "B"
            ],
            "type": "Creature — Zombie",
            "types": [
                "Creature"
            ],
            "subtypes": [
                "Zombie"
            ],
            "rarity": "Common",
            "set": "KTK",
            "set_name": "Khans of Tarkir",
            "text": "Delve (Each card you exile from your graveyard while casting this spell pays for {1}.)\nDeathtouch (Any amount of damage this deals to a creature is enough to destroy it.)",
            "flavor": "\"Let the world behold what becomes of those who defy us.\"\n—Taigam, Sidisi's Hand",
            "artist": "Daarken",
            "number": "89",
            "layout": "normal",
            "multiverseid": 386662,
            "image_url": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386662&type=card",
            "original_text": "Delve (Each card you exile from your graveyard while casting this spell pays for {1}.)\nDeathtouch (Any amount of damage this deals to a creature is enough to destroy it.)",
            "original_type": "Creature — Zombie",
            "printings": [
                "KTK",
                "PLST"
            ],
            "legalities": [
                {
                    "format": "Brawl",
                    "legality": "Legal"
                },
                {
                    "format": "Commander",
                    "legality": "Legal"
                },
                {
                    "format": "Duel",
                    "legality": "Legal"
                },
                {
                    "format": "Explorer",
                    "legality": "Legal"
                },
                {
                    "format": "Gladiator",
                    "legality": "Legal"
                },
                {
                    "format": "Historic",
                    "legality": "Legal"
                },
                {
                    "format": "Legacy",
                    "legality": "Legal"
                },
                {
                    "format": "Modern",
                    "legality": "Legal"
                },
                {
                    "format": "Oathbreaker",
                    "legality": "Legal"
                },
                {
                    "format": "Pauper",
                    "legality": "Legal"
                },
                {
                    "format": "Paupercommander",
                    "legality": "Legal"
                },
                {
                    "format": "Penny",
                    "legality": "Legal"
                },
                {
                    "format": "Pioneer",
                    "legality": "Legal"
                },
                {
                    "format": "Timeless",
                    "legality": "Legal"
                },
                {
                    "format": "Vintage",
                    "legality": "Legal"
                }
            ],
            "rulings": [
                {
                    "date": "2014-09-20",
                    "text": "Because delve isn’t an alternative cost, it can be used in conjunction with alternative costs."
                },
                {
                    "date": "2014-09-20",
                    "text": "Delve doesn’t change a spell’s mana cost or converted mana cost. For example, Dead Drop’s converted mana cost is 10 even if you exiled three cards to cast it."
                },
                {
                    "date": "2014-09-20",
                    "text": "The rules for delve have changed slightly since it was last in an expansion. Previously, delve reduced the cost to cast a spell. Under the current rules, you exile cards from your graveyard at the same time you pay the spell’s cost. Exiling a card this way is simply another way to pay that cost."
                },
                {
                    "date": "2014-09-20",
                    "text": "You can’t exile cards to pay for the colored mana requirements of a spell with delve."
                },
                {
                    "date": "2014-09-20",
                    "text": "You can’t exile more cards than the generic mana requirement of a spell with delve. For example, you can’t exile more than nine cards from your graveyard to cast Dead Drop."
                }
            ],
            "foreign_names": [
                {
                    "name": "Schlurfende Dienerschaft",
                    "text": "Wühlen (Mit jeder Karte, die du aus deinem Friedhof ins Exil schickst, während du diesen Zauberspruch wirkst, bezahlst du {1} seiner Kosten.)\nTodesberührung (Eine beliebige Menge Schadenspunkte, die sie einer Kreatur zufügt, sind ausreichend, um diese zu zerstören.)",
                    "type": "Kreatur — Zombie",
                    "flavor": "„Lasst die Welt sehen, was aus denen wird, die uns herausfordern.\" —Taigam, Sidisis rechte Hand",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387469&type=card",
                    "language": "German",
                    "identifiers": {
                        "scryfallId": "3cd6bcb7-88ab-4d4c-af0f-5ad5b1ade0fa",
                        "multiverseId": 387469
                    },
                    "multiverseid": 387469
                },
                {
                    "name": "Asistentes tambaleantes",
                    "text": "Excavar. (Cada carta que exilies de tu cementerio al lanzar este hechizo cuenta como un pago de {1}.)\nToque mortal. (Cualquier cantidad de daño que esta carta haga a una criatura es suficiente para destruirla.)",
                    "type": "Criatura — Zombie",
                    "flavor": "\"Que el mundo contemple lo que les sucede a quienes nos desafían\". —Taigam, mano de Sidisi",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=389352&type=card",
                    "language": "Spanish",
                    "identifiers": {
                        "scryfallId": "58c26af2-8ca4-414c-928a-36b6085e6dab",
                        "multiverseId": 389352
                    },
                    "multiverseid": 389352
                },
                {
                    "name": "Serviteurs titubants",
                    "text": "Fouille (Chaque carte que vous exilez depuis votre cimetière en lançant ce sort paie {1}.)\nContact mortel (Le nombre de blessures que cette créature inflige à une créature, quel qu'il soit, est suffisant pour la détruire.)",
                    "type": "Créature : zombie",
                    "flavor": "« Que tous contemplent ce qu'il advient de ceux qui nous défient. » —Taigam, bras droit de Sidisi",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387738&type=card",
                    "language": "French",
                    "identifiers": {
                        "scryfallId": "012bf1d0-52dc-4931-875b-f7941bbe3526",
                        "multiverseId": 387738
                    },
                    "multiverseid": 387738
                },
                {
                    "name": "Servitori Barcollanti",
                    "text": "Esumare (Ogni carta che esili dal tuo cimitero mentre lanci questa magia corrisponde al pagamento di {1}.)\nTocco letale (Qualsiasi danno che questa creatura infligge a una creatura è sufficiente a distruggerla.)",
                    "type": "Creatura — Zombie",
                    "flavor": "\"Che il mondo contempli il destino che attende chi osa sfidarci.\" —Taigam, Mano di Sidisi",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388007&type=card",
                    "language": "Italian",
                    "identifiers": {
                        "scryfallId": "9fb380b8-1e65-4310-abc8-5a16f3df1dc3",
                        "multiverseId": 388007
                    },
                    "multiverseid": 388007
                },
                {
                    "name": "よろめく従者",
                    "text": "探査（この呪文を唱える段階であなたがあなたの墓地から追放した各カードは、{1}を支払う。）ｆ\n接死（これが何らかのダメージをクリーチャーに与えたら、それだけで破壊する。）",
                    "type": "クリーチャー — ゾンビ",
                    "flavor": "「我々に逆らおうなどと考えた者たちの末路を、世界中に見せつけてやろう。」 ――シディシの手、テイガム",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388276&type=card",
                    "language": "Japanese",
                    "identifiers": {
                        "scryfallId": "4174a5c0-58df-4cf3-ad30-f8d52ecffd10",
                        "multiverseId": 388276
                    },
                    "multiverseid": 388276
                },
                {
                    "name": "어기적거리는 수행원",
                    "text": "파헤치기 (이 주문을 발동하는 동안 당신이 당신의 무덤에서 추방하는 카드는 {1}을 지불한다.)\n치명타 (이 생물에게 피해를 입은 생물은 피해의 양에 상관없이 파괴된다.)",
                    "type": "생물 — 좀비",
                    "flavor": "\"우리에게 반항하는 이들이 어떻게 되는지 똑똑히 보여주어라.\" —시디시의 손 타이감",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388545&type=card",
                    "language": "Korean",
                    "identifiers": {
                        "scryfallId": "050521aa-6df2-4fb1-a1b2-947e6506969f",
                        "multiverseId": 388545
                    },
                    "multiverseid": 388545
                },
                {
                    "name": "Servos Trôpegos",
                    "text": "Esquadrinhar (Cada card que você exila de seu cemitério quando conjura esta mágica paga por {1}.)\nToque mortífero (Qualquer quantidade de dano que esta criatura cause a uma criatura é suficiente para destruí-la.)",
                    "type": "Criatura — Zumbi",
                    "flavor": "\"Que o mundo contemple o que acontece com aqueles que nos desafiam.\" — Taigam, Mão de Sidisi",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=388814&type=card",
                    "language": "Portuguese (Brazil)",
                    "identifiers": {
                        "scryfallId": "42d564c5-5bb4-41a1-b25d-c16a76caa1f1",
                        "multiverseId": 388814
                    },
                    "multiverseid": 388814
                },
                {
                    "name": "Шаркающие Служители",
                    "text": "Выкапывание (Каждая карта, которую вы изгоняете из вашего кладбища при разыгрывании этого заклинания, считается оплатой {1}.)\nСмертельное касание (Любое количество повреждений, которое этот объект наносит существу, достаточно, чтобы его уничтожить.)",
                    "type": "Существо — Зомби",
                    "flavor": "«Да узрит мир участь тех, кто не покорился нам». — Тайгам, десница Сидиси",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=389083&type=card",
                    "language": "Russian",
                    "identifiers": {
                        "scryfallId": "5374f3d7-1751-4c64-81c8-1bf92b55cdf9",
                        "multiverseId": 389083
                    },
                    "multiverseid": 389083
                },
                {
                    "name": "跛行随侍",
                    "text": "掘穴（你于施放此咒语时每从你坟墓场中放逐一张牌，就能为此咒语支付{1}）。\n死触（它对生物造成的任何数量伤害都足以消灭后者。）",
                    "type": "生物～灵俑",
                    "flavor": "「让全世界看看反抗我们的人都有什么下场。」 ～谢迪西副手泰伽姆",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386931&type=card",
                    "language": "Chinese Simplified",
                    "identifiers": {
                        "scryfallId": "ac250b52-003b-472d-a145-50f55f2a5563",
                        "multiverseId": 386931
                    },
                    "multiverseid": 386931
                },
                {
                    "name": "跛行隨侍",
                    "text": "掘穴（你於施放此咒語時每從你墳墓場中放逐一張牌，就能為此咒語支付{1}）。\n死觸（它對生物造成的任何數量傷害都足以消滅後者。）",
                    "type": "生物～殭屍",
                    "flavor": "「讓全世界看看反抗我們的人都有什麼下場。」 ～謝迪西副手泰伽姆",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=387200&type=card",
                    "language": "Chinese Traditional",
                    "identifiers": {
                        "scryfallId": "df76da11-dac6-4630-be24-5f331c2b08db",
                        "multiverseId": 387200
                    },
                    "multiverseid": 387200
                }
            ]
        },
        {
            "id": "005b1161-73b7-5175-96f1-0cd580d10a72",
            "name": "Flaming Sword",
            "mana_cost": "{1}{R}",
            "cmc": 2,
            "colors": [
                "R"
            ],
            "color_identity": [
                "R"
            ],
            "type": "Enchantment — Aura",
            "types": [
                "Enchantment"
            ],
            "subtypes": [
                "Aura"
            ],
            "rarity": "Common",
            "set": "MMQ",
            "set_name": "Mercadian Masques",
            "text": "Flash\nEnchant creature\nEnchanted creature gets +1/+0 and has first strike.",
            "flavor": "\"It's not Talruum crystal, but I must admit—it gets the job done.\"\n—Tahngarth",
            "artist": "Randy Gallegos",
            "number": "190",
            "layout": "normal",
            "multiverseid": 19613,
            "image_url": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=19613&type=card",
            "original_text": "You may play Flaming Sword any time you could play an instant.\nTarget creature gets +1/+0 and has first strike.",
            "original_type": "Enchant Creature",
            "printings": [
                "MMQ"
            ],
            "legalities": [
                {
                    "format": "Commander",
                    "legality": "Legal"
                },
                {
                    "format": "Duel",
                    "legality": "Legal"
                },
                {
                    "format": "Legacy",
                    "legality": "Legal"
                },
                {
                    "format": "Oathbreaker",
                    "legality": "Legal"
                },
                {
                    "format": "Pauper",
                    "legality": "Legal"
                },
                {
                    "format": "Paupercommander",
                    "legality": "Legal"
                },
                {
                    "format": "Predh",
                    "legality": "Legal"
                },
                {
                    "format": "Premodern",
                    "legality": "Legal"
                },
                {
                    "format": "Vintage",
                    "legality": "Legal"
                }
            ],
            "rulings": null,
            "foreign_names": [
                {
                    "name": "Flammenschwert",
                    "text": "Du kannst das Flammenschwert immer dann spielen, wenn Du auch einen Spontanzauber spielen könntest.\nEine Kreatur Deiner Wahl erhält +1/+0 und Erstschlag.",
                    "type": "Kreaturenverzauberung",
                    "flavor": null,
                    "language": "German",
                    "identifiers": {
                        "scryfallId": "6888d44d-c23a-4ee9-8962-091aac0d53a1"
                    },
                    "multiverseid": null
                },
                {
                    "name": "Espada llameante",
                    "flavor": null,
                    "language": "Spanish",
                    "identifiers": {
                        "scryfallId": "02f65d43-4919-4b61-ac89-f1f3091bbbc7"
                    },
                    "multiverseid": null
                },
                {
                    "name": "Epée flamboyante",
                    "flavor": null,
                    "language": "French",
                    "identifiers": {
                        "scryfallId": "2519c8fa-f016-4d71-a2e3-c0b871b48cf0"
                    },
                    "multiverseid": null
                },
                {
                    "name": "Spada Fiammeggiante",
                    "flavor": null,
                    "language": "Italian",
                    "identifiers": {
                        "scryfallId": "a58e8615-71a7-423d-ae95-b7a5390d642d"
                    },
                    "multiverseid": null
                },
                {
                    "name": "燃えたつ剣",
                    "flavor": null,
                    "language": "Japanese",
                    "identifiers": {
                        "scryfallId": "33c9d2ec-9169-4455-9236-425a74d62dd3"
                    },
                    "multiverseid": null
                },
                {
                    "name": "Espada Flamejante",
                    "flavor": null,
                    "language": "Portuguese (Brazil)",
                    "identifiers": {
                        "scryfallId": "8cd02e42-c6db-4587-a58c-929388f0adc3"
                    },
                    "multiverseid": null
                }
            ]
        },
        {
            "id": "0092adb5-ab0a-5315-baa0-c389c994f52f",
            "name": "Massacre Girl",
            "mana_cost": "{3}{B}{B}",
            "cmc": 5,
            "colors": [
                "B"
            ],
            "color_identity": [
                "B"
            ],
            "type": "Legendary Creature — Human Assassin",
            "types": [
                "Creature"
            ],
            "subtypes": [
                "Human",
                "Assassin"
            ],
            "rarity": "Rare",
            "set": "WAR",
            "set_name": "War of the Spark",
            "text": "Menace\nWhen Massacre Girl enters the battlefield, each other creature gets -1/-1 until end of turn. Whenever a creature dies this turn, each creature other than Massacre Girl gets -1/-1 until end of turn.",
            "flavor": null,
            "artist": "Chris Rallis",
            "number": "99",
            "layout": "normal",
            "multiverseid": 461026,
            "image_url": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461026&type=card",
            "original_text": null,
            "original_type": null,
            "printings": [
                "OTC",
                "PWAR",
                "RVR",
                "SLD",
                "WAR"
            ],
            "legalities": [
                {
                    "format": "Brawl",
                    "legality": "Legal"
                },
                {
                    "format": "Commander",
                    "legality": "Legal"
                },
                {
                    "format": "Duel",
                    "legality": "Legal"
                },
                {
                    "format": "Explorer",
                    "legality": "Legal"
                },
                {
                    "format": "Gladiator",
                    "legality": "Legal"
                },
                {
                    "format": "Historic",
                    "legality": "Legal"
                },
                {
                    "format": "Legacy",
                    "legality": "Legal"
                },
                {
                    "format": "Modern",
                    "legality": "Legal"
                },
                {
                    "format": "Oathbreaker",
                    "legality": "Legal"
                },
                {
                    "format": "Penny",
                    "legality": "Legal"
                },
                {
                    "format": "Pioneer",
                    "legality": "Legal"
                },
                {
                    "format": "Timeless",
                    "legality": "Legal"
                },
                {
                    "format": "Vintage",
                    "legality": "Legal"
                }
            ],
            "rulings": [
                {
                    "date": "2019-05-03",
                    "text": "A creature with 0 toughness doesn't die immediately. Rather, the creature dies the next time a player would receive priority. This means that any creatures whose toughness becomes 0 as Massacre Girl's enters-the-battlefield ability resolves will remain on the battlefield until just after the delayed triggered ability has been created."
                },
                {
                    "date": "2019-05-03",
                    "text": "Creatures that die while Massacre Girl's triggered ability is still on the stack won't cause its delayed triggered ability to trigger since that delayed triggered ability hasn't been created yet."
                },
                {
                    "date": "2019-05-03",
                    "text": "If more than one creature dies at once, Massacre Girl's delayed triggered ability triggers that many times."
                },
                {
                    "date": "2019-05-03",
                    "text": "Massacre Girl's enters-the-battlefield triggered ability and its delayed triggered ability each affect only creatures on the battlefield at the time that those abilities resolve. Creatures that enter the battlefield or become creatures later in the turn won't get -1/-1 unless the delayed triggered ability triggers and resolves again later."
                },
                {
                    "date": "2019-05-03",
                    "text": "Once Massacre Girl's enters-the-battlefield ability has triggered, it doesn't matter whether Massacre Girl remains on the battlefield. The delayed triggered ability will be created as the enters-the-battlefield ability resolves. "
                }
            ],
            "foreign_names": [
                {
                    "name": "Massakermädel",
                    "text": "Bedrohlich\nWenn das Massakermädel ins Spiel kommt, erhält jede andere Kreatur -1/-1 bis zum Ende des Zuges. Immer wenn eine Kreatur in diesem Zug stirbt, erhält jede Kreatur außer dem Massakermädel -1/-1 bis zum Ende des Zuges.",
                    "type": "Legendäre Kreatur — Mensch, Assassine",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461290&type=card",
                    "language": "German",
                    "identifiers": {
                        "scryfallId": "2b8910bf-616f-494c-adb4-34544c7cab89",
                        "multiverseId": 461290
                    },
                    "multiverseid": 461290
                },
                {
                    "name": "La Niña Masacre",
                    "text": "Amenaza.\nCuando La Niña Masacre entre al campo de batalla, cada otra criatura obtiene -1/-1 hasta el final del turno. Siempre que una criatura muera este turno, cada criatura que no sea La Niña Masacre obtiene -1/-1 hasta el final del turno.",
                    "type": "Criatura legendaria — Asesino humano",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461554&type=card",
                    "language": "Spanish",
                    "identifiers": {
                        "scryfallId": "eeb236ab-b4ff-4188-9e85-9344fce48125",
                        "multiverseId": 461554
                    },
                    "multiverseid": 461554
                },
                {
                    "name": "La Massacreuse",
                    "text": "Menace\nQuand La Massacreuse arrive sur le champ de bataille, chaque autre créature gagne -1/-1 jusqu'à la fin du tour. À chaque fois qu'une créature meurt ce tour-ci, chaque créature autre que La Massacreuse gagne -1/-1 jusqu'à la fin du tour.",
                    "type": "Créature légendaire : humain et assassin",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=461818&type=card",
                    "language": "French",
                    "identifiers": {
                        "scryfallId": "ef925e0d-6c9b-4f34-bda8-8ef60dc8946f",
                        "multiverseId": 461818
                    },
                    "multiverseid": 461818
                },
                {
                    "name": "Fanciulla del Massacro",
                    "text": "Minacciare\nQuando la Fanciulla del Massacro entra nel campo di battaglia, ogni altra creatura prende -1/-1 fino alla fine del turno. Ogniqualvolta una creatura muore in questo turno, ogni creatura diversa dalla Fanciulla del Massacro prende -1/-1 fino alla fine del turno.",
                    "type": "Creatura Leggendaria — Assassino Umano",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=462082&type=card",
                    "language": "Italian",
                    "identifiers": {
                        "scryfallId": "3cc4da86-563e-4c94-8f18-78f9a481af17",
                        "multiverseId": 462082
                    },
                    "multiverseid": 462082
                },
                {
                    "name": "虐殺少女",
                    "text": "威迫\n虐殺少女が戦場に出たとき、ターン終了時まで、他の各クリーチャーはそれぞれ－１/－１の修整を受ける。このターン、クリーチャーが１体死亡するたび、ターン終了時まで、虐殺少女ではない各クリーチャーはそれぞれ－１/－１の修整を受ける。",
                    "type": "伝説のクリーチャー — 人間・暗殺者",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=462346&type=card",
                    "language": "Japanese",
                    "identifiers": {
                        "scryfallId": "e5be662c-9591-46fd-95fb-686a321e4240",
                        "multiverseId": 462346
                    },
                    "multiverseid": 462346
                },
                {
                    "name": "대학살의 소녀",
                    "text": "호전적\n대학살의 소녀가 전장에 들어올 때, 다른 모든 생물은 턴종료까지 -1/-1을 받는다. 생물이 이번 턴에 죽을 때마다, 대학살의 소녀를 제외한 다른 모든 생물은 턴종료까지 -1/-1을 받는다.",
                    "type": "전설적 생물 — 인간 암살자",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=462610&type=card",
                    "language": "Korean",
                    "identifiers": {
                        "scryfallId": "20589d09-7b74-4a5a-8ffa-5feb1502e0cb",
                        "multiverseId": 462610
                    },
                    "multiverseid": 462610
                },
                {
                    "name": "Garota-massacre",
                    "text": "Ameaçar\nQuando Garota-massacre entra no campo de batalha, cada outra criatura recebe -1/-1 até o final do turno. Toda vez que uma criatura morre neste turno, cada criatura que não seja Garota-massacre recebe -1/-1 até o final do turno.",
                    "type": "Criatura Lendária — Humano Assassino",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=462874&type=card",
                    "language": "Portuguese (Brazil)",
                    "identifiers": {
                        "scryfallId": "12dde1cb-dee6-45c2-b8e6-c85586b75e8f",
                        "multiverseId": 462874
                    },
                    "multiverseid": 462874
                },
                {
                    "name": "Вырезательница",
                    "text": "Угроза\nКогда Вырезательница выходит на поле битвы, каждое другое существо получает -1/-1 до конца хода. Каждый раз, когда существо умирает в этом ходу, каждое существо, кроме Вырезательницы, получает -1/-1 до конца хода.",
                    "type": "Легендарное Существо — Человек Убийца",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463138&type=card",
                    "language": "Russian",
                    "identifiers": {
                        "scryfallId": "201a2552-35a2-41d2-8d5e-beae5541b2df",
                        "multiverseId": 463138
                    },
                    "multiverseid": 463138
                },
                {
                    "name": "杀戮女郎",
                    "text": "威慑\n当杀戮女郎进战场时，每个其他生物各得-1/-1直到回合结束。本回合中，每当一个生物死去时，杀戮女郎以外的每个生物各得-1/-1直到回合结束。",
                    "type": "传奇生物 ～人类／杀手",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463402&type=card",
                    "language": "Chinese Simplified",
                    "identifiers": {
                        "scryfallId": "aa9093f4-9449-44b6-86bd-0b63fb33352e",
                        "multiverseId": 463402
                    },
                    "multiverseid": 463402
                },
                {
                    "name": "殺戮女郎",
                    "text": "威懾\n當殺戮女郎進戰場時，每個其他生物各得-1/-1直到回合結束。本回合中，每當一個生物死去時，殺戮女郎以外的每個生物各得-1/-1直到回合結束。",
                    "type": "傳奇生物 ～人類／殺手",
                    "flavor": null,
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463666&type=card",
                    "language": "Chinese Traditional",
                    "identifiers": {
                        "scryfallId": "4098f5f1-925f-435d-adda-18c7009292ae",
                        "multiverseId": 463666
                    },
                    "multiverseid": 463666
                }
            ]
        }
    ])


    function getCards(colors, type, sliderValues) {
        console.log(colors)
        fetch('cardQuery', {
            method: 'POST',
            body: JSON.stringify({colors, type, sliderValues}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then((data)=>{console.log(data)
                 return data})
            .then(setCards)
    }



    return (
        <MTGContext.Provider value={{
            cards, getCards
        }}>
            {children}
        </MTGContext.Provider>
    );
};