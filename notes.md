# What is react?
- A javascript library to build user interfaces (components).
- Developed by facebook.
- Some alternatives: Angular, Vue, Svelte.
- Component tree (root component) based.
- Independance (Changing the logic or layout in a component will not break your all app).
- Reusability (you can use the same component many times).
- Speed(Virtual DOM, only the updated elements are affected/rendered not all the whole app).

# NPM (node package manager)
1) npm init => build a package.json file(add -y flag to put defaults instead of naming etc.)
2) npm install <packageName> --save => install package locally and addd it to package.json
3) npm install <packageName> -g => install it globally (to access it anywhere on your PC)
4) npm instaal <packageName> --save-dev => to use it only in development environment.

# note: to save your time use create-react-app package to build your needed first files
npx create-react-app my-app
cd my-app
npm start my-app or npm run start my-app

# note: this package (create-react-app) uses babel and webpack

# So, what is babel?
A javascript compiler to convert js modern code to old one, so the browser can uderstand it.
So, we can use ES6 features (destructring, spread operator, arrow functions, etc).

# note: node_modules has all the packages that we might use and others that are used by those packages and also any package we will install in the future will be downloaded there.

# What is JSX ?
- It's the HTML in the js files

# JSX rules:
- Return single element (Always wrap the content), the element may be div/ article/ section/ fragment.
- Use camel case for HTML attributes.
- className is the alternative for class in react.
- close every element (for the DOM that would be created).
- use return (

) if you want to want to return complex content (that is the normal).

# note: you can make the components nested (that's the normal)
# note: component is written this way <Component/> (the communmity verstion) or <Component></Component>

# note: You can pass a number as props as follows: 
<Book job='developer' number={ 22 }/> // we passed some props

# note: if you created a component and used some props in it, and later used this component but didn't pass the props to some instances, so the props is empty/ don't have these keys and values and won't display it.

# note: if you want to pass a tag as props to a component, just convert the componetn tag from self closing into opening and closing tag and put whaterver you want and use them as "childern", the name is very specific
<Book/> to 
<Book>
    <p>
    sdjkflsdlfsd fskdfjlsdkjfkl dskfjsdk
    </p>
</Book>
now in the Book component/ function destructure the props object and use children name

# Events
- There are lots of events that could make the website really interesting, check docs (easy to use)
- We can make the event handler either a  refrence function or an inline function.

# how to pass a data in this function? sometimes we need this, for example to delete an object from a list, so we need it's id etc...
Pass whatever data you want, but don't invoke the fucntion as it will run imediatyl after rendering
eventHandler(someData) // don't do this

const eventHandler = id => {
    alert(id)
}
onClick={ () => eventHandler(author.id) } // pass it as an arrow function
# Remember: that the event object is passed automatically, we don't have to pass it, but if you are going to pass some data, then you have to pass it too.

# During production, just run the npm run build script to build the project and just upload this 'build' folder to andy hosting provider as netlify or github, etc...


// this is the end of the basic part in john smigla course on youtube (3:30 from 10h vid)
