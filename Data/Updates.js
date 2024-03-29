AddUpdate("Version: Minor improvements", "Theta &Theta;v0.6.227", `
Whats new?

// Index.html
    - Main Menu
        - New play button
            - No longer pixelated
            - Text in the center, "Prosody"
            - Expands into transition to song select
        - Nicer looking song selection button (the main button)
            - Lights up even more when hovered over
        - Changelog (shows newest and all previous updates)
    - Nice transition into song select

// Song select
    - Charts with multiple difficulties no longer restart the song from the preview point
    - Nicer song selection buttons
        - Zooms in on background on hover and even further when selected
        - Background shown on button
        - Title and info floats to the left
            - Background for contrast
    - Charts are now retrieved from the server
    - Opening transition
    - Temporary context menu, does nothing yet
    - Fades out of transition to song select
        - Loading progress bar, showing how close till all charts being loaded
            - Mainly so you know if there's an error and you have to reload
    - Songs now support multiple difficulties (WIP)
    - Updated difficulty Calculator (tries to account for stamina)
    - Working search bar
        - Searching finds some things in a chart that has whatever was typed in (Song Name, Artist, Creator, Tags)
        - Allows for dynamic/equational searching (IE. BPM = 170 returns all maps where the chart's BPM is 170)
            - \"BPM = x\"
            - \"ID = x\"
        - Search bar doesnt require to be selected in order to be typed in
    - Somewhat nicer info panel
    - Less static feeling menu
        - Background pulses to BPM
        - Title hase dark transparent background
    - Added back button to return to the main menu
    - Two new songs to play until I get songs to load from a server (server now works these are just for the update ig)
        - Spatium Cursu
        - Bad Apple!!
        - BONUS: The Pathbreaking has an easier diff now

// Gameplay
    - New info panel design
        - Centered in the middle of the screen
        - Removed panel to the left
        - Better organization 
    - Rate mode keybinds
        - ctrl + + increases rate by .1
        - ctrl + - decreases rate by .1
        - ctrl + shift + + increases rate by .05
        - ctrl + shift + - decreases rate by .05
    - Removed background rotation
    - Scroll speed is now closer to other rhythm games (osu! & Quaver)
    - Rank
        - Most no longer pixelated
    - Song progress bar
    - Results now come up after the last note is hit rather then when the song ends
    - When starting the keybinds are shown above the note hitters
    - Improved chart playability
        - Cursor is now invisible when the song is playing to reduce distracting, or frgamentation of playfield
        - Notes (specifically noticable on Cyberspace Abyss) can no longer been seen at the start of the chart
        - 3 second wait time before notes start rolling in (This also help reduce lag from the beginning of a chart)
        - Notes move and try to estimate their starting position so it doesn't look weird (So I don't have to have the notes teleport to their position when the song starts)
        - Only 20 notes positions are updated at a time, the others are left alone. (HUGE PERFORMANCE BOOST)
        - Hit sounds have been added
    - Rotating BG option was removed (May be added later once it's more fleshed out)
    - Tweaked judgement ranges (no more mashing)
    - Correct keybinds are now shown in the menu panel
    - New value calculation system
    - Adjusted score system (subject to change)

// Editor
    - In the help menu Split Trills now has the correct reference image
    - Charts now save differently (Charts made before this update will not work)
    - Fixed editor (Again)
        - Chart can successfully be Imported
        - Tags no longer take up 90% (exaggeration) of the file size
            - Issue bc it kept re-adding tags to the tage list ever time the Json was updated, and for some reason counted blank or space characters

// Login/Registry
    - Login or register to you account
        - Register creates and account
            - Can be viewed at https://prosody-server.schiytu37.repl.co/profiles/user.html?user=USERNAME change the last parameter to user= your username, replace any spaces with _
    - Submit scores and view your profile stats
`)
AddUpdate("Version: Chart Selecting & Editing", "Epsilon &#949;v0.5.150 (5.29.2023)", "\nWhats new?\n\n// Index.html\n    - Main Menu\n        - Access to editor and song selecting\n        - Bouncing Icon of the game (It will have background audio and will sync with that BGM, I just don't have anything yet)\n        - Other buttons showing what will be expected in the future of prosody\n\n// Song select\n    - Better song select\n        - Blurred background and mini banner in the top left\n        - Dynamic song selection\n            - Use arrow keys to navigate the song selector ( &lt;- Up || /\\ Up || \\/ Down || -&gt; Down)\n            - Audio plays from preview point\n    - Chart info\n        - Difficulty (Diff calculation will be adjusted later)\n        - Total notes / Max combo\n        - BPM (Audio's beats per minute)\n        - NPS (Chart's notes per second)\n    - Leaderboard (Doesn't show user scores... yet)\n        - Shows people who worked on the game and did something notable or has been helping with it. (and contains some extra info on what they did to get there)\n\n// Gameplay\n    - Optimized notes (Charts can now support up to 3-4x the notes -&gt; ~700 to ~3000 (Depends on computer and browser))\n    - Improved score panel\n        - Shows chart information (Ie. Artist, Creator, Etc.)\n\n// Editor\n    - Fixed editor\n        - Json now is correctly shown and doesn't mess up when you place notes out of order\n        - Json no longer visible / Json replaced with files\n        - Chart can be Imported and Exported from and into a file\n    - More editor options\n        - Tags (Will be used for searching for charts when I get around to it)\n        - Description (To add more information about the chart. What patterns does it contain? Any fun facts about this chart, song, or anything else? how many charts have you made and which one is this? Etc.)\n        - Preview point (Where the song will start when in song selector -&gt; Usually the besy or most catchy part to hook someone into playing the chart)\n        - Chart testing (Opens a new tab where you can play the chart just like any other chart)\n    - Criteria (This either lists the limitations to avoid errors when mapping so that it can be tested, or what is overall bad in charting)\n        - File size (limit 5mb, files larger than this won't work on some browsers and this is to limit the size it'll take up when I make a server hosting these charts)\n\nThere are probably more changes, I changed/fixed/added A LOT. Sorry if I missed anything.\n                ")
AddUpdate("Version: Editor & Menu", "Epsilon &#949;v0.4.111 (5.8.2023)", "\nAdded:\n    - Menu screen\n        - Nice background\n        - Songs selection that load from JSON of all charts\n        - Temporary menu bars\n            - Editor\n            - Search\n            - Profile\n    - Attempted mobile support (may or may not work :/)\n    - Editor\n        - 2 Pre selected maps that auto fill metadata, timings, and offsets.\n            - Inaji - The Pathbreaking\n            - Cyphe Mercury (me) - Cyberspace Abyss\n        - Json converter (to use in expirimental) (can be broken easily/ map might not reflect from editor to play field...)\n            - If you like a map you made DM me the JSON for it, and I might add it to the game, songs won't get their own update, but will be added as soon as they possible if they are good enough.\n        - Scroll editor, click to toggle notes\n    - Improved note renderer and reader. (helps with better understanding of JSON and editor)\n    - Adjusted score calculation and judgement ranges\n    - better keybind adjustments\n    - Slight optimizations\n    - esc button leaves any menu to go to the main menu, except ofc the main menu itself\n        - Editor prompts you to save your work (ie, save it to a text file or something) before leaving to the main menu\n                ")
AddUpdate("Version: Visuals & Apprehension", "Omega &Omega;v0.3.81 (3.18.2023)", "\nAdded:\n    - Screen scaling (Game now fits to any screen)\n    - Background\n        - Concept idea similar to SDVX (Kinda) (Optional)\n        - BG Dim (In-case you don't like the background)\n    - Results Ranks Images\n        - Score\n            - PC+ - Perfect+ Combo\n            - PC - Perfect Combo\n            - FC - Full Combo\n            - C - Clear\n            - F - Fail\n        - Accuracy // Plan to add S just got lazy hehe\n            - EX\n            - A\n            - B\n            - C\n    - Friendlier Hit timings and judgement weights\n    - Pausing (Game can now be paused!!)\n                ")
AddUpdate("Version: Scoring and more", "Omega &Omega;v0.2.? (3.14.2023)", `\nAdded:\n    - New Default chart\n    - Music now plays to the game\n    - Note sync with BPM\n    - Improved UI\n    - combo\n    - 1 Mod\n        - Switch (Switches the scroll direction every 0.5-2 seconds I forget)\n    - More stuff in setting panel\n        - Upscroll (Inverts the direction the notes tend toward)\n        - Force reset (Reloads the map, but in some situations can reset other stuff aswell)\n        - Map JSON (You can edit the map, copy paste it to someone else and they can try, the song option accepts url .mp3 file)\n        - How to play\n        - Discord link\n    - Scores now expand when hovering over them\n    - Real time accuracy and combo dislpay\n    - Results Screen\n        - Shows play stats\n            - These include: Perfects+, Perfects, Goods, Bads, Misses Amounts\n            - Score, accuracy, and a work in progress display for Value\n            - Any mods that were used\n            - Hit error board!\n            - Restart button\n      \nFixed:\n    - "Auto mod is now a god" other than the fun rhyming there, auto mod no longer gets overwhelmed with dense maps\n    - Better performance\n    - Scroll speed adjuster\n    - Hit error bar\n    - Level percent tracker\n    - Temp scoreboard with no real purpose other than being able to compare your score to my best\n\nNote:\nUpdates are no longer real time. The game is being coded in a different branch, but it will merge when I think it's at its next milestone or notable feature\n                `)
AddUpdate("Version: Omega Initialization", "Omega &Omega;v0.1.1 (3.8.2023)", '\nAdded:\n    - Playable gameplay\n    - 2 Mods\n        - Auto Mod (Plays the map for you)\n        - Rate Mod (Speed at which the map plays)\n    - Key mapping\n    - Reloading Map (can also quick reload with ` key)\n    - Playfield Offset option\n    - Scroll speed adjuster\n    - Hit error bar\n    - Level percent tracker\n    - Temp scoreboard with no real purpose other than being able to compare your score to my best\n                ')