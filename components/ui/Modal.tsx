"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, CheckCircle2, Send } from "lucide-react";
import { LEVINO_CONTACT } from "@/data/levinoData";
import { Button } from "./Button";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDestination?: string;
}

export const BookingModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  defaultDestination = "Any Destination",
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    destination: defaultDestination,
    checkIn: "",
    checkOut: "",
    guests: "2",
    rooms: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#281C13]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-[#FBFBF7] text-[#281C13] rounded-2xl shadow-2xl border border-[#EDECE4] overflow-hidden my-8 z-10"
          >
            {/* Header */}
            <div className="relative px-6 py-5 bg-[#352318] text-[#FBFBF7] flex items-center justify-between border-b border-[#281C13]">
              <div>
                <span className="font-script-accent text-2xl text-[#DDB892] block leading-none mb-1">
                  …a home away from home
                </span>
                <h3 className="font-serif-luxury text-xl font-medium tracking-wide">
                  Plan Your Stay at Levino
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#EDECE4]/70 hover:text-[#FBFBF7] hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-[#38F18C]/10 text-[#27A36B] rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-serif-luxury text-2xl font-semibold text-[#281C13]">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm text-[#6A472F] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold">{formData.fullName || "Guest"}</span>.
                    Our reservations team at Levino will contact you within a few hours to confirm
                    availability and rates.
                  </p>
                  <div className="p-4 bg-[#F5F4EE] rounded-xl border border-[#EDECE4] text-xs text-[#7F5539] space-y-1">
                    <p>Need immediate confirmation?</p>
                    <p className="font-semibold text-sm text-[#281C13]">
                      Call Reception:{" "}
                      <a href={`tel:${LEVINO_CONTACT.primaryPhoneClean}`} className="underline text-[#9C6644]">
                        {LEVINO_CONTACT.primaryPhone}
                      </a>
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button variant="primary" onClick={handleReset} size="md">
                      Done
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-xs text-[#7F5539] mb-4">
                    Share your requirements below and our team will get back to you promptly with room
                    tariffs, event packages, and custom options.
                  </p>

                  {/* Destination Choice */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6A472F] mb-1.5">
                      Select Destination
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Levino Palms", "Levino Meadows", "Any Destination"].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormData({ ...formData, destination: item })}
                          className={`px-3 py-2 text-xs rounded-lg border text-center transition-all cursor-pointer font-medium ${
                            formData.destination === item
                              ? "bg-[#281C13] text-[#FBFBF7] border-[#281C13]"
                              : "bg-white text-[#281C13] border-[#EDECE4] hover:border-[#DDB892]"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#281C13] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Shah"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#EDECE4] rounded-lg text-sm focus:outline-hidden focus:border-[#9C6644] focus:ring-1 focus:ring-[#9C6644] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#281C13] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#EDECE4] rounded-lg text-sm focus:outline-hidden focus:border-[#9C6644] focus:ring-1 focus:ring-[#9C6644] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-[#281C13] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#EDECE4] rounded-lg text-sm focus:outline-hidden focus:border-[#9C6644] focus:ring-1 focus:ring-[#9C6644] transition-all"
                    />
                  </div>

                  {/* Check In & Check Out */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#281C13] mb-1">
                        Check-In Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#EDECE4] rounded-lg text-sm focus:outline-hidden focus:border-[#9C6644] focus:ring-1 focus:ring-[#9C6644] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#281C13] mb-1">
                        Check-Out Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#EDECE4] rounded-lg text-sm focus:outline-hidden focus:border-[#9C6644] focus:ring-1 focus:ring-[#9C6644] transition-all"
                      />
                    </div>
                  </div>

                  {/* Guests & Rooms */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#281C13] mb-1">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#EDECE4] rounded-lg text-sm focus:outline-hidden focus:border-[#9C6644] focus:ring-1 focus:ring-[#9C6644] transition-all"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3-5">3 - 5 Guests</option>
                        <option value="6-10">6 - 10 Guests</option>
                        <option value="10+">Group / Event (10+)</option>
                        <option value="wedding">Wedding (100+)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#281C13] mb-1">
                        Number of Rooms
                      </label>
                      <select
                        value={formData.rooms}
                        onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#EDECE4] rounded-lg text-sm focus:outline-hidden focus:border-[#9C6644] focus:ring-1 focus:ring-[#9C6644] transition-all"
                      >
                        <option value="1">1 Room</option>
                        <option value="2">2 Rooms</option>
                        <option value="3">3 Rooms</option>
                        <option value="4+">4+ Rooms</option>
                        <option value="entire">Full Resort Block</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[#281C13] mb-1">
                      Special Requests / Event Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your trip, preferred meal plans, or wedding requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 bg-white border border-[#EDECE4] rounded-lg text-sm focus:outline-hidden focus:border-[#9C6644] focus:ring-1 focus:ring-[#9C6644] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full shadow-md"
                      icon={<Send className="w-4 h-4" />}
                    >
                      Submit Reservation Inquiry
                    </Button>
                  </div>

                  {/* Call Direct */}
                  <div className="flex items-center justify-center gap-2 pt-2 text-xs text-[#7F5539]">
                    <Phone className="w-3.5 h-3.5 text-[#9C6644]" />
                    <span>Instant assistance:</span>
                    <a
                      href={`tel:${LEVINO_CONTACT.primaryPhoneClean}`}
                      className="font-medium text-[#281C13] underline hover:text-[#9C6644]"
                    >
                      {LEVINO_CONTACT.primaryPhone}
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
