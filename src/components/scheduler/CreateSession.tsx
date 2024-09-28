import { useEffect, useState } from "react";
import "./createSession.css";
import { DateTime } from "luxon";

interface Calendar {
  calendarId: string;
  timeZone: string;
}

function SchedulerTemp() {
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [calendars, setCalendars] = useState([]);
  const [sessions, setSessions] = useState([]);

  const [currentCalendar, setCurrentCalendar] = useState<Calendar>({
    calendarId: "",
    timeZone: "",
  });

  useEffect(() => {
    getCalendars();
  }, []);

  useEffect(() => {
    if (currentCalendar.calendarId !== "") {
      getSessions();
    }
  }, [currentCalendar.calendarId]);

  function getCalendars() {
    fetch("/getCalendars")
      .then((res) => res.json())
      .then((data) => {
        setCalendars(data);
        const { id, timeZone } = data[0];
        setCurrentCalendar({ calendarId: id, timeZone });
      });
  }

  function deleteSession(eventId: string) {
    fetch("/deleteSession", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ calendarId: currentCalendar.calendarId, eventId }),
    })
      .then((res) => res.json())
      .then(() => {
        getSessions();
      });
  }

  function getSessions() {
    fetch("/getSessions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ calendarId: currentCalendar.calendarId }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.items);
        setSessions(data.data.items);
      });
  }

  function createSession(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //ensure time range is not empty, or end date comes before start date
    const start = DateTime.fromISO(startTime);
    const end = DateTime.fromISO(endTime);

    if (end < start) {
      console.log("time range empty");
      return;
    }

    fetch("/createSession", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        calendarId: currentCalendar.calendarId,
        event: {
          summary,
          description,
          start: {
            dateTime: DateTime.fromISO(startTime!)
              .setZone(currentCalendar.timeZone)
              .toISO(),
            timeZone: currentCalendar.timeZone,
          },
          end: {
            dateTime: DateTime.fromISO(endTime!)
              .setZone(currentCalendar.timeZone)
              .toISO(),
            timeZone: currentCalendar.timeZone,
          },
          reminders: {
            useDefault: false,
            overrides: [
              { method: "email", minutes: 60 * 60 * 24 }, // Send reminder 60 minutes before
              { method: "popup", minutes: 10 }, // Send popup reminder 10 minutes before
            ],
          },
          extendedProperties: {
            shared: {
              eventType: "PSTutor", // filter by this to get all tutoring events
            },
          },
        },
      }),
    })
      .then((res) => res.json())
      .then(() => {
        getSessions();
        setStartTime("");
        setEndTime("");
        setSummary("");
        setDescription("");
      });
  }

  const renderedCalendars = calendars?.map((calendar) => (
    <option
      data-timezone={calendar["timeZone"]}
      id={calendar["id"]}
      value={calendar["id"]}
    >
      {calendar["summary"]}
    </option>
  ));

  const renderedSession = sessions?.map((session) => (
    <div>
      {`Summary:${session["summary"]} Desc: ${session["description"]} Start:${session["start"]["dateTime"]} End:${session["end"]["dateTime"]}`}
      <a href={session["htmlLink"]} target="_blank" rel="noopener noreferrer">
        Link
      </a>
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteSession(session["id"]);
        }}
      >
        Delete
      </button>
    </div>
  ));

  return (
    <>
      <div>create session</div>
      <select
        onChange={(e) => {
          const selectedOption = e.target.options[e.target.selectedIndex];
          const timeZone = selectedOption.dataset.timezone || "";
          setCurrentCalendar({ calendarId: selectedOption.value, timeZone });
        }}
      >
        {renderedCalendars}
      </select>
      <form onSubmit={createSession}>
        <div className="mb-3">
          <label htmlFor="summary" className="form-label">
            Summary:
          </label>
          <input
            type="text"
            id="summary"
            onChange={(e) => setSummary(e.target.value)}
            value={summary}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          >
            A chance to hear more about Google's developer products.
          </textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="start-date-time" className="form-label">
            Start Date and Time
          </label>
          <input
            type="datetime-local"
            id="start-date-time"
            onChange={(e) => setStartTime(e.target.value)}
            value={startTime}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="end-date-time" className="form-label">
            End Date and Time
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="end-date-time"
            onChange={(e) => setEndTime(e.target.value)}
            value={endTime}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>

        {renderedSession}

        <iframe
          src={`https://calendar.google.com/calendar/embed?src=${currentCalendar.calendarId}&ctz=${currentCalendar.timeZone}&showPrint=0&showCalendars=0`}
        ></iframe>
      </form>
    </>
  );
}

export default SchedulerTemp;
