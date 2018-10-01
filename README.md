# Restauranteer


## Description

Restauranteer is a Progressive Web Application built using the [MapBox](https://www.mapbox.com/) API.  It allows you to search (preloaded) local restaurants where you can see store hours and read user reviews.

For this project I was given a static webpage.  My assignment was to convert the webpage into a mobile-ready responsive web application that is ARIA compliant and accessible for screen reader use.  I also implemented a Service Worker to begin the process of creating a seamless offline experience for the user.

## Installation & Dependencies

1. Download or clone the project from this repository.

2. To see and interact with the MapBox API you first must open main.js and restaurant_info.js and replace `<your MAPBOX API KEY HERE>` with your own token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

3. From the Project folder, start up a simple HTTP server to serve up the site files on your local computer using the instructions below: 

First in the terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

4. Open index.html in your browser of choice and explore the site.

## Project Features
• All content is responsive and displays on a range of display sizes.<br/>
• image's associated title and text renders next to the image on all viewport sizes.<br/>
• Images are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.<br/>
• All content-related images include approriate alternate text that clearly describes the content of the image.<br/>
• ARIA roles are appropriately defined and tabindex is used to improve the experience for users with screen readers.<br/>
• When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.<br/>