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

## 


