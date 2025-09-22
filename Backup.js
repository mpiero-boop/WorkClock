{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 CourierNewPSMT;\f1\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;\red10\green10\blue11;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c3529\c3529\c4314;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs20 \cf2 \expnd0\expndtw0\kerning0
import React, \{ useState, useRef \} from "react";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ TimeEntry \} from "@/entities/TimeEntry";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ Settings \} from "@/entities/Settings";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ Arbeit2Entry \} from "@/entities/Arbeit2Entry";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ Upload \} from "lucide-react";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ createPageUrl \} from "@/utils";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 export default function WiederherstellenPage() \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [message, setMessage] = useState(null);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [isLoading, setIsLoading] = useState(false);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [progress, setProgress] = useState(0);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [progressText, setProgressText] = useState('');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [backupData, setBackupData] = useState(null);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const fileInputRef = useRef(null);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const showToast = (type, text) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setMessage(\{ type, text \});
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setTimeout(() => setMessage(null), 5000);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const handleRestoreClick = () => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 fileInputRef.current.click();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const handleFileSelect = (e) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const file = e.target.files[0];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (!file) return;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const reader = new FileReader();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 reader.onload = (event) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 try \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const content = event.target.result;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const data = JSON.parse(content);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (!data.timeEntries && !data.arbeit2Entries && !data.settings) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 showToast('error', 'Ung\'fcltiges Backup-Format.');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 return;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 setBackupData(data);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 performRestore(data);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \} catch (error) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 console.error('Fehler beim Lesen der Datei:', error);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 showToast('error', 'Fehler beim Lesen der Backup-Datei.');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 reader.readAsText(file);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 e.target.value = null;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const performRestore = async (data) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setIsLoading(true);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setProgress(0);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 try \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgressText('L\'f6sche alte Daten...');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const [existingTimeEntries, existingArbeit2Entries, existingSettings] = await Promise.all([
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 TimeEntry.list(),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 Arbeit2Entry.list(),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 Settings.list()
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 ]);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const deletePromises = [
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ...existingTimeEntries.map(entry => TimeEntry.delete(entry.id)),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ...existingArbeit2Entries.map(entry => Arbeit2Entry.delete(entry.id)),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ...existingSettings.map(setting => Settings.delete(setting.id))
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 ];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 if (deletePromises.length > 0) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 await Promise.all(deletePromises);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgress(33);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgressText('Bereite Backup-Daten vor...');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const cleanData = (entries) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (!entries || !Array.isArray(entries)) return [];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 return entries.map(entry => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const \{ id, created_date, updated_date, created_by, ...entryData \} = entry;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 return entryData;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \});
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const timeEntriesToCreate = cleanData(data.timeEntries);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const arbeit2EntriesToCreate = cleanData(data.arbeit2Entries);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const settingsToCreate = cleanData(data.settings);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgress(66);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgressText('Importiere neue Eintr\'e4ge...');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const createPromises = [];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 if (timeEntriesToCreate.length > 0) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 createPromises.push(TimeEntry.bulkCreate(timeEntriesToCreate));
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 if (arbeit2EntriesToCreate.length > 0) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 createPromises.push(Arbeit2Entry.bulkCreate(arbeit2EntriesToCreate));
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 if (settingsToCreate.length > 0) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 createPromises.push(Settings.bulkCreate(settingsToCreate));
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 if (createPromises.length > 0) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 await Promise.all(createPromises);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgress(100);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 showToast('success', 'Wiederherstellung erfolgreich! Leite weiter...');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setTimeout(() => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 window.location.href = createPageUrl('Arbeit2');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \}, 2000);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 \} catch (error) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 console.error('Wiederherstellungs-Fehler:', error);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 showToast('error', 'Fehler bei der Wiederherstellung.');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setIsLoading(false);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgress(0);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgressText('');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 if (isLoading) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 return (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <div className="flex flex-col items-center justify-center" style=\{\{ minHeight: 'calc(100vh - 10rem)' \}\}>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="w-96 bg-gray-700/50 rounded-full h-4 overflow-hidden mb-4">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="bg-yellow-400 h-4 rounded-full transition-all duration-300 ease-linear" 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 style=\{\{ width: `$\{progress\}%` \}\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ></div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="mt-4 text-gray-400">\{progressText\} \{Math.round(progress)\}%</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 return (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 <div className="font-inter mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \{message && (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className=\{`toast-container p-4 rounded-lg text-sm text-center font-medium shadow-lg $\{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 message.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}`\} role="alert">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{message.text\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 )\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <input
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 type="file"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 ref__=\{fileInputRef\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 onChange=\{handleFileSelect\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="hidden"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 accept="application/json"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <div className="glassmorphism p-8 rounded-xl max-w-2xl mx-auto">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="text-center mb-8">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <h1 className="text-3xl font-bold text-gray-100 mb-4">Daten wiederherstellen</h1>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-gray-400">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 Backup-Datei ausw\'e4hlen startet sofort die Wiederherstellung.
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="text-center h-24 flex flex-col justify-center">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <button
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 onClick=\{handleRestoreClick\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="button-3d button-active px-8 py-4 text-white font-semibold rounded-lg shadow-lg transition-all duration-200"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 >
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="flex items-center justify-center gap-3">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <Upload className="w-5 h-5" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <span>Backup-Datei ausw\'e4hlen</span>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </button>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \}
\f1\fs32 \cf3 \
}