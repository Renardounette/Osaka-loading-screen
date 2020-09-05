//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "";

// Center logo?
// 'true' or 'false'
var l_centerLogo = true;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
	"9.jpg",
	"10.jpg",
	"11.jpeg",
	"12.jpeg"
];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "2.ogg", name: "The Forest"},
	{ogg: "3.ogg", name: "Rooftop Chase I FB"},
	{ogg: "1.ogg", name: "AShamaluevMusic"},
	{ogg: "4.ogg", name: "Jacob's Bakery"},
	{ogg: "5.ogg", name: "A Wrench In The Works I WD"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 20;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"L'expansion de la magie est un serveur basé sur l'univers de la magie.",
	"Le serveur est situé dans les années 1950 à Londres.",
	"Retrouvez-donc pleins d'animaux fantastiques d'exceptions et",
	"Vous souhaitez chnager le monde et le rendre protégé ? Rejoignez le ministère.",
	"Vous souhazitez éliminer les sorciers 'impurs' ? Rejoignez le culte de salem ou le groupe de Grindelwald !",
	"Il n’y a pas d’étranges créatures, seulement des gens ignorants.",
	"Être désavoué par des lâches fait la grandeur des braves.",
	"On vous donne à peine 375 ans…",
	"J’ai pour philosophie que s’inquiéter, c’est souffrir deux fois.",
	"Je jure solennellement que mes intentions sont mauvaises.",
	"Mais vous savez, on peut trouver du bonheur même dans les endroits les plus sombres. Il suffit de se souvenir d’allumer la lumière.",
	"J’ai toujours été fier du talent que je possède pour tourner des phrases. Et les mots sont à mon avis, qui n’est pas si humble, notre plus inépuisable source de magie. Ils peuvent à la fois infliger des blessures et y porter remède.",
	"Quand nous rêvons, nous entrons dans un monde qui n’appartient qu’à nous. ",
	"Pour un esprit équilibré, la mort n’est qu’une grande aventure de plus. ",
	"Les choses finissent toujours pas revenir, mais pas toujours de la manière qu’on croit.",
	"Tu n’es pas quelqu’un de mauvais. Tu es quelqu’un de bon à qui il est arrivé de mauvaises choses. ",
	"La parole d’un enfant aussi sincère soit-elle n’a pas de sens pour qui ne sait pas écouter.",
	"Tout homme s’enrichit quand abonde l’esprit."
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = false;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};