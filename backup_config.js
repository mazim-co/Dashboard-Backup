
let config = {
	address: "0.0.0.0",	// Address to listen on, can be:
				// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
				// - another specific IPv4/6 to listen on a specific interface
				// - "0.0.0.0", "::" to listen on any interface
				// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 		// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
				// you must set the sub path here. basePath must end with a /
	ipWhitelist: [], 	// Set [] to allow all IP addresses
				// or add a specific IPv4 of 192.168.1.5 :
				// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
				// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
				// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 	// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "de", 	// Language code, only one value. (e.g. "es", "nl", "fr") 
	locale: "de-DE", 	// Country
	logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	// starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	
	modules: [

//** Wallpaper
		{
		module: "MMM-Wallpaper",
		position: "fullscreen_below",
		config: {
			source: "bing", // Source options ("bing", "firetv", "chromecast")
			slideInterval: 300 * 1000, // Change slides every 5 minute		          
			}
		},


//** Uhr & Datum 	
		{
		module: "clock", // Default module
		position: "top_left"
		},


//** Countdown
		{
		module: 'MMM-CountDown',
		position: "top_left",
		config: {
				event: "🐣 Unser Baby",
				date: "2021-11-27 05:00", // Ereignis Tag und Zeit
				showHours: true,
				showMinutes: true,
				showSeconds: false,
				customInterval: 1000,
				daysLabel: ' Tage ',
				hoursLabel: ' Stunden ',
				minutesLabel: ' Minuten',
				secondsLabel: 'Sekunden',
            		}
        	},
		

//** Wettervorschau	 
		{
		module: "MMM-OpenWeatherForecast",
		//header: "Wetter Berlin", // Optional header
		position: "top_right",
		classes: "default everyone", 
		disabled: false,
		config: {
			apikey: "xxxxAPIKEYxxxx",
			latitude: "52.xxxxxx", 
			longitude: "13.xxxxxx",      
			iconset: "2c",
			concise: true,
			showWind: false,
			displayKmhForWind: true,
			animatedIconStartDelay: 2000,
			label_timeFormat: "HH:mm",
			forecastLayout: "tiled",
			forecastHeaderText: "",
			label_sunriseTimeFormat: "HH:mm",
			maxHourliesToShow: 0,
			maxDailiesToShow: 4,
			label_days: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
			}
		},		
		

//** Familienkalender
		{
		module: "MMM-MyCalendar",
		header: "Familienkalender",
		position: "top_left",
		config: {
			maximumEntries: 16,
			maxTitleLength: 50,
			fade: false,
			dateFormat: "DD MMMM",
			timeFormat: "HH:mm",
			joiningWord: "um",
				calendars:[
				{
				symbol: "calendar-check",
				url: "https://calendar.google.com/calendar/ical/XXXXXXXX/public/basic.ics"
				}
				],		
			}
		},

//** NINA Warnungen
		{
		module: "MMM-NINA",
		header: "NINA Warnungen Berlin",
		position: "top_right",
		config: {
			ags: "110000000000",
			maxAgeInHours: 6,
			mergeAlerts: false,
			showIcon: true,
			showNoWarning: true,
			updateIntervalInSeconds: 10800, // 3 Stunden
			}
		 },


//** Öfflentliche Verkehrsmittel - Abfahrten
		{
		module: "MMM-PublicTransportHafas",
		position: "top_right",
			config: {
				// Departures options
				stationID: "XXXXX",              
				stationName: "XXXXX",  
				direction: "",                    // Show only departures heading to this station. (A station ID.)
				excludedTransportationTypes: [],  // Which transportation types should not be shown on the mirror? (comma-separated list of types) possible values: "tram", "bus", "suburban", "subway", "regional" and "national"
				ignoredLines: [],                 // Which lines should be ignored? (comma-separated list of line names)
				timeToStation: 7,
				//timeInFuture: 40,                // How long do you need to walk to the next Station?

				// Look and Feel
				showAbsoluteTime: true,
				displayLastUpdate: false,           // Display the last time of module update.
				maxUnreachableDepartures: 2,      // How many unreachable departures should be shown?
				maxReachableDepartures: 3,        // How many reachable departures should be shown?
				showColoredLineSymbols: true,     // Want colored line symbols?
				customLineStyles: "berlin",       // Prefix for the name of the custom css file. ex: Leipzig-lines.css (case sensitive)
				showOnlyLineNumbers: true,       // Display only the line number instead of the complete name, i. e. "11" instead of "STR 11"
				showTableHeadersAsSymbols: true,  // Table Headers as symbols or text?
				useColorForRealtimeInfo: true,    // Want colored real time information (timeToStation, early)?
				tableHeaderOrder: [ "line", "direction", "time" ]
				}
			},

//** Spritpreise
		{
		module: "MMM-Fuel",
		position: "top_right",
		config: {
			api_key: "xxxxAPIKEYxxxx",
			lat: 52.000000,
			lng: 13.000000,
			types: ["e10"],
			radius: 4,
			max: 3,
			rotate: true,
			shortenText: 20,
			showAddress: false,
			iconHeader: false,
			}
		},

//** MyVolvo	

{
  module: "MMM-MyVolvo",
  header: "Volvo V60 T4",
  position: "top_right",
	config: {
		display: {
			info: false,
			graphic: "v60-2.png",
			status: true,
			notice: false,
			trip: true,
			}				
		},
},



//** Einkaufsliste	
		{
		module: 'MMM-Todoist',
		position: 'top_right',	
		header: '🛍️ Einkaufsliste', 
		
		config: {
			accessToken: 'xxxxACCESSTOKENxxxx',
			maximumEntries: 30,
			updateInterval: 10 * 60 * 1000, // Update every 10 minutes
			wrapEvents: true,		
			fade: false,
			showProject: false,	
			projects: [ 222XXXXX30 ], 
			labels: [ "MagicMirror", "Important" ] // Tasks for any projects with these labels will be shown.
			}
		},	
		//** TwitterTrends
{
		module: 'MMM-TwitterTrendsByPlace',
		position: 'top_right',
		
		config: {
		
			consumer_key: 'XXXX',
			consumer_secret: 'XXXX',
			access_token_key: 'XXXX',
			access_token_secret: 'XXXXXX',
		// set the display name/title for the place		
			placeName: ' ',
		// set the woeid for the place, see documentation for more
		// http://woeid.rosselliot.co.nz/lookup/
			placeWoeid: '638242', //woeID Berlin
			showTrendRank: false,
			showTweetVolume: false
		}
	},	
	

//** Stundenplan
		{ 
		module: "MMM-GoogleSheets", 
		header: "Stundenplan Schule", 
		position: "top_left", 
		config: { 
			url: "https://script.google.com/macros/s/XXXXXXX/exec", 
			sheet: "Sheet1", 
			range: "A1:H12",
			cellStyle: "invert",
			stylesFromSheet: ["text-align", "color"],
			customStyles: ["font-size: 12px", "padding: 3px"],
			headerStyles: ["font-weight: bold"],
			styleFunc: (rowNum, colNum, cellProps) => {if(rowNum%2 == 0){return "background-color:#b4b4b42e;"}}
			}
		},




//** PIR Sensor
		{
		module: 'EXT-Screen',
		position: 'top_left',
		configDeepMerge: true,
		config: {
				delay: 8 * 60 * 1000, // 8 Minutes
				animateBody: false,
				displayBar: false,
				displayLastPresence: false,
				}
		},	
		
		{
		module: 'EXT-Pir',
		config: {
			debug: false,
			gpio: 27,
			reverseValue: false
				}
		},

	
//** Update Notification for Dashboard	
		{
		module: "updatenotification",
		position: "top_right",	// This can be any of the regions.
		config: {}
		},

		
//** Spotify
		{
		module: "MMM-NowPlayingOnSpotify",
		header: "Spotify",
		position: "top_right",
		config: {
			clientID: "XXX",
			clientSecret: "XXX",
			accessToken: "XXXXXX",
			refreshToken: "XX-XXX-XXXX"
			}
		},


//** NEWSAPI
		{
		module: "MMM-NewsAPI",
		header: "Nachrichten",
		position: "top_right",
		config: {
			apiKey: "XXXXX",
			debug: true,
			choice: "everything",
			pageSize: 30,
			sortBy: "publishedAt",
			drawInterval: 1000*30, // 30 sec
			fetchInterval: 1000*30*60, // 30 min
			query: {
				country: "",
				category: "",
				q: "",
				qInTitle: "",
				sources: "",
				domains: "tagesspiegel,morgenpost.de,rbb24.de,tagesschau.de",
				excludeDomains: "",
				language: ""
				}
			}
		},	


 ///*** END
	]
};


/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
