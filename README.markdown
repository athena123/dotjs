This is a fork of the original [dotjs](https://github.com/defunkt/dotjs).

Differences for the fork:

- Uses my apache server instead of starting a daemon on localhost
- No error logging
- Custom vhost file for apache (vhost.conf)

#Setup Instructions

- Generate SSL Keys for your localhost, and import them in Chrome
- Setup your vhost file for https to serve ~/.js/
- Create a blank 404.js file in your ~/.js directory
