This is a fork of the original [dotjs](https://github.com/defunkt/dotjs).

Differences from the fork:

- Uses my apache server instead of starting a daemon on localhost
- No error logging (404s are silent if you create `404.js` and `404.css`)
- Custom vhost file for apache (vhost.conf).
- Handles css files from `~/.css` directory as well (using code from `dotcss` extension from [here](https://github.com/stewart/dotcss)).
- Handles wildcard domains via `404.js` and `404.css`. (These files will be run if no corresponding files are found).

#Setup Instructions

- [Generate SSL Keys](http://www.thegeekstuff.com/2009/07/linux-apache-mod-ssl-generate-key-csr-crt-file/) for your localhost, and [import them in Chrome](http://stackoverflow.com/a/15076602)
- Setup your vhost file for https to serve `~/.js/` and `~/.css` properly (copy the two Location blocks from `vhost.conf` to your apache vhost).
- Create a blank `404.js` file in your `~/.js` directory
- Create a blank `404.css` file in your `~/.css` directory

#Why
- I used `stylish` until I switched my laptop and lost all my custom styles.
- I don't like the idea of running multiple web servers when I already use apache
- I didn't like seeing 404 errors when I could do better.
- This was a fun exercise


#Licence
Licenced under the [MIT Licence](http://nemo.mit-license.org/).

#Credits
- This is a modified version of the original `dotjs` and `dotcss` extensions by defunkt and stewart
- Abhay Rana <me@captnemo.in>
