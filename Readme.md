# I am bored

Gist parsing for the sake of organizing `internet digged stuff`.

Living in the internet leads us to collect lots of stuff to read, watch, listen, study and so on. At the same time, we don't really remember this kind of stuff when we are bored and eventually end up playing some game on Steam.

The point is that if I can have my stuff one terminal command away, maybe I will access them more often! That's what this project is all about.

What's the plan:
- Throw stuff links in gist files.
  - Each file will represent one stuff category (movies, etc)
- Tell the script where to find the gist with the stuff
- Let it parse the files and show me stuff I can enjoy

## Aren't there any other (better) options to solve this?

There surely are! Evernote, Pocket, Google Keep, Goodreads, whatever...

I use them, but I still want to develop my own thing because:
- None of these saving stuff apps offer me a cool `CLI`
- I didn't write any of them, and I like writing my own things for fun!

# The actual Readme

This project uses `node` and `yarn`.

### Setting up

This project requires two things:
- A Github API Access Token
- A Github's gist ID

Once you have an __Access Token__:
- Replace the sample value located in `values/secrets.yaml.sample` and save the file simply as `values/secrets.yaml`

Once you have a `gist you want to parse`:
- Do the same thing you did with the access token. But use the `github.yaml.sample` instead.

### Running
`yarn install` or `npm install`  

then

`node index.js`
