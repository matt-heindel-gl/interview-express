/**
 * Mock function that simulates raising an event with a delay
 * @param {string} eventName - Name of the event to raise
 * @param {object} data - Event data
 * @returns {Promise} - Resolves after the delay
 */
const raiseEvent = (eventName, data) => {
  console.log(`🔔 Starting raiseEvent: ${eventName}`, data);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ Completed raiseEvent: ${eventName}`);
      resolve({ success: true, eventName, data });
    }, 1000);
  });
};

/**
 * Mock function that simulates updating a database with a delay
 * @param {string} id - ID of the record to update
 * @param {object} data - Data to update
 * @returns {Promise} - Resolves after the delay
 */
const updateDatabase = (id, data) => {
  console.log(`💾 Starting updateDatabase for id: ${id}`, data);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ Completed updateDatabase for id: ${id}`);
      resolve({ success: true, id, updatedData: data });
    }, 1000);
  });
};

/**
 * Mock function that simulates a request that fails
 * @returns {Promise} - Rejects after the delay
 */
const requestThatFails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Request failed"));
    }, 1000);
  });
};

module.exports = {
  raiseEvent,
  updateDatabase,
  requestThatFails,
};
