const EventModal = ({ event, onClose }) => {
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl p-6">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">{event.event_name}</h2>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Start Date:</strong> {event.start_date}</p>
        <p><strong>End Date:</strong> {event.end_date || "N/A"}</p>
        <p><strong>Start Time:</strong> {event.start_time || "N/A"}</p>
        <p><strong>End Time:</strong> {event.end_time || "N/A"}</p>
        <p><strong>Rate:</strong> BDT {event.rate}</p>
        <p><strong>Description:</strong> {event.description || "No description available."}</p>
        <img
          src={event.photo_url || "https://via.placeholder.com/150"}
          alt={event.event_name}
          className="w-full h-64 object-cover mt-4"
        />
        <button
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Book Event
        </button>
      </div>
    </div>
  );
};

export default EventModal;
