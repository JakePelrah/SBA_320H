/**
 * Scheduling Router for Calendar Management
 * 
 * This router handles all routes related to calendar operations such as:
 * - Listing calendars
 * - Retrieving calendar information
 * - Getting events from a calendar
 * - Creating, updating, and deleting events in a calendar
 * 
 * The middleware initializes the calendar with OAuth if a valid access token is present.
 */

import express from "express";
import {
  listCalendars,
  initCalendar,
  getCalendarInfo,
  getSessions,
  createSession,
  patchEvent,
  deleteSession,
} from "./googeCalendar.js";

// Creating an Express router for scheduling
export const schedulingRouter = express.Router();

/**
 * Middleware to initialize the calendar with OAuth
 * This checks if the user has a valid access token and initializes the calendar
 */
const oauthMiddleware = async (req, res, next) => {
  if (req.user && req.user.accessToken) {
    try {
      await initCalendar(req.user.accessToken);
      next(); // Proceed to the route handler
    } catch (error) {
      console.error("Error initializing OAuth client", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    next(); // No access token; proceed without initializing
  }
};

// Apply the OAuth middleware to all routes in the schedulingRouter
schedulingRouter.use(oauthMiddleware);

/**
 * Route to get a list of calendars for the authenticated user
 */
schedulingRouter.get("/getCalendars", async (req, res) => {
  if (req.user?.id) {
    const calendars = await listCalendars();
    const { items } = calendars.data; // Extracting the calendar items
    res.json(items); // Respond with the calendar items
  } else {
    res.json({}); // Return an empty object if user is not authenticated
  }
});

/**
 * Route to get information about a specific calendar
 */
schedulingRouter.get("/getCalendarInfo/:calendarId", async (req, res) => {
  if (req.user?.id) {
    const calendars = await getCalendarInfo(req.params.calendarId);
    res.json(calendars); // Respond with the calendar information
  } else {
    res.json({}); // Return an empty object if user is not authenticated
  }
});

/**
 * Route to get events for a specific calendar
 */
schedulingRouter.get("/getEvents/:calendarId", async (req, res) => {
  if (req.user?.id) {
    const events = await getSessions(req.params.calendarId);
    res.json(events); // Respond with the list of events
  } else {
    res.json({}); // Return an empty object if user is not authenticated
  }
});

/**
 * Route to create a new session (event) in a calendar
 */
schedulingRouter.post("/createSession", async (req, res) => {
  if (req.user?.id) {
    const { calendarId, event } = req.body;
    const eventRes = await createSession(calendarId, event);
    res.json(eventRes); // Respond with the created event details
  } else {
    res.json({}); // Return an empty object if user is not authenticated
  }
});

/**
 * Route to get sessions (events) for a specific calendar using POST method
 */
schedulingRouter.post("/getSessions", async (req, res) => {
  if (req.user?.id) {
    const { calendarId } = req.body;
    const sessions = await getSessions(calendarId);
    res.json(sessions); // Respond with the list of sessions
  } else {
    res.json({}); // Return an empty object if user is not authenticated
  }
});

/**
 * Route to delete a specific session (event) from a calendar
 */
schedulingRouter.post("/deleteSession", async (req, res) => {
  if (req.user?.id) {
    const { calendarId, eventId } = req.body;
    const deleted = await deleteSession(calendarId, eventId);
    res.json(deleted); // Respond with the result of the deletion
  } else {
    res.json({}); // Return an empty object if user is not authenticated
  }
});

/**
 * Route to update a specific event (currently not implemented)
 */
schedulingRouter.post("/patchEvent", async (req, res) => {
  if (req.user?.id) {
    // Implementation for updating an event goes here
    res.json({}); // Placeholder response
  } else {
    res.json({}); // Return an empty object if user is not authenticated
  }
});
