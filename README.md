# Currency Take Home

## Local Development

### Dependencies

[Node.js 16](https://nodejs.org/en/) or greater is required.

### Local Development Setup

From the root of the project run `npm ci` to install dependencies.

After the setup is finished, run `npm run dev` to launch the app in development mode. Visit http://localhost:3000 to view the application.

To run all Cypress tests you can execute `npm test`. This builds the production version of the app for Cypress to test against. Alternatively, you can run `npm run cypress:open` to open Cypress UI and run tests against the development server. You must have the dev server running for `npm run cypress` to work.

## Design Decisions

### Login

I decided to create a `/login` route separate from the main app. When the user logs in, the app store is updated and the Next Router is used to navigate to the root page. I could have used a single route/page and displayed the login form based on state, however, I was unfamiliar with Next.js and I was curious as to how routing and pages work in the framework. If I were to do this again, I would put the login component and the main authenticated app component in the `index.tsx` file and toggle between the two depending on the login state. Creating a separate route required me to put extra code in place to handle routing to the correct page based on the login state.

### Styles

Styled Components seem useful in some cases but not in others. I chose to use Chakra's styling system when it made sense e.g., flex properties on the `Flex` component. I used Styled Components mainly for custom components.

### Fetching Currencies

Since the currencies are not used by other components I didn't put them on the global state. The currencies are fetched by the `CurrencyContainer` and then handed to the `CurrencyListContainer` which manages all of the filtered, paged, and selected currencies in its local state. 

### Selecting Currencies

Initially I used an array to hold the selected currencies. However, this made the code a little more complex than I wanted. I decided since we're only ever selecting two currencies it was acceptable to have a dedicated state variable to hold each selection i.e., `selectedCurrency1` and `selectedCurrency2`. These selected values live on the `CurrencyListContainer` local state and are passed to the children to show the comparison and to change the styles of the selected items.

For testing I needed a way to clear the selected currencies so I created a button. After using it quite a bit I decided it was a nice feature and added it as an icon button at the top of the list.

### Updating the URL

The URL updates when the "Compare" button is clicked. I also wanted to be able to "link" to a comparison with the URL. If you navigate to the app with they query parameters populated (`/?c1=usd&c2=cad`), the UI will display the currency comparison and select the appropriate list items.

### Testing

I decided to use Cypress to run e2e tests. I prefer e2e test rather than unit tests since this is how users will interact with the application. Ensuring the application works from a user perspective is a high priority. I generally consider unit tests more beneficially when testing complex business logic. 
