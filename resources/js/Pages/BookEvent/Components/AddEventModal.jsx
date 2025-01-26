import React, { useState } from "react";
import { router } from "@inertiajs/react";

const AddEventModal = ({ isModalOpen, handleModalClose, queryParams }) => {
    const [formData, setFormData] = useState({
        event_name: "",
        address: "",
        start_date: "",
        end_date: "",
        start_time: "",
        end_time: "",
        rate: "",
        description: "",
        photo: null, // File upload
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle file upload (image upload)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file size (e.g., max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                alert("File size should not exceed 2MB.");
                return;
            }
            setFormData((prev) => ({
                ...prev,
                photo: file,
            }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Form data validation (add more validations as needed)
        if (!formData.event_name || !formData.address || !formData.start_date || !formData.end_date || !formData.start_time || !formData.end_time || !formData.rate) {
            alert("Please fill out all required fields.");
            return;
        }

        // Create a FormData object to handle file upload
        const formDataToSend = new FormData();
        formDataToSend.append("event_name", formData.event_name);
        formDataToSend.append("address", formData.address);
        formDataToSend.append("start_date", formData.start_date);
        formDataToSend.append("end_date", formData.end_date);
        formDataToSend.append("start_time", formData.start_time);
        formDataToSend.append("end_time", formData.end_time);
        formDataToSend.append("rate", formData.rate);
        formDataToSend.append("description", formData.description);

        if (formData.photo) {
            formDataToSend.append("photo", formData.photo);
        }

        // Set submitting state to true to disable form while submitting
        setIsSubmitting(true);

        try {
            // Send the form data to the backend (via Inertia.js)
            router.post(route("eventbook.store"), formDataToSend, {
                onSuccess: () => {
                    handleModalClose(); // Close modal after successful form submission
                    setFormData({ event_name: "", address: "", start_date: "", end_date: "", start_time: "", end_time: "", rate: "", description: "", photo: null }); // Clear form data
                    setIsSubmitting(false); // Reset submitting state
                },
                onError: (errors) => {
                    console.error("Error submitting the form:", errors);
                    alert("Error submitting the form. Please try again.");
                    setIsSubmitting(false); // Reset submitting state
                },
            });
        } catch (error) {
            console.error("Error submitting the form:", error);
            alert("Error submitting the form. Please try again.");
            setIsSubmitting(false); // Reset submitting state
        }
    };

    return (
        <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
                isModalOpen ? "block" : "hidden"
            }`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 sm:w-1/2 overflow-y-auto max-h-[80vh]">
                    <h3 className="text-xl font-semibold mb-6 text-center" id="modal-title">
                        Add New Event
                    </h3>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {/* Event Name */}
                            <div>
                                <label className="block text-gray-700 font-medium" htmlFor="event_name">
                                    Event Name
                                </label>
                                <input
                                    type="text"
                                    name="event_name"
                                    id="event_name"
                                    value={formData.event_name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Address */}
                            <div>
                                <label className="block text-gray-700 font-medium" htmlFor="address">
                                    Event Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Start Date */}
                            <div>
                                <label className="block text-gray-700 font-medium" htmlFor="start_date">
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    name="start_date"
                                    id="start_date"
                                    value={formData.start_date}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* End Date */}
                            <div>
                                <label className="block text-gray-700 font-medium" htmlFor="end_date">
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    name="end_date"
                                    id="end_date"
                                    value={formData.end_date}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Start Time */}
                            <div>
                                <label className="block text-gray-700 font-medium" htmlFor="start_time">
                                    Start Time
                                </label>
                                <input
                                    type="time"
                                    name="start_time"
                                    id="start_time"
                                    value={formData.start_time}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* End Time */}
                            <div>
                                <label className="block text-gray-700 font-medium" htmlFor="end_time">
                                    End Time
                                </label>
                                <input
                                    type="time"
                                    name="end_time"
                                    id="end_time"
                                    value={formData.end_time}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Rate */}
                            <div>
                                <label className="block text-gray-700 font-medium" htmlFor="rate">
                                    Rate (BDT/hr)
                                </label>
                                <input
                                    type="number"
                                    name="rate"
                                    id="rate"
                                    value={formData.rate}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-gray-700 font-medium" htmlFor="description">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    id="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Photo Upload */}
                            <div>
                                <label className="block text-gray-700 font-medium" htmlFor="photo">
                                    Upload Photo (optional)
                                </label>
                                <input
                                    type="file"
                                    name="photo"
                                    id="photo"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end space-x-4 mt-6">
                                <button
                                    type="button"
                                    onClick={handleModalClose}
                                    className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`py-2 px-4 ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500'} text-white rounded-lg hover:bg-blue-600`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEventModal;
