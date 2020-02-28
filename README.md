<h1>NYPD Infograph</h1>

<h2>Description:</h2>
The NYPD Infograph displays data taken from nyc opendata NYPD API to show arrest made in every precinct in new york city. The data is represented with charts, people graphs and number. The data is limited to one thousand arrest per percinct within the year. The data will focus on Gender, Ethncity, Age and the different crime commited. The goal for this infographic is to create easy to read data that will be consumed easily. A list of precinct and a legend is available. A search for precinct is available with dynamic data in order to have a comprehensive information for New York City.

<h2>API: </h2>
Primary API: https://data.cityofnewyork.us/Public-Safety/NYPD-Arrest-Data-Year-to-Date-/uip8-fykc
API Documentaion: https://dev.socrata.com/foundry/data.cityofnewyork.us/uip8-fykc

<h2>Feature: </h2>
The infograph will take data from Open Data NYC and display it within a readable fun infograph. The infograph is powered by react. It utilizes routers to simulate multiple pages. With well organized components using class and function methods, that abstract information from the main code. Axios is impliemented to retrieve information from an external API, using react to manipulation. The website is styled will CSS and FlexBox and is somewhat compatiable with mobile, tablets and web broswers.

<h2>Additional Features: </h2>
NYPD Infograph is fully dynamic will functional charts and people graphs.

<h2>Timeline </h2>
<li>1. Created a React App and imported all the libraries require</li>
 <li> -axios</li>
  <li>-chartjs2</li>
  <li>-iconjs</li>
<li>2. Use axios to import data from the Opendata NYPD API and sort the data into two components: Crimestats.js, Criminalstats.js</li>
<li>3. The information is passed to the parent component Container.js, that passes the data to the user</li>
<li>4. Charts were added and placed into individual components for usability, Chartjs2 library was used to create the charts</li>
<li>5. Componets for Infograph Precinct(Appdetails.js) data and a legends(symbols.js) component was created.</li>
<li>6. A react router is used to link to the legend and details page</li>
<li>7. A search bar is added, it is used to search a precinct by number only</li>
<li>8. Graphs were added and linked to the data that is called</li>
<li>10. Webpage was styled with CSS</li>

<h2>Additonal Features</h2>

1. People graph was created with dynamic data using a loop to create multiple html tags displaying icons


