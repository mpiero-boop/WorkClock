{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 CourierNewPSMT;\f1\fswiss\fcharset0 Helvetica;\f2\fswiss\fcharset0 Arial-BoldMT;
}
{\colortbl;\red255\green255\blue255;\red10\green10\blue11;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c3529\c3529\c4314;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs20 \cf2 \expnd0\expndtw0\kerning0
import React, \{ useState \} from "react";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ TimeEntry \} from "@/entities/TimeEntry";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ Settings \} from "@/entities/Settings";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ Arbeit2Entry \} from "@/entities/Arbeit2Entry";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ Download \} from "lucide-react";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ createPageUrl \} from "@/utils";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 export default function BackupPage() \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [message, setMessage] = useState(null);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [isLoading, setIsLoading] = useState(false);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [progress, setProgress] = useState(0);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [progressText, setProgressText] = useState('');
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

\f0\fs20 \cf2 \'a0 // Backup erstellen
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const handleBackupClick = async () => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setIsLoading(true);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setProgress(0);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setProgressText(''); // Reset progress text at start
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 try \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 // Alle Daten sammeln
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgressText('Sammle Zeiteintr\'e4ge...');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const timeEntries = await TimeEntry.list();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgress(25);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgressText('Sammle Arbeit2-Eintr\'e4ge...');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const arbeit2Entries = await Arbeit2Entry.list();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgress(50);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgressText('Sammle Einstellungen...');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const settings = await Settings.list();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgress(75);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const backupData = \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 version: "3.5",
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 timestamp: new Date().toISOString(),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 timeEntries: timeEntries,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 arbeit2Entries: arbeit2Entries,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 settings: settings
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 // JSON-Datei erstellen
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgressText('Erstelle Backup-Datei...');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const jsonString = JSON.stringify(backupData, null, 2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const blob = new Blob([jsonString], \{ type: 'application/json' \});
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const url = URL.createObjectURL(blob);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setProgress(100);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 // Download starten
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const a = document.createElement('a');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 a.href = url;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const date = new Date().toISOString().split('T')[0];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 a.download = `zeitenkoenig_backup_$\{date\}.json`;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 document.body.appendChild(a);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 a.click();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 document.body.removeChild(a);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 URL.revokeObjectURL(url);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 showToast('success', 'Backup erfolgreich! Leite weiter...');
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

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 console.error('Backup-Fehler:', error);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 showToast('error', 'Fehler beim Erstellen des Backups');
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

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="bg-green-400 h-4 rounded-full transition-all duration-300 ease-linear" 
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

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \{/* Toast Messages */\}
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

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <div className="glassmorphism p-8 rounded-xl max-w-2xl mx-auto">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="text-center mb-8">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <h1 className="text-3xl font-bold text-gray-100 mb-4">Backup erstellen</h1>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-gray-400">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 Erstellen Sie eine vollst\'e4ndige Sicherungskopie Ihrer Daten als JSON-Datei.
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="space-y-6">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="text-center h-24 flex flex-col justify-center">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <button
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 onClick=\{handleBackupClick\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="button-3d button-active px-8 py-4 text-white font-semibold rounded-lg shadow-lg transition-all duration-200"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 >
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="flex items-center justify-center gap-3">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <Download className="w-5 h-5" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <span>Backup jetzt herunterladen</span>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </button>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
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
\pard\pardeftab720\partightenfactor0

\f2\b\fs48 \cf2 \'a0
\f1\b0\fs32 \cf3 \

\f2\b\fs48 \cf2 \'a0
\f1\b0\fs32 \cf3 \
}