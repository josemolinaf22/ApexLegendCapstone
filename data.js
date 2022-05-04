const legends = [
    {
        id: 0,
        name: 'Ash',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/ash/apex-grid-tile-legends-ash.png.adapt.crop16x9.png',
        lure: 'See your imperfections in your enemies — then crush them.',
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/ash/apex-grid-tile-legends-abilities-tactical-ash.png.adapt.crop16x9.652w.png',
                name: 'Arc Snare',
                description:'Throw a spinning snare that damages and tethers the first enemy who gets too close.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/ash/apex-grid-tile-legends-abilities-passive-ash.png.adapt.crop16x9.652w.png',
                name: 'Marked For Death',
                description: "Ash's map shows the location of recent deathboxes and marks surviving attackers."
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/ash/apex-grid-tile-legends-abilities-ultimate-ash.png.adapt.crop16x9.652w.png',
                name: 'Phase Breah',
                description: 'Tear open a one-way portal to a targeted location.'
            }
        ]
    },

    {
        id: 1,
        name: 'Bangalore',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bangalore.png.adapt.crop16x9.png',
        lure: "Name the weapon--I'll still beat you.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-bangalore.png.adapt.crop16x9.652w.png',
                name: 'Smoke Launcher',
                description:'Fire a high-velocity smoke canister that explodess into a smoke wall on impact.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-bangalore.png.adapt.crop16x9.652w.png',
                name: 'Double Time',
                description: 'Taking fire while sprinting makes you move faster for a brief time.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-bangalore.png.adapt.crop16x9.652w.png',
                name: 'Rolling Thunder',
                description: 'Call in an artillery strike that slowly creeps across the landscape.'
            }
        ]
    },

    {
        id: 2,
        name: 'Bloodhound',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-bloodhound.png.adapt.crop16x9.png',
        lure: 'I am the hunter the Gods have sent.',
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-bloodhound.png.adapt.crop16x9.652w.png',
                name: 'Eye of the Allfather',
                description:'Briefly reveal hidden enemies, traps and clues throughout structures in front of you.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-bloodhound.png.adapt.crop16x9.652w.png',
                name: 'Tracker',
                description: 'See tracks left behind by your foes.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-bloodhound.png.adapt.crop16x9.652w.png',
                name: 'Beast of the Hunt',
                description: 'Enhances your senses, allowing  you move faster  and highlighting your prey.'
            }
        ]
    },

    {
        id: 3,
        name: 'Caustic',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-caustic.png.adapt.crop16x9.png',
        lure: "I don't concern myself with the ambitions of insects.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-caustic.png.adapt.crop16x9.652w.png',
                name: 'Nox Gas Trap',
                description:'Drop canisters that release deadly Nox gas when shot or triggered by  enemies.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-caustic.png.adapt.crop16x9.652w.png',
                name: 'Nox Vision',
                description: 'Allows you to see enemies through your gas.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-caustic.png.adapt.crop16x9.652w.png',
                name: 'Nox Gas Grenade',
                description: 'Blankets a large area in Nox Gas.'
            }
        ]
    },

    {
        id: 4,
        name: 'Crypto',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-crypto.png.adapt.crop16x9.png',
        lure: "It’s hard to be scared when you’re prepared.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-crypto.png.adapt.crop16x9.652w.png',
                name: 'Surveillance Drone',
                description:'Deploy an aerial drone that allows you to view the surrounding area from above. If the drone is destroyed, there is a forty-second cooldown before you can deploy another.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-crypto.png.adapt.crop16x9.652w.png',
                name: 'Neurolink',
                description: 'Enemies detected by the Surveillance Drone within 30 meters of your position are marked for you and your teammates to see.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-crypto.png.adapt.crop16x9.652w.png',
                name: 'Drone EMP',
                description: 'Your Surveillance Drone sets off an EMP blast that deals shield damage, slows enemies, and disables traps.'
            }
        ]
    },

    {
        id: 5,
        name: 'Fuse',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/01/apex-grid-tile-legends-fuse.png.adapt.crop16x9.png',
        lure: "If there’s dirty deeds to do, I’ll do ‘em dirt cheap.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/season-8/fuse-page/apex-grid-tile-legends-abilities-tactical-fuse.png.adapt.crop16x9.652w.png',
                name: 'Knuckle Cluster',
                description:' Launch a  cluster bomb that continuously expels airbust explosives on impact.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/season-8/fuse-page/apex-grid-tile-legends-abilities-passive-fuse.png.adapt.crop16x9.652w.png',
                name: 'Grenadier',
                description: 'Stack an extra grenade per inventory slot. Fire grenades farther, faster, and more accurately.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/season-8/fuse-page/apex-grid-tile-legends-abilities-ultimate-fuse.png.adapt.crop16x9.652w.png',
                name: 'The Motherlode',
                description: 'Launch a bombardment that encircles a target area in a wall of flame.'
            }
        ]
    },

    {
        id: 6,
        name: 'Gibraltar',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-gibraltar.png.adapt.crop16x9.png',
        lure: "Try to move me; it'll be fun.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-gibraltar.png.adapt.crop16x9.652w.png',
                name: 'Dome of Protection',
                description:'Throw down a dome shield that blocks attacks.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-gibraltar.png.adapt.crop16x9.652w.png',
                name: 'Gun Shield',
                description: 'Aiming down sights deploys a gun shield that blocks incoming fire.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-gibraltar.png.adapt.crop16x9.652w.png',
                name: 'Defensive Bombardment',
                description: 'Call in a concentrated mortar strike on a marked position.'
            }
        ]
    },

    {
        id: 7,
        name: 'Horizon',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/horizon/apex-grid-tile-legends-horizon.png.adapt.crop16x9.png',
        lure: "Let’s have a wee play with the laws of physics, shall we?",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/horizon/apex-grid-tile-legends-abilities-tactical-horizon.png.adapt.crop16x9.652w.png',
                name: 'Gravity Lift',
                description:''
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/horizon/apex-grid-tile-legends-abilities-passive-horizon.png.adapt.crop16x9.652w.png',
                name: 'Spacewalk',
                description: "Increase air control and reduce fall impacts with Horizon's custom spacesuit." 
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/horizon/apex-grid-tile-legends-abilities-ultimate-horizon.png.adapt.crop16x9.652w.png',
                name: 'Black Hole',
                description: 'Deploy N.E.W.T to create a micro black hole that pulls players in towards it, and hits them with a graviton blast at the end.'
            }
        ]
    },

    {
        id: 8,
        name: 'Lifeline',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-lifeline.png.adapt.crop16x9.png',
        lure: "Never quit. That's how you win.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-lifeline.png.adapt.crop16x9.652w.png',
                name: 'D.O.C Heal Drone',
                description:'Call your Drone of Compassion to automatically heal nearby teammates over time.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-lifeline.png.adapt.crop16x9.652w.png',
                name: 'Combat Medic',
                description: 'Deploy D.O.C to revive teammates, leaving you free to move and defend.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-lifeline.png.adapt.crop16x9.652w.png',
                name: 'Care Package',
                description: 'Call in a drop pod full of high-quality defensive gear.'
            }
        ]
    },

    {
        id: 9,
        name: 'Loba',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/05/apex-grid-tile-legends-loba.png.adapt.crop16x9.png',
        lure: "There's a certain elegance to combat. I'll show you.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/05/apex-grid-tile-legends-abilities-tactical-loba.png.adapt.crop16x9.652w.png',
                name: "Burglar's Best Friend",
                description:'Teleport to hard-to-reach places or escape trouble quickly by throwing your Jump Drive bracelet.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/05/apex-grid-tile-legends-abilities-passive-loba.png.adapt.crop16x9.652w.png',
                name: 'Eye of Quality',
                description: 'Nearby epic and legendary look can be seen through walls. The randge is the same as Black Market Boutique'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/05/apex-grid-tile-legends-abilities-ultimate-loba.png.adapt.crop16x9.652w.png',
                name: 'Black Market Boutique',
                description: 'Place a portable device that allows you to teleport nearby loot to your inventory. Each friendly or enemy Legend can take up to two items.'
            }
        ]
    },

    {
        id: 10,
        name: 'Mad Maggie',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/mad-maggie/apex-grid-tile-legends-maggie.png.adapt.crop16x9.png',
        lure: "I'm gonna make this world bleed.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/mad-maggie/apex-grid-tile-legends-abilities-tactical-maggie.png.adapt.crop16x9.652w.png',
                name: 'Riot Drill',
                description:'Fire a drill that burns enemies through obstacles.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/mad-maggie/apex-grid-tile-legends-abilities-passive-maggie.png.adapt.crop16x9.652w.png',
                name: "Warlord's Ire",
                description: "Temporarily highlight enemies you've damaged, and move faster with a shotgun."
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/mad-maggie/apex-grid-tile-legends-abilities-ultimate-maggie.png.adapt.crop16x9.652w.png',
                name: 'Wrecking Ball',
                description: 'Throw a ball that releases speed-boosting pads and detonates near enemies.'
            }
        ]
    },

    {
        id: 11,
        name: 'Mirage',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-mirage.png.adapt.crop16x9.png',
        lure: "I don't take myself too seriously. I don't take myself anywhere. I need to get out more.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-mirage.png.adapt.crop16x9.652w.png',
                name: 'Psyche Out',
                description:'Send out a holographic decoy to confuse the enemy.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-mirage.png.adapt.crop16x9.652w.png',
                name: 'Now You See Me...',
                description: 'Automatically cloak when using Respawn Beacons and revivng teammates.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-mirage.png.adapt.crop16x9.652w.png',
                name: 'Life of the Party',
                description: 'Deploy a team of Decoys to distract enemies.'
            }
        ]
    },

    {
        id: 12,
        name: 'Octane',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-octane.png.adapt.crop16x9.png',
        lure: 'Whoa . . . what a rush!',
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-octane.png.adapt.crop16x9.652w.png',
                name: 'Stim',
                description:'Move 30% faster for six seconds. Costs health to use.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-octane.png.adapt.crop16x9.652w.png',
                name: 'Swift Mend',
                description: 'Automatically restores health over time.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-octane.png.adapt.crop16x9.652w.png',
                name: 'Launch Pad',
                description: 'Deploy a jump pad that catapults teammates through the air.'
            }
        ]
    },

    {
        id: 13,
        name: 'Pathfinder',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-pathfinder.png.adapt.crop16x9.png',
        lure: "Losing isn't fun. That's why I don't do it.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-pathfinder.png.adapt.crop16x9.652w.png',
                name: 'Grappling Hook',
                description:'Grapple to get to out-of-reach places quickly.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-pathfinder.png.adapt.crop16x9.652w.png',
                name: 'Insider Knowledge',
                description: "Scan a survey beacon to reveal the ring's next location." 
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-pathfinder.png.adapt.crop16x9.652w.png',
                name: 'Zipline Gun',
                description: 'Create a zipline for everyone to use.'
            }
        ]
    },

    {
        id: 14,
        name: 'Rampart',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/08/rampart/apex-grid-tile-legends-rampart.png.adapt.crop16x9.png',
        lure: "If I ever let you down, it’s probably because I grew a bit tired of carrying you.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/08/rampart/apex-grid-tile-legends-abilities-tactical-rampart.png.adapt.crop16x9.652w.png',
                name: 'Amped Cover',
                description:'Build a crouch-cover wall, which deloys a full-cover amped wall that blocks incoming shots and amps outgoing shots.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/08/rampart/apex-grid-tile-legends-abilities-passive-rampart.png.adapt.crop16x9.652w.png',
                name: 'Modded Loader',
                description: 'Increased magazine capacity and faster reloads when using LMGs and the Minigun.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/08/rampart/apex-grid-tile-legends-abilities-ultimate-rampart.png.adapt.crop16x9.652w.png',
                name: 'Emplaced Minigun "Sheila"',
                description: 'Place a mounted machine gun that anyone can use. High ammo capacity, long reload time.'
            }
        ]
    },

    {
        id: 15,
        name: 'Revenant',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/02/apex-legend-revenant-grid-tile.png.adapt.crop16x9.png',
        lure: "I’ve seen the other side, Skinbag. There is nothing. You are nothing.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/02/revenant-assets/tactical-revenant.png.adapt.crop16x9.652w.png',
                name: 'Silence',
                description:'Throw a device that deals damage and disables enemy abilities.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/02/revenant-assets/passive-revenant.png.adapt.crop16x9.652w.png',
                name: 'Stalker',
                description: 'You crouch-walk faster and can climb higher that other legends.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/02/revenant-assets/ultimate-revenant.png.adapt.crop16x9.652w.png',
                name: 'Death Totem',
                description: 'Drop a totem that protects those who use it from death for a set amount of time. Instead of being killed or drowned, users will return to the totem.'
            }
        ]
    },

    {
        id: 16,
        name: 'Seer',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/seer-assets/apex-grid-tile-legends-seer.png.adapt.crop16x9.png',
        lure: "If they stare, give them something to see.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/seer-assets/apex-grid-tile-legends-abilities-tactical-seer.png.adapt.crop16x9.652w.png',
                name: 'Focus of Attention',
                description:'Seer summons his micro-drones to emit a deplayed blast that goes through w alls interrupting and revealing enemies.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/seer-assets/apex-grid-tile-legends-abilities-passive-seer.png.adapt.crop16x9.652w.png',
                name: 'Heart Seeker',
                description: 'Hear and visualize the heartbeats of nearby enemies when aiming down sights.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/07/seer-assets/apex-grid-tile-legends-abilities-ultimate-seer.png.adapt.crop16x9.652w.png',
                name: 'Exhibit',
                description: 'Create a sphere of miccro-drones that reveal the location of enemies moving quickly or firing their weapons within.'
            }
        ]
    },

    {
        id: 17,
        name: 'Valkyrie',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/04/apex-grid-tile-legends-valkyrie.png.adapt.crop16x9.png',
        lure: 'The skies belong to me now.',
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/04/apex-grid-tile-legends-abilities-tactical-valkyrie.png.adapt.crop16x9.652w.png',
                name: 'Missile Swarm',
                description:'Fire a swarm of mini-rockets that damage and disorient the enemy.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/04/apex-grid-tile-legends-abilities-passive-valkyrie.png.adapt.crop16x9.652w.png',
                name: 'VTOL Jets',
                description: 'Use jetpack to fly. Fuel is limited but refills overtime.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2021/04/apex-grid-tile-legends-abilities-ultimate-valkyrie.png.adapt.crop16x9.652w.png',
                name: 'Skyward Dive',
                description: 'Launch into the air and sky dive. Allies can hook into take-off systems to join you.'
            }
        ]
    },

    {
        id: 18,
        name: 'Wattson',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wattson.png.adapt.crop16x9.png',
        lure: 'Power is everything. You only think you have it.',
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-wattson.png.adapt.crop16x9.652w.png',
                name: 'Perimeter Security',
                description:'Connects nodes to create electrified fences that damange  and slow enemies.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-wattson.png.adapt.crop16x9.652w.png',
                name: 'Spark of Genius',
                description: 'Ultimate Accelerats fully charge your Ultimate Ability.'
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-wattson.png.adapt.crop16x9.652w.png',
                name: 'Interception Pylon',
                description: 'Place an electrified pylon that destorys incoming ordnance and repairs damaged shields.'
            }
        ]
    },

    {
        id: 19,
        name: 'Wraith',
        imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-character-tiles/apex-grid-tile-legends-wraith.png.adapt.crop16x9.png',
        lure: "There’s a thin line between life and death. You’ll find me there.",
        tactical: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-tactical-wraith.png.adapt.crop16x9.652w.png',
                name: 'Into the Void',
                description:'Reposition quickly through the safety of void space, avoiding all damage.'
            }
        ],
        passive:[
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-passive-wraith.png.adapt.crop16x9.652w.png',
                name: 'Voices from the Void',
                description: "A voice warns you when danger approaches. As far as you can tell, it's on your side." 
            }
        ],
        ultimate: [
            {
                imgAddress: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/ability-icons/apex-grid-tile-legends-abilities-ultimate-wraith.png.adapt.crop16x9.652w.png',
                name: 'Dimensional Rift',
                description: 'Link two locations with portals for 60 seconds, allowing your entire team to use them.'
            }
        ]
    }

    
]

module.exports = {legends}