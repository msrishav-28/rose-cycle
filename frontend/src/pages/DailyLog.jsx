import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import { API_BASE_URL } from '../lib/apiConfig';

export default function DailyLog() {
  const { getToken } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  const [flow, setFlow] = useState(null);
  const [pain, setPain] = useState(4);
  const [mood, setMood] = useState(null);
  const [symptoms, setSymptoms] = useState([]);
  const [notes, setNotes] = useState("");

  const toggleSymptom = (sym) => {
    setSymptoms(prev => prev.includes(sym) ? prev.filter(s => s !== sym) : [...prev, sym]);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const token = await getToken();
      await axios.post(`${API_BASE_URL}/logs`, {
        date: new Date().toISOString().split('T')[0],
        flow: flow,
        mood: mood,
        pain_level: pain,
        notes: notes
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Give some visual feedback, usually a toast, or reset form.
      alert('Entry saved successfully!'); 
    } catch (err) {
      console.error("Failed to save log", err);
      alert('Failed to save log.');
    } finally {
      setIsSaving(false);
    }
  };

  const currentDateText = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'short', day: 'numeric' }).format(new Date());

  const flows = [
    { id: 'None', label: 'None', icon: <span className="material-symbols-outlined text-outline">water_drop</span> },
    { id: 'Light', label: 'Light', icon: <span className="material-symbols-outlined text-primary/60">water_drop</span> },
    { id: 'Medium', label: 'Medium', icon: <span className="material-symbols-outlined text-primary">water_drop</span> },
    { id: 'Heavy', label: 'Heavy', icon: <div className="relative"><span className="material-symbols-outlined text-primary/80">water_drop</span><span className="material-symbols-outlined absolute -right-2 text-primary/80">water_drop</span></div> },
    { id: 'V. Heavy', label: 'V. Heavy', icon: <span className="material-symbols-outlined text-primary">blood_pressure</span> }
  ];

  const moods = [
    { id: 'Happy', emoji: '✨' }, { id: 'Tired', emoji: '😴' }, { id: 'Anxious', emoji: '🌪️' },
    { id: 'Calm', emoji: '☁️' }, { id: 'Cravings', emoji: '🍕' }, { id: 'Sensitive', emoji: '🥺' },
    { id: 'Energetic', emoji: '⚡️' }, { id: 'Focused', emoji: '🧘‍♀️' }, { id: 'Overwhelmed', emoji: '🫠' }
  ];

  const symptomList = ['Cramps', 'Bloating', 'Acne', 'Headache', 'Nausea', 'Backache'];

  return (
    <>
      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-10 pb-32">
        {/* Header Section */}
        <header className="space-y-2">
          <h1 className="font-['Instrument_Serif'] text-[3.5rem] leading-tight text-on-surface">How are you feeling today?</h1>
          <p className="text-primary font-['Instrument_Serif'] text-xl italic opacity-80">{currentDateText}</p>
        </header>

        {/* Logging Form Section: Flow */}
        <section className="space-y-6">
          <h2 className="font-headline text-2xl text-on-surface-variant">Flow</h2>
          <div className="flex justify-between items-center gap-2 overflow-x-auto no-scrollbar py-2">
            {flows.map((f) => {
              const active = flow === f.id;
              return (
                <button 
                  key={f.id} 
                  onClick={() => setFlow(f.id)}
                  className={`flex flex-col items-center gap-3 p-4 min-w-[80px] rounded-xl transition-colors ${active ? 'bg-primary-container/40 border border-primary/10' : 'bg-surface-container-low hover:bg-primary-container/20'}`}
                >
                  {f.icon}
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${active ? 'text-primary' : (f.id === 'None' ? 'text-outline' : 'text-on-surface-variant')}`}>{f.label}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Pain Slider Section */}
        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="font-headline text-2xl text-on-surface-variant">Pain Level</h2>
            <span className="font-['Instrument_Serif'] text-3xl text-primary">{pain}/10</span>
          </div>
          <div className="px-2">
            <input 
              className="w-full h-2 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary" 
              max="10" min="1" type="range" 
              value={pain} 
              onChange={(e) => setPain(parseInt(e.target.value))}
            />
            <div className="flex justify-between mt-4 text-2xl">
              <span>😊</span><span>😐</span><span>😟</span><span>😫</span>
            </div>
          </div>
        </section>

        {/* Mood Grid */}
        <section className="space-y-6">
          <h2 className="font-headline text-2xl text-on-surface-variant">Mood</h2>
          <div className="grid grid-cols-3 gap-4">
            {moods.map((m) => {
              const active = mood === m.id;
              return (
                <button 
                  key={m.id} 
                  onClick={() => setMood(m.id)}
                  className={`glass-card p-6 rounded-xl flex flex-col items-center gap-2 transition-colors ${active ? 'bg-secondary-container' : 'hover:bg-secondary-container'}`}
                >
                  <span className="text-3xl">{m.emoji}</span>
                  <span className={`text-xs font-semibold ${active ? 'text-on-secondary-container' : 'text-on-surface-variant'}`}>{m.id}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Symptoms Horizontal List */}
        <section className="space-y-6">
          <h2 className="font-headline text-2xl text-on-surface-variant">Symptoms</h2>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {symptomList.map((sym) => {
              const active = symptoms.includes(sym);
              return (
                <button 
                  key={sym} 
                  onClick={() => toggleSymptom(sym)}
                  className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap shadow-sm transition-colors ${active ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant border border-transparent hover:border-primary/20'}`}
                >
                  {sym}
                </button>
              );
            })}
          </div>
        </section>

        {/* Notes Section */}
        <section className="space-y-6">
          <h2 className="font-headline text-2xl text-on-surface-variant">Journal thoughts</h2>
          <textarea 
            className="w-full min-h-[160px] p-6 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-lowest text-on-surface placeholder:text-outline/60 resize-none font-body" 
            placeholder="How's your mind today? Write it down here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </section>

        {/* Save Button */}
        <section className="pt-4">
          <button 
            onClick={handleSave} 
            disabled={isSaving}
            className={`w-full py-5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg shadow-[0px_8px_24px_rgba(142,74,75,0.25)] hover:opacity-90 active:scale-[0.98] transition-all ${isSaving ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSaving ? "Saving..." : "Save Entry"}
          </button>
        </section>
      </main>



      {/* Decorative Background Bloom */}
      <div className="fixed top-[-10%] right-[-10%] w-[60%] h-[40%] bg-primary-container/20 blur-[120px] -z-10 rounded-full"></div>
      <div className="fixed bottom-[-5%] left-[-10%] w-[50%] h-[30%] bg-secondary-container/30 blur-[100px] -z-10 rounded-full"></div>
    </>
  );
}
