![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React Tweets

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

This exercise allows you to practice and apply the concepts and techniques taught in class.

Upon completion of this exercise, you will be able to:

- Clone and set up an existing React app and run it in development mode.
- Create and render React components.
- Use JSX to render content within a React component.
- Use props to pass data to components and display the data received through props within the components.
- Render multiple instances of a React component while passing different data to each instance.
- Extract and organize parts of the existing UI into separate new components.

  <br>
  <hr>

</details>

## Introduction

Passing data through props is an important React concept that is best understood by hands-on practice. We'll use this exercise to help you solidify your understanding of props.

We will be cloning an existing piece of UI from a popular app, Twitter. Let's get started!

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-tweets-4.png" width="500">
</p>

## Setup

- Fork this repo
- Clone this repo
- Open the LAB and start:

  ```bash
  $ cd lab-react-tweets
  $ npm install
  $ npm start
  ```

## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request so that your TAs can check your work.

## Getting Started

<!--
1. Clean the `App.js` component so that it has the following structure:

   ```jsx
   // src/App.js
   import "./App.css";

   function App() {
     return <div className="App"></div>;
   }
   export default App;
   ```
-->

1. We will use [Font Awesome](https://fontawesome.com/v5.15/icons?d=gallery&p=1) for the icons in our app. Add the following stylesheet in the `head` of the `public/index.html` page:

   ```html
   <link
     rel="stylesheet"
     href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
     integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
     crossorigin="anonymous"
   />
   ```

## Instructions

### Iteration 1 | Initial Content

To allow you to focus on React without having to worry about the styling we provided you with the CSS styles. All the CSS is included in the starter code in the `src/index.css` file.

We have also provided you with the initial content of the `App.js` and we included the HTML structure for the `Tweet.js` component. Before you start working take a moment to go over these two files.

Once you initially run the app you should see the following:

![Tweet component after the initial setup](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-tweets-1.png)

`Tweet` component is at the moment rendering static content. We will change this in the next iteration. We'll update the `Tweet` component to display the content coming from the `props`.

### Iteration 2 | Pass the Tweet as a Prop

In `App.js`, we have an array named `tweetsArray` that holds objects representing tweets. We will use the `Tweet` component to display these _tweet_ objects. In the `Tweet` we will display the user's `name`, user's `image`, user's `handle`, tweet `timestamp` and the `message`.

**Pass the tweet as a prop**

Pass the first object from the `tweetsArray` as a prop to the `Tweet` component:

```jsx
// src/App.js
// ...
<Tweet tweet={ tweetsArray[0] }>
```

**Display the tweet content in the `Tweet` component**

Update the `Tweet` component to display the values coming from the `tweet` prop. Remember that the value we passed is an object, so you may want to check the object's structure.

**Expected Result**

Once done, your `Tweet` component should display the following content:

![Tweet component after passing the "tweets" prop](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-tweets-2.png)

### Iteration 3 | Create the Components

We will now create new files for the components that we'll make in the following iterations. Inside the folder `src/components/` create the following new files:

- `src/components/ProfileImage.js` ,
- `src/components/User.js` ,
- `src/components/Timestamp.js` ,
- `src/components/Message.js` and
- `src/components/Actions.js`.

<br>

In the following iterations, you will need to refactor the `Tweet` component. You will be asked to extract parts of the existing HTML structure into new components:

<br>

![Example - Refactoring the "Tweet" component](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-tweets-3.png)<br>

<br>

**When done with all of the iterations**, the final version of your `Tweet` component will look like this:

<details>
<summary>Click to see the code</summary>

```jsx
// FINAL VERSION

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}
```

:heavy_exclamation_mark: Don't copy-paste the above code directly into the `Tweet` component!

You will do it in the next iterations, one step at a time. You will be replacing the parts of HTML as you create each new component.

<hr>
<br>
</details>

### Iteration 4 | ProfileImage Component

**Extract HTML**

Extract the existing `img` tag and render it through the `ProfileImage` component:

```jsx
<img src="IMAGE_URL" className="profile" alt="profile" />
```

**Render the component**

Once done, import the `ProfileImage` component to `Tweet.js`. After importing it, render the component inside of `Tweet` in the following way:

```jsx
// ...

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

// ...
```

**Access the Props**

`ProfileImage` receives a prop `image`. Set this value as the `src` of the `<img />` tag.

### Iteration 5 | User Component

**Extract HTML**

Extract the existing `span` tags displaying the user information and render them through the `User` component:

```jsx
<span className="user">
  <span className="name"> USER_NAME </span>
  <span className="handle">@ USER_HANDLE</span>
</span>
```

**Render the component**

Import the `User` component to `Tweet.js`. After importing it, render the component inside of `Tweet` in the following way:

```jsx
// ...

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          // ...
        </div>
      </div>
    </div>
  );
}
```

**Access the Props**

We passed the object with the user information through the prop `userData`. Access and display the user's _name_ and the twitter _handle_.

### Iteration 6 | Timestamp Component

**Extract HTML**

Extract the existing `span` tag displaying the _timestamp_ information and render it through the `Timestamp` component:

```jsx
<span className="timestamp"> TWEET_TIMESTAMP </span>
```

**Render the component**

Import the `Timestamp` component to `Tweet.js`. After importing it, render the component inside of `Tweet` in the following way:

```jsx
// ...

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
          // ...
        </div>
      </div>
    </div>
  );
}
```

**Access the Props**

`Timestamp` receives a prop `time`. Display this value as the content of the `span` tag.

### Iteration 7 | Message Component

**Extract HTML**

Extract the existing `p` tag and render it through the `Message` component:

```jsx
<p className="message"> TWEET_MESSAGE </p>
```

**Render the component**

When done, import the `Message` component and render it in the `Tweet.js` in the following way:

```jsx
// ...

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">

          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
// ...
```

**Access the Props**

`Message` receives a prop `message`. Display this value in the `p` tag.

### Iteration 8 | Actions Component

**Extract HTML**

Extract the existing message `div.actions` tag and render it through the `Actions` component:

```jsx
<div className="actions">
  <i className="far fa-comment" data-testid="comment-icon"></i>
  <i className="fas fa-retweet" data-testid="retweet-icon"></i>
  <i className="far fa-heart" data-testid="heart-icon"></i>
  <i className="fas fa-share" data-testid="share-icon"></i>
</div>
```

**Render the component**

When done, import the `Actions` component and render it in the `Tweet.js` like this:

```jsx
// ...

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">

          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />

        <Actions />
// ...
```

`Actions` component doesn't take any props.

### Iteration 9 | Render multiple `Tweet`s

Once you are done refactoring the `Tweet` component, update `App.js` to display three `<Tweet />` components. Each `<Tweet />` should receive a separate _tweet object_ from the `tweetsArray`.

Once finished, your app should be displaying the following content:

<details>

<summary>Click to see the image</summary>

<br>

![Example - Final Result](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-tweets-4.png)

<hr>
<br>
</details>

Happy coding! :blue_heart:

<br>

## FAQs

<details>
  <summary>I am stuck and don't know how to solve the problem or where to start. What should I do?</summary>

  <br>

If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.

For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources.

Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  <br>

[Back to top](#faqs)

</details>

<details>
  <summary>I got the error: "Cannot find module 'Node.js'". How can I resolve it?</summary>

  <br>

The error "Cannot find module" in a Node.js application means that the module you are trying to import or use does not exist in your project or cannot be found by Node.js.

There are a few things you can try to resolve the issue:

1. **Dependencies are not installed**: Make sure that all dependencies are installed.

To do this, run the command `npm install` in the root folder of your project.

This will install all of the dependencies listed in the project's `package.json` file, and ensure that all of the modules that your Node'js application requires are available.

2. **Module is not installed**: Make sure that the _package_ you are trying to use is listed in the project's `package.json` and that it is installed.

To do this, run the command `npm install <package_name>`, replacing the `<package_name>` with the name of the package.

This will add the package to the list of dependencies in the `package.json` file, and install it in the project.

3. **Module is not imported:** Make sure that you've imported the module/package correctly and that the `import` statement is spelled correctly and available in the correct place in your code.

4. **Wrong file path:** If you are importing another file as a module, make sure that the file you are trying to _import_ is located in the correct folder and that you are using the correct file path.

5. **Wrong module/package name:** Check the spelling of the package name you are trying to import.

  <br>

[Back to top](#faqs)

</details>

<details>
  <summary>I got the message: "Something is already running at ... Would you like to run the app at another port instead? [Y/n]". What should I do?</summary>

  <br>

This message means that another process is already using the specified port. This could be another instance of your React app, or it could be another application that is using that port.

To resolve this, you can change the port your React app is running on by typing Y when prompted. This will kill the process and automatically start the server on another port.

Another approach is to manually terminate the process using the port in question and then try running the app again.

  <br>

[Back to top](#faqs)

</details>

<details>
  <summary>How do I display an <em>image</em> in a React component?</summary>

  <br>

To display an image in a React component, you should first `import` the image in the component and then render it. Here is an example of how to do this:

```jsx
import example from "./example.png"; // Import the image file

function App() {
  return (
    <img src={example} alt="example" /> // Display the image
  );
}

export default App;
```

In the above example, the `example` variable is assigned the value of the imported image file. The image is then displayed using the `<img>` element, with the `src` attribute set to the `example` variable.

  <br>

[Back to top](#faqs)

</details>

<details>
  <summary>Where should images for a React project be stored?</summary>

  <br>

The images for your React project should be stored inside the `src/` folder. To keep things organized you should create a separate `assets/` or `images/` directory inside of the `src/` folder.

  <br>

[Back to top](#faqs)

</details>

<details>
  <summary>I got the warning in my React app:" 'variable' is assigned a value but never used: no-unused-vars". What should I do?</summary>

  <br>
  
  This warning is a linting error thrown by a linting tool in your React project, and it is warning you that the variable is created, but that it is never being used in your code.

To resolve this issue, you can either use the variable in your code, or you can simply remove the variable if you don't need it.

  <br>

[Back to top](#faqs)

</details>

<details>
  <summary>I am getting an error: "not defined". How do I fix it?</summary>

  <br>

The "ReferenceError: variable is not defined" error in JavaScript occurs when you try to access a variable or a function that has not been defined yet or is out of scope.

To fix the issue, check that you have defined the variable or function that you are trying to use and double-check the spelling to make sure you are using the correct name.

In case the variable or a function is defined in another file, make sure that the file has been imported or loaded correctly.

  <br>

[Back to top](#faqs)

</details>

<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>

  <br>

There are a couple of possible reasons why you may be unable to _push_ changes to a Git repository:

1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

```bash
git add .
git commit -m "Your commit message"
git push
```

2.  **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a _Fork_ first, you do not have write access to the repository.
    To check which remote repository you have cloned, run the following terminal command from the project folder:

```bash
git remote -v
```

If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.

Note: You may want to make a copy of the code you have locally, to avoid losing it in the process.

  <br>

[Back to top](#faqs)

</details>
