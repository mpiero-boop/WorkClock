{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 CourierNewPSMT;\f1\fswiss\fcharset0 Helvetica;\f2\fswiss\fcharset0 Arial-BoldMT;
}
{\colortbl;\red255\green255\blue255;\red10\green10\blue11;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c3529\c3529\c4314;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs20 \cf2 \expnd0\expndtw0\kerning0
import React, \{ useState, useEffect, useCallback \} from "react";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ TimeEntry \} from "@/entities/TimeEntry";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ Settings \} from "@/entities/Settings";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 export default function LohnPage() \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [currentDate, setCurrentDate] = useState(new Date());
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [hourlyRate, setHourlyRate] = useState(23.45);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [lohnRows, setLohnRows] = useState([]);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [rows, setRows] = useState([]);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [isLoading, setIsLoading] = useState(true);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [message, setMessage] = useState(null);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const CURRENT_SCHEMA_VERSION = 2;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 // ... (Hilfsfunktionen timeToMinutes, minutesToTime, roundToFiveCents bleiben gleich)
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const timeToMinutes = (time) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (!time || time === '.' || time === '00:00') return 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const parts = time.split(':');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const hours = Number(parts[0]);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const minutes = Number(parts[1] || '0');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (isNaN(hours) || isNaN(minutes)) return 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 return hours * 60 + minutes;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const minutesToTime = (minutes) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (isNaN(minutes) || minutes < 0) return '00:00';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const h = Math.floor(minutes / 60);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const m = Math.round(minutes % 60);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 return `$\{String(h).padStart(2, '0')\}:$\{String(m).padStart(2, '0')\}`;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const roundToFiveCents = (value) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (isNaN(value)) return 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const totalCents = Math.round(value * 100);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const lastDigit = totalCents % 10;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 let roundedCents;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (lastDigit <= 2) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 roundedCents = totalCents - lastDigit;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 \} else if (lastDigit <= 7) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 roundedCents = totalCents - lastDigit + 5;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 \} else \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 roundedCents = totalCents - lastDigit + 10;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 return roundedCents / 100;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const getInitialLohnRows = useCallback(() => Array.from(\{ length: 12 \}, (_, i) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 let beschreibung = '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 let einzelpreis = '';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (i === 0) beschreibung = 'Grundlohn';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (i === 1) \{ beschreibung = 'Feriengeld'; einzelpreis = '8.33'; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (i === 2) \{ beschreibung = '13. Monatslohn'; einzelpreis = '8.33'; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (i === 3) beschreibung = 'Bruttolohn';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (i === 4) \{ beschreibung = 'AHV-Beitrag'; einzelpreis = '5.3'; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (i === 5) \{ beschreibung = 'NBUV-Beitrag'; einzelpreis = '1.25'; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (i === 6) \{ beschreibung = 'BUV-Beitrag'; einzelpreis = '1.14'; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (i === 7) \{ beschreibung = 'Kranken-Taggeld'; einzelpreis = '0.75'; \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (i === 8) beschreibung = 'Total Abz\'fcge';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (i === 9) beschreibung = 'Anzahlung';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (i === 10) beschreibung = 'Restzahlung';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (i === 11) beschreibung = 'Nettolohn';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 return \{ id: i, beschreibung, menge: '', einzelpreis, gesamt: '0.00' \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \}), []);
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

