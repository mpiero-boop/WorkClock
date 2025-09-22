{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 CourierNewPSMT;\f1\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;\red10\green10\blue11;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c3529\c3529\c4314;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs20 \cf2 \expnd0\expndtw0\kerning0
import React, \{ useState, useEffect, useCallback, useMemo \} from "react";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ TimeEntry \} from "@/entities/TimeEntry";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ Settings \} from "@/entities/Settings";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 import \{ ChevronLeft, ChevronRight, TrendingUp \} from "lucide-react";
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 const monthNames = [
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 'Januar', 'Februar', 'M\'e4rz', 'April', 'Mai', 'Juni',
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
\f1\fs32 \cf3 \

\f0\fs20 \cf2 ];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 export default function JahresbilanzPage() \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [currentDate, setCurrentDate] = useState(new Date());
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [yearlySummary, setYearlySummary] = useState([]);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [isLoading, setIsLoading] = useState(true);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [hourlyRate, setHourlyRate] = useState(23.45);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [message, setMessage] = useState(null);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const [loadingProgress, setLoadingProgress] = useState(0);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const timeToMinutes = useCallback((time) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (!time || typeof time !== 'string' || time === '.' || time === '00:00') return 0;
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

\f0\fs20 \cf2 \'a0 \}, []);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const minutesToTime = useCallback((minutes) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (isNaN(minutes) || minutes < 0) return '00:00';
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const h = Math.floor(minutes / 60);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const m = Math.round(minutes % 60);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 return `$\{String(h).padStart(2, '0')\}:$\{String(m).padStart(2, '0')\}`;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \}, []);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const roundToFiveCents = useCallback((value) => \{
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

\f0\fs20 \cf2 \'a0 \}, []);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const calculateMonthlyNettolohn = useCallback((monthRows, rate) => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 if (!monthRows || monthRows.length === 0) return 0;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const totalMinutes = monthRows.reduce((acc, row) => acc + timeToMinutes(row.hours || '00:00'), 0);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const totalHoursDecimal = totalMinutes / 60;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const grossSalary = totalHoursDecimal * rate;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const feriengeldPercent = 8.33;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const monatslohn13Percent = 8.33;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const ahvPercent = 5.3;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const nbuvPercent = 1.25;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const buvPercent = 1.14;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const krankentaggeldPercent = 0.75;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const feriengeldGesamt = grossSalary * (feriengeldPercent / 100);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const monatslohn13Gesamt = grossSalary * (monatslohn13Percent / 100);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const bruttolohn = grossSalary + feriengeldGesamt + monatslohn13Gesamt;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const ahvGesamt = bruttolohn * (ahvPercent / 100);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const nbuvGesamt = bruttolohn * (nbuvPercent / 100);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const buvGesamt = bruttolohn * (buvPercent / 100);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const krankentaggeldGesamt = bruttolohn * (krankentaggeldPercent / 100);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const totalAbzuege = ahvGesamt + nbuvGesamt + buvGesamt + krankentaggeldGesamt;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const nettolohnRaw = bruttolohn - totalAbzuege;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 return roundToFiveCents(nettolohnRaw);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \}, [timeToMinutes, roundToFiveCents]);
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

\f0\fs20 \cf2 \'a0 const goToPreviousYear = () => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setCurrentDate(prev => new Date(prev.getFullYear() - 1, prev.getMonth(), 1));
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const goToNextYear = () => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 setCurrentDate(prev => new Date(prev.getFullYear() + 1, prev.getMonth(), 1));
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 useEffect(() => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 const loadYearlyData = async () => \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setIsLoading(true);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setLoadingProgress(0); // Startet bei 0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 try \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const settingsList = await Settings.list();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const currentRate = settingsList && settingsList.length > 0 ? settingsList[0].hourlyRate || 23.45 : 23.45;
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 setHourlyRate(currentRate);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const year = currentDate.getFullYear();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 const summaryData = [];
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 for (let month = 0; month < 12; month++) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const entries = await TimeEntry.filter(\{ month: month, year: year \});
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const totalMinutes = entries.reduce((acc, entry) => acc + timeToMinutes(entry.hours || '00:00'), 0);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 const nettolohn = calculateMonthlyNettolohn(entries, currentRate);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 summaryData.push(\{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 month: month,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 monthName: monthNames[month],
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 hours: minutesToTime(totalMinutes),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 hoursDecimal: (totalMinutes / 60).toFixed(2),
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 salary: nettolohn,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 entriesCount: entries.length,
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \});
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 // Fortschritt nach jedem geladenen Monat aktualisieren
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 setLoadingProgress(((month + 1) / 12) * 100);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 setYearlySummary(summaryData);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \} catch (error) \{
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 console.error('Fehler beim Laden der Jahresdaten:', error);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 showToast('error', 'Fehler beim Laden der Jahresdaten');
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 setIsLoading(false);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 \};
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 loadYearlyData();
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 \}, [currentDate, calculateMonthlyNettolohn, minutesToTime, timeToMinutes]);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const totalYearlyHours = useMemo(() => yearlySummary.reduce((acc, month) => acc + timeToMinutes(month.hours), 0), [yearlySummary, timeToMinutes]);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const totalYearlySalary = useMemo(() => yearlySummary.reduce((acc, month) => acc + month.salary, 0), [yearlySummary]);
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 const totalEntries = useMemo(() => yearlySummary.reduce((acc, month) => acc + month.entriesCount, 0), [yearlySummary]);
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

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 style=\{\{ width: `$\{loadingProgress\}%` \}\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ></div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="mt-4 text-gray-400">Jahresdaten werden geladen... \{Math.round(loadingProgress)\}%</p>
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

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \{/* Header */\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <header className="flex flex-col items-center justify-center w-full px-4 py-6 text-center glassmorphism rounded-lg shadow-xl md:flex-row md:justify-between mb-8">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="flex flex-col items-center">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <h1 className="text-2xl font-bold text-gray-50 md:text-3xl">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 Jahresbilanz
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <span className="version-tag">V.3.5</span>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </h1>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="flex items-center mt-4 space-x-2 md:mt-0">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <button onClick=\{goToPreviousYear\} className="button-3d px-3 py-1 text-gray-400" aria-label="Vorheriges Jahr">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <ChevronLeft className="w-5 h-5" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </button>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <span className="text-xl font-medium text-gray-50">\{currentDate.getFullYear()\}</span>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <button onClick=\{goToNextYear\} className="button-3d px-3 py-1 text-gray-400" aria-label="N\'e4chstes Jahr">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <ChevronRight className="w-5 h-5" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </button>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 </header>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
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

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \{/* Jahres\'fcbersicht Cards */\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="glassmorphism p-6 rounded-lg">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="flex items-center gap-3">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <TrendingUp className="w-8 h-8 text-blue-400" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-sm text-gray-400">Gesamtstunden</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-2xl font-bold text-gray-100">\{minutesToTime(totalYearlyHours)\}</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="glassmorphism p-6 rounded-lg">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="flex items-center gap-3">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <TrendingUp className="w-8 h-8 text-green-400" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-sm text-gray-400">Nettolohn</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-2xl font-bold text-gray-100">CHF \{totalYearlySalary.toFixed(2)\}</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="glassmorphism p-6 rounded-lg">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="flex items-center gap-3">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <TrendingUp className="w-8 h-8 text-purple-400" />
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-sm text-gray-400">Arbeitstage</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-2xl font-bold text-gray-100">\{totalEntries\}</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \{/* Monats\'fcbersicht Tabelle */\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <main className="table-3d">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <table className="min-w-full divide-y divide-gray-700" aria-label="Jahres\'fcbersicht">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <thead className="bg-gray-700/50">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <tr>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Monat</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Arbeitstage</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Stunden</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Stunden (Dezimal)</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-400 uppercase">Nettolohn (CHF)</th>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </tr>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </thead>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <tbody className="bg-gray-800/20 divide-y divide-gray-700">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{yearlySummary.map((month) => (
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <tr key=\{month.month\} className="table-row-3d">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 text-sm font-medium text-gray-200 whitespace-nowrap">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{month.monthName\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{month.entriesCount\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 text-sm font-medium text-gray-200 whitespace-nowrap">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{month.hours\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 text-sm text-gray-300 whitespace-nowrap">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{month.hoursDecimal\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 text-sm font-bold text-green-400 whitespace-nowrap">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{month.salary.toFixed(2)\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </tr>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 ))\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </tbody>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <tfoot className="bg-gray-700/50">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <tr>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 text-sm font-bold text-gray-400 whitespace-nowrap">Total</td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 text-sm font-bold text-gray-200 whitespace-nowrap">\{totalEntries\}</td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 text-sm font-bold text-gray-200 whitespace-nowrap">\{minutesToTime(totalYearlyHours)\}</td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 text-sm font-bold text-gray-200 whitespace-nowrap">\{(totalYearlyHours / 60).toFixed(2)\}</td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <td className="px-6 py-4 text-sm font-bold text-green-400 whitespace-nowrap">\{totalYearlySalary.toFixed(2)\}</td>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </tr>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </tfoot>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </table>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 </main>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 \{/* Zus\'e4tzliche Informationen */\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 <div className="glassmorphism p-6 rounded-lg mt-8">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <h3 className="text-lg font-semibold text-gray-200 mb-4">Jahresstatistiken</h3>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-sm text-gray-400">Durchschnitt/Monat</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-lg font-medium text-gray-200">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{minutesToTime(Math.round(totalYearlyHours / 12))\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-sm text-gray-400">Durchschnitt/Tag</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-lg font-medium text-gray-200">
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 \{totalEntries > 0 ? minutesToTime(Math.round(totalYearlyHours / totalEntries)) : '00:00'\}
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-sm text-gray-400">Stundenlohn</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-lg font-medium text-gray-200">CHF \{hourlyRate.toFixed(2)\}</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-sm text-gray-400">Durchschnitt/Monat</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 <p className="text-lg font-medium text-green-400">CHF $\{(totalYearlySalary / 12).toFixed(2)\}</p>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0\'a0\'a0 </div>
\f1\fs32 \cf3 \

\f0\fs20 \cf2 \'a0 );\}
\f1\fs32 \cf3 \
}