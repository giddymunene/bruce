import { useEffect, useState } from "react";
import API from "../api";

function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await API.get("/messages");
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to fetch messages:", err);
    }
  };

  const approveMessage = async (id) => {
    await API.put(`/messages/${id}/approve`);
    fetchMessages();
  };

  const rejectMessage = async (id) => {
    await API.put(`/messages/${id}/reject`);
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">📩 User Messages</h2>

      {messages.length === 0 ? (
        <p className="text-gray-500">No messages yet.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg._id}
              className="border p-4 rounded-lg shadow-sm flex justify-between items-start"
            >
              <div>
                <p><strong>Name:</strong> {msg.name}</p>
                <p><strong>Email:</strong> {msg.email}</p>
                <p><strong>Message:</strong> {msg.message}</p>
                <p className="text-sm text-gray-500">
                  Sent on {new Date(msg.createdAt).toLocaleString()}
                </p>
                <p className="mt-1">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      msg.status === "approved"
                        ? "bg-green-200 text-green-800"
                        : msg.status === "rejected"
                        ? "bg-red-200 text-red-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {msg.status}
                  </span>
                </p>
              </div>
              {msg.status === "pending" && (
                <div className="space-x-2">
                  <button
                    onClick={() => approveMessage(msg._id)}
                    className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => rejectMessage(msg._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdminMessages;
