/* eslint-disable import/no-unresolved */
import { getTimeEntries } from "../getTimeEntries";

const mockedTimeEntries = [
  {
    id: 1,
    client: "Koppert",
    activity: "Development",
    startTime: "2021-04-02T00:49:47Z",
    endTime: "2021-04-02T11:49:47Z",
  },
];

it("fetches TimeEntries from the server", () => {
  const mockJsonPromise = Promise.resolve(mockedTimeEntries);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  const unmockedFetch = global.fetch;
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  getTimeEntries();

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(
    global.fetch,
  ).toHaveBeenCalledWith(
    "https://my-json-server.typicode.com/humanoidsbv/team-awesome-bob/time-entries?_sort=startTime",
    { headers: { "Content-Type": "application/json" }, method: "GET" },
  );

  global.fetch = unmockedFetch;
});
