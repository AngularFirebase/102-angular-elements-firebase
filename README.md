# Episode 102 - Angular Elements + Firebase

Build a custom Angular Elements Component and use it anywhere. 

<img src="https://firebasestorage.googleapis.com/v0/b/firestarter-96e46.appspot.com/o/assets%2Felem-demo.gif?alt=media&token=3469376f-165f-4f26-8bc9-1a3ea300ebad"> 


Watch the [screencast](https://angularfirebase.com/lessons) 

1. `git clone`
2. `npm install`
3. `npm run build:elements`

This will create the custom component `elements/user-poll.js`.


## Firebase / Firestore Configuration

In app.module.ts, you must update the value of ```const config``` to reflect your own [firebase project id](https://console.firebase.google.com/u/0/).

You'll then need to create a firestore database in this ```firebase project id``` with one collection named ```polls``` and containing a single document called ```elements```. The document must have two fields ```yes``` and ```no```of type ```number``` for the votes to be registered and retrieved from the custom elements.


## Usage

You can use your custom Angular Elements component in any HTML page like so...

```html
<user-poll></user-poll>
<script src="../elements/user-poll.js"></script>
```

Or simply open `{local-path-to}/demo/index.html` in your browser. 

