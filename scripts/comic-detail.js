
// Get current path (binje.dev/title/{comicName}
const path = window.location.pathname

// Splits the URL into 3 "", "title", "{comicName}" and selects the name
const pathSegments = path.split('/')
const comicTitle = pathSegments[2]

if (comicTitle) {

}