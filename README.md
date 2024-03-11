# Drinking Game (Name Pending)

## To start locally

1. Pull this repo
2. Make sure you are on the newest stable npm version (10.5.0) and node version (20.11.1)
3. Run npm install
4. Run npm start to start local server

## How to start your emulators

### IOS Emulator

Windows:

_Unfortunately for windows there is no IOS emulator available for use natively, the only option for developing for IOS is using React Natives built in Expo go to run a local server on your iphone_

1. Download Expo Go on your respective IPhone
2. Start your local server
3. Expo should give you an option to scan a qr code
   ![image](https://github.com/taimurtawil/Drinking-Game/assets/92693639/297eb472-b5fe-400d-8b2d-ac2a386e83c0)
4. Scan the qr code and test your app!

MacOS:

1. Install Xcode from the Mac App Store.
2. Open Xcode and accept the license agreement.
3. Go to Xcode > Open Developer Tool > Simulator.
4. Start your local server
5. Once the server is running, press i in the terminal to launch your app on the iPhone Simulator.

### Android Emulator

1. Download and install Android Studio
2. Follow the installation instructions provided for your operating system.
3. Open Android Studio. and Go to Tools > AVD Manager.
4. Click on "Create Virtual Device" and follow the wizard to create a new virtual device.
5. Select the device definition (e.g., Pixel), then choose a system image (e.g., Android version)
6. Once the emulator is set up, select it from the AVD Manager and click the green "Play" button to start it.
7. Start your local server
8. Once the server is running, press a in the terminal to launch your app on the Android Simulator.

# Liam Documentation 3/10/24

    added some organization to the sheet repo.

## assets

    things like photo files etc. that we can pull in to render as needed.

## components

    the actual react components used to build our screens.

## screens

    things like the home screen etc.

## configs

    for config files like our firebase connections. i recommend not using a login system, it seems unnecessary for the user to enter an email.
    was thinking if you want to sync across multiple phones, it can be like joining a kahoot lobby (enter a code)

## styles

    CSS like styling files we can import into configs/screens as necessary.

## helpers

    reusable helper functions we'll likely need to call as we come across problems.
    not sure what these will be yet

## games

    where the actual games will live. I'm not yet sure how to build something animated, but we'll cross that road as we come to it.

### constants

    constants we can pull in as needed.

## New Files, what i actually did...

    created a working home screen. as of now, that is what App.js returns.
    Components created:
        1. GameEntryButtonList - this is the list of buttons that we will display on the home screen.
        2. GameEntryButton - the child component to above.
        3. TopBanner - this is what displays "Drinking Game (name pending) at the top of the screen.
    Other things of note:
        Created AppStyles.js in the styles directory. this is what i think we should use for keeping a consistent
        style thorughout the app. good for maintaining modular workflow and quick customization

        Created GameButtonDetails.js in the constants directory. Used for the GameEntryButtonList.
        If you want to create a new button, append the object representing the button's details to this list.

    To keep style consistent, I added a
