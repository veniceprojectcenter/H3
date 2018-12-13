# H3

The website is currently hosted with Firebase at https://h3-sdpt.firebaseapp.com/


This website is built using the Hugo framework. To build the website, use the
"hugo" command. To deploy the website to Firebase after it is built, use the
"firebase deploy" command.

To run a local server, the "hugo server" command can be used. The website can then
be found with localhost:1313 on any browser. SCSS is used and to modify the scss
files in the theme folder, navigate to the location of the themes scss files with
"cd themes/h3-theme/static", then use the npm script "npm run scss" to compile
all scss files into css. It is advised that you have this running in a seperate
terminal tab than your other "hugo server" running command. With both of these
running in the terminal, all edits to the code should update live to localhost. If
new files are added or errors arise, simply rebuild the project with "hugo"
instead of "hugo server".

The events database is in firebase under the ve18-h3@gmail.com account. An example
of how these events are stored in the Realtime Database can be seen in the data/events.json
folder of this current project.


Current Website Recommendations can be found at:
https://docs.google.com/document/d/1VnORQovvGAtxKRbjbqLGWq4S16XNnn2hscmbD7ZJ1_4/edit

For any questions or concerns, contact Peter Maida at pjmaida@wpi.edu.
