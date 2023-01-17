# Currency Take Home

# Local Development

## Dependencies

[Node.js 16](https://nodejs.org/en/) or greater is required.

## Local Development Setup

From the root of the project run `npm ci` to install dependencies.

After the setup is finished, run `npm run dev` to launch the app in development mode. Visit http://localhost:3000 to view the application.

# Design Decisions

## Login

I decided to create a `/login` route separate from the main app. When the user logs in, the app store is updated and the Next Router is used to navigate to the root page. I could have used a single route/page and displayed the login form based on state, however, I was unfamiliar with Next.js and I was curious as to how routing and pages work in the framework.  

## Styles

Styled Components seem useful in some cases but not in others. I chose to use Chakra's styling system when it made sense e.g., flex properties on the `Flex` component. I used Styled Components mainly for custom components.

## Fetching Currencies

Since the currencies are not used by other components I didn't put them on the global state. The filtered and paged results are managed by the `CurrencyListContainer` component's state. 

## Selecting Currencies

Initially I used an array to hold the selected currencies. However, this made the code a little more complex than it was worth. I decided since we're only ever selecting two currencies that it was acceptable to have a dedicated state variable to hold each selection i.e., `selectedCurrency1` and `selectedCurrency2`.

## Testing

I decided to use Cypress to run e2e tests. I prefer e2e test rather than unit tests since this is how users will interact with the application. Ensuring the application works from a user perspective is a high priority. I generally consider unit tests more beneficially when testing complex business logic. 



