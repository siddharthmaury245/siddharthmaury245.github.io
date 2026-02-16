/* PROJECT: VORTEX SUITE
   DEVELOPER: SIDDHARTH (NEXACORE)
   VERSION: 7.0 (ULTIMATE EDITION - 150+ APPS & ROBUST IMAGES)
*/

// --- 1. THE MASSIVE DATABASE (150+ APPS) ---
const appData = [
    {
        "id": "browsers",
        "category": "Web Browsers",
        "items": [
            { "id": "Google.Chrome", "name": "Google Chrome", "logoUrl": ["https://cdn.simpleicons.org/googlechrome/4285F4", "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg"] },
            { "id": "Mozilla.Firefox", "name": "Firefox", "logoUrl": ["https://cdn.simpleicons.org/firefox/FF7139", "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg"] },
            { "id": "Microsoft.Edge", "name": "Microsoft Edge", "logoUrl": ["https://cdn.simpleicons.org/microsoftedge/0078D7", "https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg"] },
            { "id": "Brave.Brave", "name": "Brave", "logoUrl": ["https://cdn.simpleicons.org/brave/FB542B", "https://upload.wikimedia.org/wikipedia/commons/5/51/Brave_icon_lionface.png"] },
            { "id": "Opera.Opera", "name": "Opera", "logoUrl": ["https://cdn.simpleicons.org/opera/FF1B2D", "https://upload.wikimedia.org/wikipedia/commons/4/49/Opera_2015_icon.svg"] },
            { "id": "Opera.OperaGX", "name": "Opera GX", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/f/f2/Opera_GX_Logo.svg", "https://cdn.icon-icons.com/icons2/3053/PNG/512/opera_gx_macos_bigsur_icon_189606.png"] },
            { "id": "Vivaldi.Vivaldi", "name": "Vivaldi", "logoUrl": ["https://cdn.simpleicons.org/vivaldi/EF3939", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Vivaldi_browser_logo.svg/1024px-Vivaldi_browser_logo.svg.png"] },
            { "id": "TorProject.TorBrowser", "name": "Tor Browser", "logoUrl": ["https://cdn.simpleicons.org/torbrowser/7D4698", "https://upload.wikimedia.org/wikipedia/commons/1/15/Tor-logo-2011-flat.svg"] },
            { "id": "LibreWolf.LibreWolf", "name": "LibreWolf", "logoUrl": ["https://librewolf.net/icon.png", "https://upload.wikimedia.org/wikipedia/commons/2/22/LibreWolf_logo.png"] },
            { "id": "Waterfox.Waterfox", "name": "Waterfox", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/9/90/Waterfox_logo.png"] },
            { "id": "Hibbiki.Chromium", "name": "Chromium", "logoUrl": ["https://cdn.simpleicons.org/chromium/2483d6"] },
            { "id": "Arc.Arc", "name": "Arc Browser", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Arc_Browser_logo.svg/1200px-Arc_Browser_logo.svg.png"] }
        ]
    },
    {
        "id": "communication",
        "category": "Communication",
        "items": [
            { "id": "WhatsApp.WhatsApp", "name": "WhatsApp", "logoUrl": ["https://cdn.simpleicons.org/whatsapp/25D366", "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"] },
            { "id": "Telegram.TelegramDesktop", "name": "Telegram", "logoUrl": ["https://cdn.simpleicons.org/telegram/26A5E4", "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"] },
            { "id": "Discord.Discord", "name": "Discord", "logoUrl": ["https://cdn.simpleicons.org/discord/5865F2", "https://upload.wikimedia.org/wikipedia/commons/7/72/Discord_App_Icon.png"] },
            { "id": "Zoom.Zoom", "name": "Zoom", "logoUrl": ["https://cdn.simpleicons.org/zoom/2D8CFF", "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg"] },
            { "id": "Microsoft.Teams", "name": "MS Teams", "logoUrl": ["https://cdn.simpleicons.org/microsoftteams/6264A7", "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg"] },
            { "id": "SlackTechnologies.Slack", "name": "Slack", "logoUrl": ["https://cdn.simpleicons.org/slack/4A154B"] },
            { "id": "Signal.Signal", "name": "Signal", "logoUrl": ["https://cdn.simpleicons.org/signal/3A76F0"] },
            { "id": "Microsoft.Skype", "name": "Skype", "logoUrl": ["https://cdn.simpleicons.org/skype/00AFF0"] },
            { "id": "Element-Desktop.Element", "name": "Element", "logoUrl": ["https://cdn.simpleicons.org/element/0DBD8B"] },
            { "id": "Thunderbird.Thunderbird", "name": "Thunderbird", "logoUrl": ["https://cdn.simpleicons.org/thunderbird/0A84FF"] },
            { "id": "Viber.Viber", "name": "Viber", "logoUrl": ["https://cdn.simpleicons.org/viber/7360f2"] }
        ]
    },
    {
        "id": "gaming",
        "category": "Gaming Clients",
        "items": [
            { "id": "Valve.Steam", "name": "Steam", "logoUrl": ["https://cdn.simpleicons.org/steam/000000", "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg"] },
            { "id": "EpicGames.EpicGamesLauncher", "name": "Epic Games", "logoUrl": ["https://cdn.simpleicons.org/epicgames/313131", "https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg"] },
            { "id": "Ubisoft.Connect", "name": "Ubisoft", "logoUrl": ["https://cdn.simpleicons.org/ubisoft/000000"] },
            { "id": "GOG.Galaxy", "name": "GOG Galaxy", "logoUrl": ["https://cdn.simpleicons.org/gogdotcom/592c3a"] },
            { "id": "ElectronicArts.EADesktop", "name": "EA App", "logoUrl": ["https://cdn.simpleicons.org/ea/ff4747"] },
            { "id": "Blizzard.BattleNet", "name": "Battle.net", "logoUrl": ["https://cdn.simpleicons.org/battlenet/00aeef"] },
            { "id": "Roblox.Roblox", "name": "Roblox", "logoUrl": ["https://cdn.simpleicons.org/roblox/000000"] },
            { "id": "Mojang.MinecraftLauncher", "name": "Minecraft", "logoUrl": ["https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/minecraft.png", "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"] },
            { "id": "RockstarGames.Launcher", "name": "Rockstar", "logoUrl": ["https://cdn.simpleicons.org/rockstargames/fcaf17"] },
            { "id": "Nvidia.GeForceNow", "name": "GeForce Now", "logoUrl": ["https://cdn.simpleicons.org/nvidia/76B900"] },
            { "id": "ItchIo.ItchIo", "name": "Itch.io", "logoUrl": ["https://cdn.simpleicons.org/itchdotio/fa5c5c"] },
            { "id": "Ludusavi.Ludusavi", "name": "Ludusavi", "logoUrl": ["https://raw.githubusercontent.com/mtkennerly/ludusavi/master/assets/icon.png"] }
        ]
    },
    {
        "id": "media",
        "category": "Media & Streaming",
        "items": [
            { "id": "VideoLAN.VLC", "name": "VLC Player", "logoUrl": ["https://cdn.simpleicons.org/vlcmediaplayer/FF8800"] },
            { "id": "Spotify.Spotify", "name": "Spotify", "logoUrl": ["https://cdn.simpleicons.org/spotify/1DB954"] },
            { "id": "OBSProject.OBSStudio", "name": "OBS Studio", "logoUrl": ["https://cdn.simpleicons.org/obsstudio/302E31"] },
            { "id": "Audacity.Audacity", "name": "Audacity", "logoUrl": ["https://cdn.simpleicons.org/audacity/0000CC"] },
            { "id": "Apple.iTunes", "name": "iTunes", "logoUrl": ["https://cdn.simpleicons.org/itunes/FB5BC5"] },
            { "id": "Daum.PotPlayer", "name": "PotPlayer", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/d/d4/PotPlayer_logo.png"] },
            { "id": "MPC-BE.MPC-BE", "name": "MPC-BE", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/e/e0/MPC-BE_Logo.png"] },
            { "id": "HandBrake.HandBrake", "name": "HandBrake", "logoUrl": ["https://cdn.simpleicons.org/handbrake/F05032"] },
            { "id": "Foobar2000.Foobar2000", "name": "Foobar2000", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/2/26/Foobar2000_logo.png"] },
            { "id": "Amazon.Kindle", "name": "Kindle", "logoUrl": ["https://cdn.simpleicons.org/amazon/FF9900"] },
            { "id": "CodecGuide.K-LiteCodecPack.Full", "name": "K-Lite Codecs", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/f/f3/K-Lite_Codec_Pack_Logo.png"] },
            { "id": "GOMCorp.GOMPlayer", "name": "GOM Player", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/3/30/Gom_player_logo.png"] }
        ]
    },
    {
        "id": "runtimes",
        "category": "System Runtimes (Critical)",
        "items": [
            { "id": "Microsoft.DotNet.DesktopRuntime.8", "name": ".NET 8", "logoUrl": ["https://cdn.simpleicons.org/dotnet/512AC7"] },
            { "id": "Microsoft.DotNet.DesktopRuntime.7", "name": ".NET 7", "logoUrl": ["https://cdn.simpleicons.org/dotnet/512AC7"] },
            { "id": "Microsoft.VCRedist.2015+.x64", "name": "VC++ AIO", "logoUrl": ["https://cdn.simpleicons.org/cplusplus/00599C"] },
            { "id": "Microsoft.DirectX", "name": "DirectX", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/a/a2/DirectX_logo.png"] },
            { "id": "Nvidia.GeForceExperience", "name": "GeForce Exp", "logoUrl": ["https://cdn.simpleicons.org/nvidia/76B900"] },
            { "id": "AMD.Adrenalin", "name": "AMD Adrenalin", "logoUrl": ["https://cdn.simpleicons.org/amd/ED1C24"] },
            { "id": "Oracle.JavaRuntimeEnvironment", "name": "Java 8 JRE", "logoUrl": ["https://cdn.simpleicons.org/openjdk/ffffff"] },
            { "id": "Oracle.JDK.21", "name": "Java JDK 21", "logoUrl": ["https://cdn.simpleicons.org/oracle/F80000"] },
            { "id": "Python.Python.3.12", "name": "Python 3.12", "logoUrl": ["https://cdn.simpleicons.org/python/3776AB"] },
            { "id": "OpenJS.NodeJS", "name": "Node.js", "logoUrl": ["https://cdn.simpleicons.org/nodedotjs/339933"] }
        ]
    },
    {
        "id": "utilities",
        "category": "Utilities & Tools",
        "items": [
            { "id": "7zip.7zip", "name": "7-Zip", "logoUrl": ["https://cdn.simpleicons.org/7zip/000000", "https://upload.wikimedia.org/wikipedia/commons/7/74/7-Zip_app_icon.png"] },
            { "id": "RARLab.WinRAR", "name": "WinRAR", "logoUrl": ["https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/winrar.png"] },
            { "id": "Microsoft.PowerToys", "name": "PowerToys", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/e/ed/Microsoft_PowerToys_icon.svg"] },
            { "id": "Rufus.Rufus", "name": "Rufus", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/c/c2/Rufus_logo.svg"] },
            { "id": "CPUID.CPU-Z", "name": "CPU-Z", "logoUrl": ["https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/cpu-z.png"] },
            { "id": "TechPowerUp.GPU-Z", "name": "GPU-Z", "logoUrl": ["https://upload.wikimedia.org/wikipedia/en/2/23/TechPowerUp_GPU-Z_logo.png"] },
            { "id": "voidtools.Everything", "name": "Everything", "logoUrl": ["https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/everything.png"] },
            { "id": "TeamViewer.TeamViewer", "name": "TeamViewer", "logoUrl": ["https://cdn.simpleicons.org/teamviewer/3175CB"] },
            { "id": "AnyDeskSoftwareGmbH.AnyDesk", "name": "AnyDesk", "logoUrl": ["https://cdn.simpleicons.org/anydesk/EF443B"] },
            { "id": "BleachBit.BleachBit", "name": "BleachBit", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/b/b3/BleachBit_icon.png"] },
            { "id": "Logitech.OptionsPlus", "name": "Logi Options+", "logoUrl": ["https://cdn.simpleicons.org/logitech/282828"] },
            { "id": "JAMSoftware.TreeSize.Free", "name": "TreeSize", "logoUrl": ["https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/treesize.png"] },
            { "id": "AntibodySoftware.WizTree", "name": "WizTree", "logoUrl": ["https://antibody-software.com/favicon.ico"] },
            { "id": "CodeSector.TeraCopy", "name": "TeraCopy", "logoUrl": ["https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/teracopy.png"] },
            { "id": "AutoHotkey.AutoHotkey", "name": "AutoHotkey", "logoUrl": ["https://cdn.simpleicons.org/autohotkey/334455"] },
            { "id": "Piriform.CCleaner", "name": "CCleaner", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/6/6f/CCleaner.png"] },
            { "id": "Piriform.Speccy", "name": "Speccy", "logoUrl": ["https://upload.wikimedia.org/wikipedia/en/9/91/Speccy_logo.png"] },
            { "id": "Balena.Etcher", "name": "BalenaEtcher", "logoUrl": ["https://cdn.simpleicons.org/etcher/000000"] },
            { "id": "Ventoy.Ventoy", "name": "Ventoy", "logoUrl": ["https://www.ventoy.net/static/img/ventoy.png"] }
        ]
    },
    {
        "id": "office",
        "category": "Office & Productivity",
        "items": [
            { "id": "Notion.Notion", "name": "Notion", "logoUrl": ["https://cdn.simpleicons.org/notion/000000"] },
            { "id": "Evernote.Evernote", "name": "Evernote", "logoUrl": ["https://cdn.simpleicons.org/evernote/00A82D"] },
            { "id": "Adobe.Acrobat.Reader.64-bit", "name": "Adobe Reader", "logoUrl": ["https://cdn.simpleicons.org/adobeacrobatreader/EC1C24"] },
            { "id": "LibreOffice.LibreOffice", "name": "LibreOffice", "logoUrl": ["https://cdn.simpleicons.org/libreoffice/00A000"] },
            { "id": "Kingsoft.WPSOffice", "name": "WPS Office", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/e/e6/WPS_Office_icon.svg"] },
            { "id": "Obsidian.Obsidian", "name": "Obsidian", "logoUrl": ["https://cdn.simpleicons.org/obsidian/483699"] },
            { "id": "Foxit.FoxitReader", "name": "Foxit Reader", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/1/18/Foxit_Reader_icon.png"] },
            { "id": "ShareX.ShareX", "name": "ShareX", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/5/52/ShareX_Logo.svg"] },
            { "id": "NickeManarin.ScreenToGif", "name": "ScreenToGif", "logoUrl": ["https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/screentogif.png"] },
            { "id": "Calibre.Calibre", "name": "Calibre", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/2/23/Calibre_logo.svg"] },
            { "id": "Miro.Miro", "name": "Miro", "logoUrl": ["https://cdn.simpleicons.org/miro/050038"] },
            { "id": "Joplin.Joplin", "name": "Joplin", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/e/ee/Joplin_logo.png"] }
        ]
    },
    {
        "id": "dev",
        "category": "Developer Tools",
        "items": [
            { "id": "Microsoft.VisualStudioCode", "name": "VS Code", "logoUrl": ["https://cdn.simpleicons.org/visualstudiocode/007ACC"] },
            { "id": "Git.Git", "name": "Git", "logoUrl": ["https://cdn.simpleicons.org/git/F05032"] },
            { "id": "Docker.DockerDesktop", "name": "Docker", "logoUrl": ["https://cdn.simpleicons.org/docker/2496ED"] },
            { "id": "JetBrains.IntelliJIDEA.Community", "name": "IntelliJ IDEA", "logoUrl": ["https://cdn.simpleicons.org/intellijidea/000000"] },
            { "id": "JetBrains.PyCharm.Community", "name": "PyCharm", "logoUrl": ["https://cdn.simpleicons.org/pycharm/000000"] },
            { "id": "SublimeHQ.SublimeText.4", "name": "Sublime Text", "logoUrl": ["https://cdn.simpleicons.org/sublimetext/FF9800"] },
            { "id": "Notepad++.Notepad++", "name": "Notepad++", "logoUrl": ["https://cdn.simpleicons.org/notepadplusplus/90E59A"] },
            { "id": "Postman.Postman", "name": "Postman", "logoUrl": ["https://cdn.simpleicons.org/postman/FF6C37"] },
            { "id": "Google.AndroidStudio", "name": "Android Studio", "logoUrl": ["https://cdn.simpleicons.org/androidstudio/3DDC84"] },
            { "id": "GitHub.GitHubDesktop", "name": "GitHub Desktop", "logoUrl": ["https://cdn.simpleicons.org/github/181717"] },
            { "id": "Kitware.CMake", "name": "CMake", "logoUrl": ["https://cdn.simpleicons.org/cmake/064F8C"] },
            { "id": "GoLang.Go", "name": "Go (Golang)", "logoUrl": ["https://cdn.simpleicons.org/go/00ADD8"] },
            { "id": "RustLang.Rustup", "name": "Rust", "logoUrl": ["https://cdn.simpleicons.org/rust/000000"] },
            { "id": "Microsoft.VisualStudio.2022.Community", "name": "Visual Studio", "logoUrl": ["https://cdn.simpleicons.org/visualstudio/5C2D91"] },
            { "id": "Arduino.IDE", "name": "Arduino IDE", "logoUrl": ["https://cdn.simpleicons.org/arduino/00979D"] },
            { "id": "Anaconda.Anaconda3", "name": "Anaconda", "logoUrl": ["https://cdn.simpleicons.org/anaconda/44A833"] }
        ]
    },
    {
        "id": "design",
        "category": "Creative & Design",
        "items": [
            { "id": "GIMP.GIMP", "name": "GIMP", "logoUrl": ["https://cdn.simpleicons.org/gimp/5C5543"] },
            { "id": "BlenderFoundation.Blender", "name": "Blender", "logoUrl": ["https://cdn.simpleicons.org/blender/E87D0D"] },
            { "id": "Inkscape.Inkscape", "name": "Inkscape", "logoUrl": ["https://cdn.simpleicons.org/inkscape/000000"] },
            { "id": "Krita.Krita", "name": "Krita", "logoUrl": ["https://cdn.simpleicons.org/krita/3399CC"] },
            { "id": "Figma.Figma", "name": "Figma", "logoUrl": ["https://cdn.simpleicons.org/figma/F24E1E"] },
            { "id": "Canva.Canva", "name": "Canva", "logoUrl": ["https://cdn.simpleicons.org/canva/00C4CC"] },
            { "id": "dotPDNLLC.paintdotnet", "name": "Paint.NET", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/a/ac/Paint.NET_icon.png"] },
            { "id": "BlackmagicDesign.DaVinciResolve", "name": "DaVinci Resolve", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/DaVinci_Resolve_Studio.png/600px-DaVinci_Resolve_Studio.png"] },
            { "id": "Darktable.Darktable", "name": "Darktable", "logoUrl": ["https://cdn.simpleicons.org/darktable/363636"] },
            { "id": "Pureref.Pureref", "name": "PureRef", "logoUrl": ["https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/pureref.png"] }
        ]
    },
    {
        "id": "security",
        "category": "Security & Privacy",
        "items": [
            { "id": "Malwarebytes.Malwarebytes", "name": "Malwarebytes", "logoUrl": ["https://cdn.simpleicons.org/malwarebytes/115694"] },
            { "id": "ProtonTechnologies.ProtonVPN", "name": "Proton VPN", "logoUrl": ["https://cdn.simpleicons.org/protonvpn/6D4AFF"] },
            { "id": "Bitwarden.Bitwarden", "name": "Bitwarden", "logoUrl": ["https://cdn.simpleicons.org/bitwarden/175DDC"] },
            { "id": "NordSecurity.NordVPN", "name": "NordVPN", "logoUrl": ["https://cdn.simpleicons.org/nordvpn/4687FF"] },
            { "id": "WireGuard.WireGuard", "name": "WireGuard", "logoUrl": ["https://cdn.simpleicons.org/wireguard/88171A"] },
            { "id": "AgileBits.1Password", "name": "1Password", "logoUrl": ["https://cdn.simpleicons.org/1password/0094F5"] },
            { "id": "LogMeIn.LastPass", "name": "LastPass", "logoUrl": ["https://cdn.simpleicons.org/lastpass/D32D27"] },
            { "id": "Surfshark.Surfshark", "name": "Surfshark", "logoUrl": ["https://cdn.simpleicons.org/surfshark/00D39D"] },
            { "id": "MullvadVPN.MullvadVPN", "name": "Mullvad VPN", "logoUrl": ["https://cdn.simpleicons.org/mullvadvpn/253b59"] }
        ]
    },
    {
        "id": "system",
        "category": "Virtualization & System",
        "items": [
            { "id": "Oracle.VirtualBox", "name": "VirtualBox", "logoUrl": ["https://cdn.simpleicons.org/virtualbox/183A61"] },
            { "id": "VMware.WorkstationPlayer", "name": "VMware Player", "logoUrl": ["https://cdn.simpleicons.org/vmware/607078"] },
            { "id": "WiresharkFoundation.Wireshark", "name": "Wireshark", "logoUrl": ["https://cdn.simpleicons.org/wireshark/1679A7"] },
            { "id": "PuTTY.PuTTY", "name": "PuTTY", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/e/e0/PuTTY_icon.svg"] },
            { "id": "WinSCP.WinSCP", "name": "WinSCP", "logoUrl": ["https://upload.wikimedia.org/wikipedia/commons/0/05/Winscp_logo.png"] },
            { "id": "FileZilla.FileZilla.Client", "name": "FileZilla", "logoUrl": ["https://cdn.simpleicons.org/filezilla/BF0000"] },
            { "id": "Google.Drive", "name": "Google Drive", "logoUrl": ["https://cdn.simpleicons.org/googledrive/0F9D58"] },
            { "id": "Dropbox.Dropbox", "n
