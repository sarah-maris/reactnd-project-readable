# ChitChat

---

## Project Purpose:

This game was built as the "Readables" project for the Udacity React Nanodegree Program. The purpose of the project is to demonstrate understanding of how Redux works in a React-based content and comment web app. Users can post content to predefined categories, comment on their posts and other users' posts, edit and delete posts and comments and vote on posts and comments.

## How to Load the App

The project uses Node.js and the Create-React-App starter. If you do not have Node >= 6.x installed, you can download it here: [Node.js](https://nodejs.org/en/)

Once Node is installed, navigate to the directory where you want to store the app and run

```
git clone https://github.com/sarah-maris/reactnd-project-readable.git
npm install
```

Next, install the server. Navigate to the `server` directory of the project and run

```
npm install
```

When the dependencies are installed you can run the server by entering:

```
node server
```

The server will listen on port 5001

Next, open a new shell window in the root directory of the project and run

```
npm start
```

A new browser window should automatically open displaying the app. If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

## How to Use the App

The app loads showing all posts, sorted by vote score. You can change the post sorting and show each category's posts separately. You can also add a new post.

Clicking on a post will take to you the single post page, which shows the post body and details about the post. On the single post page you can edit or delete the post and add, delete or edit comments.

### Resources and Documentation:

- [Create-react-app Documentation](https://github.com/facebookincubator/create-react-app)
- [React Router Documentation](http://knowbody.github.io/react-router-docs/)
- [React Training/React Router](https://reacttraining.com/react-router/web/api/BrowserRouter)
- [React API](https://facebook.github.io/react/docs/react-api.html)
- [Flexbox card formatting](https://codepen.io/ohansemmanuel/pen/Ljqdpa)
- [Icons as React Components](https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792)
- [Glyph Icons](http://glyph.smarticons.co/)
- [Redux Form](https://redux-form.com/7.1.1/)
- [CSS Tricks: Considerations for Styling a Modal](https://css-tricks.com/considerations-styling-modal/)
- [Sitepoint: How to Sort an Array of Objects in JavaScript](https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/)

### Udacity Resources:

- [Project server starter template](https://github.com/udacity/reactnd-project-readable-starter)
- [Project Rubric](https://review.udacity.com/#!/rubrics/1017/view)
- [Udacity CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
- [Udacity HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [Udacity JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)

_This project is licensed under the terms of the MIT license._
