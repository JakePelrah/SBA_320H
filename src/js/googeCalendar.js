/**
 * Google Calendar API Wrapper
 * 
 * This module provides a set of functions to interact with the Google Calendar API.
 * It includes functionality to initialize the calendar service, list calendars, 
 * retrieve calendar information and settings, create, delete, and patch events,
 * and list events with a specific property.
 * 
 * Functions:
 * - initCalendar(accessToken): Initializes the Google Calendar service with the provided OAuth access token.
 * - listCalendars(): Retrieves a list of the user's Google Calendars.
 * - getCalendarInfo(calendarId): Fetches information about a specified calendar.
 * - getSettings(): Retrieves calendar settings.
 * - createSession(calendarId, resource): Creates a new calendar event.
 * - deleteSession(calendarId, eventId): Deletes an existing calendar event by its ID.
 * - patchEvent(calendarId, eventId, resource): Updates an existing calendar event.
 * - getSessions(calendarId): Lists events with the custom property "PSTutor" from a specified calendar.
 * 
 * Usage:
 * - Ensure you have set up OAuth 2.0 and have a valid access token for API requests.
 * 
 * @module GoogleCalendarAPI
 * @version 1.0
 * @license MIT
 */

import google from "googleapis";
import { calendar } from "@googleapis/calendar";

let cal = null; // Cached instance of the Google Calendar service

// Initialize OAuth client for Google Calendar API
export async function initCalendar(accessToken) {
  // Check if the calendar service has already been initialized
  if (cal) return cal;

  // Create a new OAuth client and set the provided access token
  let oauth2Client = new google.Auth.OAuth2Client();
  oauth2Client.setCredentials({ access_token: accessToken });

  // Initialize the Google Calendar service with the authenticated client
  cal = calendar({ version: "v3", auth: oauth2Client });
}

// Retrieve a list of the user's Google Calendars
export async function listCalendars() {
  return await cal.calendarList.list();
}

// Fetch detailed information about a specific calendar
export async function getCalendarInfo(calendarId) {
  if (calendarId) return await cal.calendars.get({ calendarId });
}

// Retrieve the settings for the user's calendars
export async function getSettings(params) {
  return await cal.settings.list();
}

// Create a new calendar event (session) in the specified calendar
export async function createSession(calendarId, resource) {
  return await cal.events.insert({ calendarId, resource });
}

// Delete an existing calendar event by its ID
export async function deleteSession(calendarId, eventId) {
  return await cal.events.delete({ calendarId, eventId });
}

// Update an existing calendar event using its ID and new resource data
export async function patchEvent(calendarId, eventId, resource) {
  return await cal.events.patch({
    calendarId,
    eventId,
    resource,
  });
}

// List all events in a calendar that have the custom property "PSTutor"
export async function getSessions(calendarId) {
  return await cal.events.list({
    calendarId,
    sharedExtendedProperty: "eventType=PSTutor",
  });
}
