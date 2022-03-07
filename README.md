# Trip List  
A very simple React app that displays a list of international trips pulled from an API.

### Studies
- React Hooks
	* useState
	* useEffect
	* useRef
	* Custom React Hooks
		+ useFetch hook, created as an independent and general-purpose hook for GETting data, with Optional Parameters that allow it to be used for GET, POST, PATCH, etc.
- APIs and JSON
	* Used _json-server_ node package to locally host an API created from `./data/db.json`.
	* Handling returned data safely with Loading state and Error handling.
	* Mapping data for visually appealing display.
	* Buttons for displaying data matching certain criteria.

### Outline
- **App.js**
	* Calls TripList component.
- **TripList.jsx** 
	* Creates a State for the current URL of the _json-server_ API endpoint.
	* GETs data, Loading state, and Error state from the server using useFetch.
	* Returns template to 
		+ display heading and show current filter status
		+ buttons for filtering
		+ display Loading or Error if needed
		+ map out the _trips_ array into a visually pleasing list.
