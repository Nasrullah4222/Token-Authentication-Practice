/* Description
 - Creates and configures the Express application instance.
 - Registers middleware needed by the app, including JSON body parsing
	 and cookie handling so incoming requests can be processed correctly.
 - Mounts the authentication routes and protected post routes under
	 their API prefixes so the route handlers stay organized.
 - Exports the configured app so it can be started by server.js.
*/

const express = require("express");
const authRoutes = require("./routes/auth.route");
const postRoutes = require("./routes/post.route");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)
module.exports = app;
