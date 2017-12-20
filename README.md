# j1
Installations: -
1. Install Chocolatey using cmd 
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
2. Node.js , Python2  & Jdk : -
  choco install -y nodejs.install python2 jdk8
3. React-native-CLI : - 
   npm install -g react-native-cli
4. Start Android Emulator (Any Emulator).
5. create new Project : -
	  react-native init J1
6. Move to the directory : -
  cd J1
7. Install react-navigation and react-base : - 

	npm install --save react-navigation,
	
	npm install native-base --save,
	
	react-native link
	
8. To run the app : -

	react-native run-android
	
9. To Edit- Open App.js file 

Create folders : – 

src/components

files: -

		Header.js
		
		SearchHeader.js
		
		Footer.js
		
		HomeBody.js
		
		MessageHeader.js
		
		NotificationHeader.js
		
		TabBarStyle.js
		
src/images : -

		jeet.jpg
		
src/screens : -

		HomeScreen.js
		
		MessageScreen.js
		
		NavPage.js
		
		NotificationScreen.js
		
		SearchScreen.js
		
src/sidebar: -

		SideBar.js