\f0\fs20 \cf2 \'a0 const getCorrectedConfig = useCallback((config) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const initial = getInitialLohnRows();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 if (!config || config.length === 0) return initial;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const corrected = initial.map(row => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const oldRow = config.find(r => r.beschreibung === row.beschreibung);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 // \'dcbernehme den alten Einzelpreis, falls er existiert und editierbar war
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (oldRow && oldRow.einzelpreis && ![0,3,8,9,10,11].includes(row.id)) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 return \{ ...row, einzelpreis: oldRow.einzelpreis \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 return row;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \});
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 return corrected;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \}, [getInitialLohnRows]);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 useEffect(() => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const loadData = async () => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setIsLoading(true);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 try \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const settingsList = await Settings.list();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 let settingsEntry = settingsList.length > 0 ? settingsList[0] : null;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (!settingsEntry || settingsEntry.version !== CURRENT_SCHEMA_VERSION) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 showToast('info', 'Lohn-Einstellungen werden aktualisiert...');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const correctedConfig = getCorrectedConfig(settingsEntry?.lohnConfig);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const currentRate = settingsEntry?.hourlyRate || 23.45;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (settingsEntry) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 await Settings.delete(settingsEntry.id);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const newSettings = await Settings.create(\{ 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 hourlyRate: currentRate, 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 lohnConfig: correctedConfig,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 version: CURRENT_SCHEMA_VERSION
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \});
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 setLohnRows(newSettings.lohnConfig);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 setHourlyRate(newSettings.hourlyRate);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \} else \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 setLohnRows(settingsEntry.lohnConfig);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 setHourlyRate(settingsEntry.hourlyRate);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const year = currentDate.getFullYear();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const month = currentDate.getMonth();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const timeEntries = await TimeEntry.filter(\{ month, year \});
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 setRows(timeEntries || []);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \} catch (error) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 console.error('Fehler beim Laden:', error);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 showToast('error', 'Fehler beim Laden der Daten.');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 setLohnRows(getInitialLohnRows());
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setIsLoading(false);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 loadData();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \}, [currentDate, getCorrectedConfig, getInitialLohnRows]);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const handleRateChange = async (e) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const newRate = parseFloat(e.target.value) || 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setHourlyRate(newRate);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 saveSettings(newRate, lohnRows);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const handleLohnInputChange = async (id, field, value) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const newRows = lohnRows.map(row => 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 row.id === id ? \{ ...row, [field]: value \} : row
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 );
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setLohnRows(newRows);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 saveSettings(hourlyRate, newRows);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const saveSettings = async (rate, config) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 try \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const settingsList = await Settings.list();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const settingsId = settingsList.length > 0 ? settingsList[0].id : null;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const dataToSave = \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 hourlyRate: rate,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 lohnConfig: config,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 version: CURRENT_SCHEMA_VERSION
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (settingsId) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 await Settings.update(settingsId, dataToSave);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \} else \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 await Settings.create(dataToSave);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \} catch (error) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 console.error("Speicherfehler:", error);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 showToast('error', 'Fehler beim Speichern der Einstellungen.');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 useEffect(() => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (lohnRows.length === 0) return;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const updateLohnRows = () => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const totalMinutes = rows.reduce((acc, row) => acc + timeToMinutes(row.hours), 0);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const totalHoursDecimal = totalMinutes / 60;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 const grossSalary = totalHoursDecimal * hourlyRate;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setLohnRows(currentRows => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (currentRows.length < 12) return getInitialLohnRows(); // Sicherheitsabfrage
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const newRows = [...currentRows];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Grundlohn
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRows[0] = \{ ...newRows[0], menge: totalHoursDecimal.toFixed(2), einzelpreis: hourlyRate.toFixed(2), gesamt: grossSalary.toFixed(2) \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Feriengeld
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const row2Einzelpreis = parseFloat(newRows[1]?.einzelpreis.replace(',', '.') || '0');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRows[1] = \{ ...newRows[1], menge: grossSalary.toFixed(2), gesamt: (grossSalary * (row2Einzelpreis / 100)).toFixed(2) \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 // 13. Monatslohn
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const row3Einzelpreis = parseFloat(newRows[2]?.einzelpreis.replace(',', '.') || '0');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRows[2] = \{ ...newRows[2], menge: grossSalary.toFixed(2), gesamt: (grossSalary * (row3Einzelpreis / 100)).toFixed(2) \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Bruttolohn
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const bruttolohn = (parseFloat(newRows[0].gesamt) || 0) + (parseFloat(newRows[1].gesamt) || 0) + (parseFloat(newRows[2].gesamt) || 0);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRows[3] = \{ ...newRows[3], gesamt: bruttolohn.toFixed(2) \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Abz\'fcge
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const ahvEinzelpreis = parseFloat(newRows[4]?.einzelpreis.replace(',', '.') || '0');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRows[4] = \{ ...newRows[4], menge: bruttolohn.toFixed(2), gesamt: (bruttolohn * (ahvEinzelpreis / 100)).toFixed(2) \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const nbuvEinzelpreis = parseFloat(newRows[5]?.einzelpreis.replace(',', '.') || '0');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRows[5] = \{ ...newRows[5], menge: bruttolohn.toFixed(2), gesamt: (bruttolohn * (nbuvEinzelpreis / 100)).toFixed(2) \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const buvEinzelpreis = parseFloat(newRows[6]?.einzelpreis.replace(',', '.') || '0');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRows[6] = \{ ...newRows[6], menge: bruttolohn.toFixed(2), gesamt: (bruttolohn * (buvEinzelpreis / 100)).toFixed(2) \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const krankentaggeldEinzelpreis = parseFloat(newRows[7]?.einzelpreis.replace(',', '.') || '0');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRows[7] = \{ ...newRows[7], menge: bruttolohn.toFixed(2), gesamt: (bruttolohn * (krankentaggeldEinzelpreis / 100)).toFixed(2) \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Total Abz\'fcge
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const totalAbzuege = (parseFloat(newRows[4].gesamt) || 0) + (parseFloat(newRows[5].gesamt) || 0) + (parseFloat(newRows[6].gesamt) || 0) + (parseFloat(newRows[7].gesamt) || 0);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRows[8] = \{ ...newRows[8], gesamt: totalAbzuege.toFixed(2) \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Nettolohn
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const nettolohn = roundToFiveCents(bruttolohn - totalAbzuege);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRows[11] = \{ ...newRows[11], gesamt: nettolohn.toFixed(2) \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Anzahlung (1-25)
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const downPaymentHoursDecimal = rows.reduce((acc, row) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const day = parseInt(row.date.split('.')[0], 10);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 return (day >= 1 && day <= 25) ? acc + timeToMinutes(row.hours) : acc;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}, 0) / 60;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const downPaymentGrossSalary = downPaymentHoursDecimal * hourlyRate;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const downPaymentBruttolohn = downPaymentGrossSalary * (1 + (row2Einzelpreis / 100) + (row3Einzelpreis / 100));
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const downPaymentTotalAbzuege = downPaymentBruttolohn * ((ahvEinzelpreis + nbuvEinzelpreis + buvEinzelpreis + krankentaggeldEinzelpreis) / 100);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const anzahlung = roundToFiveCents(downPaymentBruttolohn - downPaymentTotalAbzuege);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRows[9] = \{ ...newRows[9], beschreibung: 'Anzahlung', menge: anzahlung > 0 ? anzahlung.toFixed(2) : '', gesamt: anzahlung.toFixed(2) \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Restzahlung
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const restzahlung = roundToFiveCents(nettolohn - anzahlung);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRows[10] = \{ ...newRows[10], beschreibung: 'Restzahlung', menge: restzahlung > 0 ? restzahlung.toFixed(2) : '', gesamt: restzahlung.toFixed(2) \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const manualAnzahlungEinzelpreis = parseFloat(newRows[9]?.einzelpreis.replace(',', '.') || '0');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const manualAnzahlungMenge = parseFloat(newRows[9]?.menge.replace(',', '.') || '0');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 if (manualAnzahlungEinzelpreis > 0 && manualAnzahlungMenge > 0) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 newRows[9].gesamt = (manualAnzahlungMenge * manualAnzahlungEinzelpreis).toFixed(2);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 return newRows;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \});
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 updateLohnRows();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \}, [rows, hourlyRate, lohnRows.length, getInitialLohnRows]);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 if (isLoading) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 return (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <div className="flex flex-col items-center justify-center h-full">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="loader"></div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="mt-4 text-gray-400">Inhalt wird geladen...</p>
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

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 message.type === 'success' ? 'bg-green-600 text-white' : message.type === 'info' ? 'bg-blue-600 text-white' : 'bg-red-600 text-white'
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

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <div className="glassmorphism p-6 rounded-lg shadow-xl">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <h2 className="mb-4 text-xl font-bold text-gray-50">Lohnberechnung</h2>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="mb-6">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <label className="block text-base font-medium text-gray-400 mb-2">Stundenlohn (CHF)</label>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <input
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 type="number"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 step="0.01"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 value=\{hourlyRate\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 onChange=\{handleRateChange\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="input-3d w-full p-4 text-lg font-medium"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 aria-label="Stundenlohn eingeben"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="table-3d">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <table className="min-w-full divide-y divide-gray-700">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <thead className="bg-gray-700/50">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <tr>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Beschreibung</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Menge</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Einzelpreis (%)</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-6 py-4 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Gesamt (CHF)</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </tr>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </thead>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <tbody className="bg-gray-800/20 divide-y divide-gray-700">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{lohnRows.map((row) => (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <tr key=\{row.id\} className="table-row-3d">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 whitespace-nowrap">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <input 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 type="text" 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="input-3d text-base font-medium py-3 bg-transparent border-0 focus:ring-0 w-full" 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 value=\{row.beschreibung\} 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 readOnly
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 whitespace-nowrap">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <input 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 type="text" 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="input-3d w-24 text-base font-medium py-3 text-gray-400 bg-transparent border-0 focus:ring-0" 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 value=\{row.menge\} 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 onChange=\{e => handleLohnInputChange(row.id, 'menge', e.target.value)\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 readOnly=\{row.id !== 9\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 whitespace-nowrap">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <input
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 type="text"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 className="input-3d w-24 text-base font-medium py-3 bg-transparent border-0 focus:ring-0"
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 value=\{row.einzelpreis\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 onChange=\{e => handleLohnInputChange(row.id, 'einzelpreis', e.target.value)\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 readOnly=\{row.id === 0 || row.id === 3 || row.id >= 8 && row.id !== 9\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 text-base font-bold text-blue-400 whitespace-nowrap">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{row.gesamt\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </tr>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ))\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </tbody>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </table>
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

\f2\b\fs48 \cf2 \'a0
\f1\b0\fs32 \cf3 \
}